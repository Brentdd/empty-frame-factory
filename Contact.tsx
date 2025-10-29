
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for your interest. If your inquiry aligns with our focus, we will be in touch.",
      });
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-evergrove-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6">Contact</h2>
            <p className="text-evergrove-200 mb-8 leading-relaxed">
              Evergrove Capital maintains a selective approach to new relationships. We appreciate your interest and will respond if there is potential alignment.
            </p>
            <div className="space-y-4 text-sm text-evergrove-300">
              <p>Our offices are by invitation only.</p>
              <p className="font-light">contact@evergrovecapital.com</p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-evergrove-800 border-evergrove-700 text-white placeholder:text-evergrove-500"
                    required
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    className="bg-evergrove-800 border-evergrove-700 text-white placeholder:text-evergrove-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input 
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  placeholder="Company (if applicable)"
                  className="bg-evergrove-800 border-evergrove-700 text-white placeholder:text-evergrove-500"
                />
              </div>
              
              <div>
                <Textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your inquiry"
                  className="bg-evergrove-800 border-evergrove-700 text-white placeholder:text-evergrove-500 min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-white text-evergrove-900 hover:bg-evergrove-200 w-full md:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
