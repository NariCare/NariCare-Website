import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import PlanCard from '@/components/PlanCard';
import { 
  Heart, 
  MessageCircle, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI-Powered Support",
      description: "Get instant answers to your breastfeeding questions with our GPT-powered chatbot, available 24/7.",
      gradient: 'warm' as const
    },
    {
      icon: Calendar,
      title: "Expert Consultations",
      description: "Schedule video calls with certified lactation consultants for personalized guidance.",
      gradient: 'calm' as const
    },
    {
      icon: Users,
      title: "Mom-to-Mom Community",
      description: "Connect with other mothers in our supportive group chats, moderated by experts.",
      gradient: 'hero' as const
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Access a comprehensive library of articles, tips, and resources organized by topic and baby age.",
      gradient: 'warm' as const
    },
    {
      icon: BarChart3,
      title: "Baby Growth Tracking",
      description: "Monitor your baby's development with easy-to-use tracking tools and visual reports.",
      gradient: 'calm' as const
    },
    {
      icon: Shield,
      title: "Expert-Verified Content",
      description: "All information is reviewed and approved by certified lactation consultants and pediatricians.",
      gradient: 'hero' as const
    }
  ];

  const plans = [
    {
      title: "1-Month Program",
      price: "$49",
      period: "month",
      description: "Perfect for getting started with professional breastfeeding support",
      features: [
        "24/7 AI chatbot support",
        "Basic knowledge base access",
        "Community group chat access",
        "2 expert consultation sessions",
        "Baby growth tracking tools",
        "Email support"
      ],
      ctaText: "Start 1-Month Program",
      isPopular: false
    },
    {
      title: "3-Month Program",
      price: "$99",
      period: "3 months",
      description: "Comprehensive support for your entire breastfeeding journey",
      features: [
        "Everything in 1-Month Program",
        "Unlimited expert consultations",
        "Priority scheduling",
        "Private 1:1 expert chat access",
        "Advanced tracking & reports",
        "Personalized care plans",
        "24/7 phone support",
        "Family member access (partner)"
      ],
      ctaText: "Start 3-Month Program",
      isPopular: true
    }
  ];

  const stats = [
    { number: "10,000+", label: "Mothers Supported" },
    { number: "50+", label: "Certified Experts" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Your Trusted
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Breastfeeding</span>
                <br />Support Journey
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Connect with certified lactation experts, AI-powered guidance, and a supportive community 
                of mothers on your breastfeeding journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl">
                  Learn More
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Mother and baby breastfeeding support" 
                  className="rounded-soft shadow-warm w-full h-auto animate-float"
                />
                <div className="absolute -bottom-6 -right-6 bg-card rounded-soft p-4 shadow-card border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-foreground">Expert Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Everything You Need for Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides expert guidance, community support, 
              and powerful tools to ensure your breastfeeding journey is successful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Choose Your Support Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the program that best fits your needs. Both plans include our core features 
              with varying levels of expert access and support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <PlanCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-up">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Certified Experts
              </h3>
              <p className="text-muted-foreground">
                All our lactation consultants are certified and experienced professionals.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                98% of our users report improved breastfeeding confidence and success.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Always Available
              </h3>
              <p className="text-muted-foreground">
                Access support anytime, anywhere with our mobile-optimized platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of mothers who have found success and confidence in their breastfeeding journey 
            with our expert-guided support platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-warm">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">NurtureLink</span>
          </div>
          <p className="text-muted-foreground">
            Supporting mothers and babies with expert guidance and community care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
