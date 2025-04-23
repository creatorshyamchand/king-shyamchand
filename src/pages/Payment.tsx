
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PaymentForm from "@/components/payment/PaymentForm";
import { Course, getCourse } from "@/data/courses";
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourse(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        navigate("/courses");
        toast({
          title: "Course not found",
          description: "The course you're trying to pay for doesn't exist.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }
  }, [courseId, navigate, toast]);

  const handlePaymentComplete = () => {
    setPaymentSuccess(true);
    toast({
      title: "Payment successful!",
      description: "You have successfully enrolled in the course.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading payment information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-red-500">Course not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {paymentSuccess ? (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
              <div className="mb-6 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
              <p className="mb-6 text-gray-600">
                Thank you for enrolling in <span className="font-medium">{course.title}</span>. Your payment has been processed successfully.
              </p>
              <p className="mb-8 text-gray-600">
                You will receive an email with further instructions soon.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/">
                  <Button className="w-full bg-academy-primary hover:bg-academy-secondary">
                    Return to Home
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" className="w-full">
                    Browse More Courses
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <PaymentForm 
                  courseName={course.title}
                  coursePrice={course.price}
                  onPaymentComplete={handlePaymentComplete}
                />
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={course.image} alt={course.title} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <p className="font-medium">{course.title}</p>
                      <p className="text-sm text-gray-500">{course.level}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                      <span>Course fee</span>
                      <span>₹{course.price}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <span>Total</span>
                      <span>₹{course.price}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-academy-light p-6 rounded-lg">
                  <h4 className="font-medium mb-2">What you'll get:</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-academy-primary">✓</span>
                      <span>Complete {course.duration} course</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-academy-primary">✓</span>
                      <span>Study materials and worksheets</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-academy-primary">✓</span>
                      <span>Regular assessments</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-academy-primary">✓</span>
                      <span>Direct interaction with instructor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
