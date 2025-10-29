import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company name is required").max(100),
  interest: z.string().min(1, "Please select an option"),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate with zod
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Netlify Forms
      const formElement = e.currentTarget;
      const netlifyFormData = new FormData(formElement);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your interest!",
          description: "We'll be in touch soon.",
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          interest: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
      {/* Left Column - What We Offer */}
      <div>
        <h3 className="text-accent text-2xl font-bold mb-8">What We Offer</h3>
        <div className="space-y-4">
          {[
            "Strategic market entry planning",
            "Distribution channel development",
            "Compliance and logistics support",
            "Brand positioning for European markets",
            "Access to our retail network",
            "Ongoing coaching and mentorship"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="bg-card p-8 rounded-lg border border-accent/20">
        <h3 className="text-accent text-2xl font-bold mb-6">Get Started Today</h3>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          data-netlify="true"
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Your name"
              required
              className="bg-background border-accent/30 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@company.com"
              required
              className="bg-background border-accent/30 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">Company/Brand Name *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company"
              required
              className="bg-background border-accent/30 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-foreground">I'm interested in *</Label>
            <Select 
              value={formData.interest} 
              onValueChange={(value) => setFormData({ ...formData, interest: value })}
              required
            >
              <SelectTrigger id="interest" className="bg-background border-accent/30 focus:border-accent">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="webinar">Joining the next webinar</SelectItem>
                <SelectItem value="partnership">Brand partnership</SelectItem>
                <SelectItem value="consultation">Market entry consultation</SelectItem>
                <SelectItem value="distribution">Distribution support</SelectItem>
                <SelectItem value="general">General inquiry</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="interest" value={formData.interest} />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
          </Button>
        </form>
      </div>
    </div>
  );
};
