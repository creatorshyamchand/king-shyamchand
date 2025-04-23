
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  joinedOn: string;
  paymentStatus: string;
};

type Payment = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  guardian_name: string | null;
  course: string;
  amount: number;
  upi_id: string;
  status: string;
  created_at: string;
};

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState<Student[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      toast({
        title: "Access denied",
        description: "Please login to access the dashboard",
        variant: "destructive",
      });
      navigate("/admin");
    }
  }, [navigate, toast]);

  useEffect(() => {
    // Fetch payments from Supabase
    (async () => {
      setIsLoading(true);
      const { data: paymentRows, error } = await supabase
        .from("payments")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        toast({
          title: "Failed to load payments",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      setPayments(paymentRows || []);

      // For student tab: Simplified by grouping by unique student (email) and check payment status
      const studentMap: Record<string, Student> = {};
      (paymentRows || []).forEach((pay) => {
        studentMap[pay.email] = {
          id: pay.id,
          name: pay.full_name,
          email: pay.email,
          course: pay.course,
          joinedOn: new Date(pay.created_at).toLocaleDateString(),
          paymentStatus: pay.status === "paid" ? "Paid" : "Pending",
        };
      });
      setStudents(Object.values(studentMap));
      setIsLoading(false);
    })();
  }, [toast]);

  // Fetch contact submissions for the Submissions tab
  useEffect(() => {
    if (activeTab === "submissions") {
      setLoadingSubmissions(true);
      supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .then(({ data, error }) => {
          if (error) {
            toast({
              title: "Failed to load submissions",
              description: error.message,
              variant: "destructive",
            });
            setSubmissions([]);
          } else {
            setSubmissions(data || []);
          }
          setLoadingSubmissions(false);
        });
    }
  }, [activeTab, toast]);

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/admin");
  };

  // Calculate revenue and totals
  const totalRevenue = payments.filter((p) => p.status === "paid").reduce((total, p) => total + p.amount, 0);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button 
          variant="outline" 
          className="border-academy-primary text-academy-primary hover:bg-academy-primary hover:text-white"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8 flex flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Total Students</CardTitle>
                <CardDescription>Current enrolled students</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-academy-primary">{students.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Total Revenue</CardTitle>
                <CardDescription>From all courses (paid only)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-academy-primary">
                  ₹{totalRevenue}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Pending Payments</CardTitle>
                <CardDescription>Students with pending payments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-academy-primary">
                  {students.filter(student => student.paymentStatus === "Pending").length}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Students Tab */}
        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Students</CardTitle>
              <CardDescription>Manage all student registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                {isLoading ? (
                  <div className="p-8 text-center">Loading students...</div>
                ) : (
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Email</th>
                      <th className="py-3 px-4 text-left">Course</th>
                      <th className="py-3 px-4 text-left">Joined On</th>
                      <th className="py-3 px-4 text-left">Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id} className="border-b border-muted">
                        <td className="py-3 px-4">{student.name}</td>
                        <td className="py-3 px-4">{student.email}</td>
                        <td className="py-3 px-4">{student.course}</td>
                        <td className="py-3 px-4">{student.joinedOn}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            student.paymentStatus === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {student.paymentStatus}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Payments Tab */}
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                {isLoading ? (
                  <div className="p-8 text-center">Loading payments...</div>
                ) : (
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-3 px-4 text-left">Payment ID</th>
                      <th className="py-3 px-4 text-left">Student</th>
                      <th className="py-3 px-4 text-left">Course</th>
                      <th className="py-3 px-4 text-left">Amount</th>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Method</th>
                      <th className="py-3 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(payment => (
                      <tr key={payment.id} className="border-b border-muted">
                        <td className="py-3 px-4">{payment.id}</td>
                        <td className="py-3 px-4">{payment.full_name}</td>
                        <td className="py-3 px-4">{payment.course}</td>
                        <td className="py-3 px-4">₹{payment.amount}</td>
                        <td className="py-3 px-4">{new Date(payment.created_at).toLocaleDateString()}</td>
                        <td className="py-3 px-4">UPI</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            payment.status === "paid"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Submissions Tab */}
        <TabsContent value="submissions">
          <Card>
            <CardHeader>
              <CardTitle>Contact Submissions</CardTitle>
              <CardDescription>See all messages submitted via the contact form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                {loadingSubmissions ? (
                  <div className="p-8 text-center">Loading submissions...</div>
                ) : (
                  submissions.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">No submissions found.</div>
                  ) : (
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Phone</th>
                        <th className="py-3 px-4 text-left">Message</th>
                        <th className="py-3 px-4 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((sub) => (
                        <tr key={sub.id} className="border-b border-muted">
                          <td className="py-3 px-4">{sub.name}</td>
                          <td className="py-3 px-4">{sub.email}</td>
                          <td className="py-3 px-4">{sub.phone}</td>
                          <td className="py-3 px-4 max-w-xs break-words">{sub.message}</td>
                          <td className="py-3 px-4">{new Date(sub.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
