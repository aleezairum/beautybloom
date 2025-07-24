import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeNewsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the future of beauty. Check your email for exclusive offers.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribeNewsletterMutation.mutate(email);
  };

  const benefits = [
    {
      icon: "fas fa-gift",
      title: "Exclusive Offers",
      description: "First access to sales and member-only discounts"
    },
    {
      icon: "fas fa-flask",
      title: "Beauty Insights",
      description: "Expert tips and latest skincare innovations"
    },
    {
      icon: "fas fa-star",
      title: "VIP Access",
      description: "Early access to new product launches"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join the <span className="gradient-text">Future</span> of Beauty
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get exclusive access to new products, beauty tips, and special offers from our photonic skincare experts.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 rounded-full glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent focus:border-orange-500 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={subscribeNewsletterMutation.isPending}
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-400 transition-all duration-300 hover-scale animate-glow disabled:opacity-50"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              {subscribeNewsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-4">
                <i className={`${benefit.icon} text-white text-xl`}></i>
              </div>
              <h3 className="font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-sm text-gray-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
