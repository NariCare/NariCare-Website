import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "New Mom",
      content: "Naricare saved my breastfeeding journey. The 24/7 AI support helped me through those difficult 3 AM questions, and the expert consultations gave me the confidence I needed.",
      rating: 5,
      program: "3-Month Program"
    },
    {
      name: "Anjali Patel",
      role: "Mother of Two",
      content: "The community support was incredible. Connecting with other moms who understood exactly what I was going through made all the difference. The knowledge base is comprehensive and easy to navigate.",
      rating: 5,
      program: "1-Month Program"
    },
    {
      name: "Meera Singh",
      role: "Working Mom",
      content: "As a working mom, the flexibility of scheduling expert consultations and having instant AI support was a lifesaver. The baby growth tracking helped me stay on top of my little one's development.",
      rating: 5,
      program: "3-Month Program"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            What Mothers Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real mothers who have transformed their breastfeeding journey with Naricare
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-card rounded-soft shadow-card border border-border/50 p-6 h-full flex flex-col">
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="mt-auto pt-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <div className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-2">
                      {testimonial.program}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-primary">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 2,000+ mothers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;