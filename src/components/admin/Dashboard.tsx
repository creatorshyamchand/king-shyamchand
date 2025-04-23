
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Mock data for students and enrollments
const MOCK_STUDENTS = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", course: "English (Class 5-8)", joinedOn: "2023-04-15", paymentStatus: "Paid" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", course: "English (Class 9-12)", joinedOn: "2023-04-10", paymentStatus: "Pending" },
  { id: 3, name: "Amit Kumar", email: "amit@example.com", course: "English (Class 5-8)", joinedOn: "2023-04-05", paymentStatus: "Paid" },
  { id: 4, name: "Sneha Roy", email: "sneha@example.com", course: "English (Class 9-12)", joinedOn: "2023-04-02", paymentStatus: "Paid" },
  { id: 5, name: "Vikram Singh", email: "vikram@example.com", course: "English (Class 5-8)", joinedOn: "2023-03-25", paymentStatus: "Pending" },
];

const MOCK_PAYMENTS = [
  { id: "PAY001", studentName: "Rahul Sharma", course: "English (Class 5-8)", amount: 2500, date: "2023-04-15", method: "PhonePe" },
  { id: "PAY002", studentName: "Sneha Roy", course: "English (Class 9-12)", amount: 3500, date: "2023-04-02", method: "PhonePe" },
  { id: "PAY003", studentName: "Amit Kumar", course: "English (Class 5-8)", amount: 2500, date: "2023-04-05", method: "PhonePe" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState(MOCK_STUDENTS);
  const [payments, setPayments] = useState(MOCK_PAYMENTS);

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

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/admin");
  };

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
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
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
                <CardDescription>From all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-academy-primary">
                  ₹{payments.reduce((total, payment) => total + payment.amount, 0)}
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
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="py-3 px-4 text-left">Payment ID</th>
                      <th className="py-3 px-4 text-left">Student</th>
                      <th className="py-3 px-4 text-left">Course</th>
                      <th className="py-3 px-4 text-left">Amount</th>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(payment => (
                      <tr key={payment.id} className="border-b border-muted">
                        <td className="py-3 px-4">{payment.id}</td>
                        <td className="py-3 px-4">{payment.studentName}</td>
                        <td className="py-3 px-4">{payment.course}</td>
                        <td className="py-3 px-4">₹{payment.amount}</td>
                        <td className="py-3 px-4">{payment.date}</td>
                        <td className="py-3 px-4">{payment.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
