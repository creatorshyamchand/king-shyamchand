
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone } from "lucide-react";

interface PaymentFormProps {
  courseName: string;
  coursePrice: number;
  onPaymentComplete?: () => void;
}

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulating payment processing with PhonePe
    setTimeout(() => {
      // This would be replaced with actual PhonePe integration
      toast({
        title: "Payment initiated!",
        description: "You will be redirected to PhonePe for payment completion.",
      });
      
      // Simulate PhonePe redirect
      setTimeout(() => {
        setIsProcessing(false);
        if (onPaymentComplete) {
          onPaymentComplete();
        }
      }, 1500);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Enroll in {courseName}</CardTitle>
        <CardDescription>
          Complete the form below and proceed to payment with PhonePe
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
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-[#5f259f] hover:bg-[#492285] flex gap-2 items-center" 
            type="submit"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : (
              <>
                <Phone size={18} /> Pay with PhonePe
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PaymentForm;
