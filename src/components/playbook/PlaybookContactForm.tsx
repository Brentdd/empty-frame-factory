import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const PlaybookContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon to discuss how we can help.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="bg-card border rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
      <p className="text-muted-foreground text-center mb-8">
        Ready to expand into European markets? Let's discuss your strategy.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <Input
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div>
          <Textarea
            placeholder="Tell us about your expansion plans..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full" size="lg">
          Send Message
        </Button>
      </form>
    </div>
  );
};
