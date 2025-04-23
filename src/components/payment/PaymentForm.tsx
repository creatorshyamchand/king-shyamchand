
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface PaymentFormProps {
  courseName: string;
  coursePrice: number;
  onPaymentComplete?: () => void;
}

const UPI_ID = "8016827315@ybl"; 

const PaymentForm = ({ courseName, coursePrice, onPaymentComplete }: PaymentFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guardianName: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Utility for opening UPI payment intent (Android)
  const openUPIPayment = () => {
    const amount = coursePrice.toFixed(2);
    const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(formData.fullName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(courseName)}`;
    window.location.href = upiUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Store payment record before redirecting to payment app
    const { error } = await supabase.from("payments").insert([{
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      guardian_name: formData.guardianName,
      course: courseName,
      amount: coursePrice,
      upi_id: UPI_ID,
      status: "pending",
    }]);
    setIsProcessing(false);

    if (error) {
      toast({
        title: "Error saving payment",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Proceed to Pay",
      description: "You will be redirected to a payment app to complete your payment.",
    });

    setTimeout(() => {
      openUPIPayment();
      if (onPaymentComplete) onPaymentComplete();
    }, 900);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Enroll in {courseName}</CardTitle>
        <CardDescription>
          Complete the form below and proceed to payment with your preferred payment app.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guardianName">Guardian Name</Label>
            <Input
              id="guardianName"
              name="guardianName"
              placeholder="Enter guardian's name"
              required
              value={formData.guardianName}
              onChange={handleChange}
            />
          </div>
          <div className="pt-2">
            <p className="font-medium">Amount to pay: <span className="text-lg font-bold">₹{coursePrice}</span></p>
          </div>
          <div className="text-academy-primary text-sm">
            UPI ID: <b>{UPI_ID}</b>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-[#5f259f] hover:bg-[#492285] flex gap-2 items-center" 
            type="submit"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : (
              <>
                <Phone size={18} /> Pay via Payment App
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PaymentForm;
