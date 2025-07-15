import { Quote } from 'lucide-react';
import founderImage from '@/assets/founder-gayathri.webp';

const FounderSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Meet the Founder
          </h2>
        </div>
        
        <div className="bg-card rounded-soft shadow-card border border-border/50 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0 shadow-warm">
              <img 
                src={founderImage} 
                alt="Gayathri Kanumuri, Founder of Naricare" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                  Gayathri Kanumuri, Founder of Naricare
                </h3>
                
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    My journey to creating Naricare was born from my own struggles with breastfeeding and the overwhelming misinformation that surrounded me as a new mom. I faced countless myths and challenges, but when I finally received the right support and guidance, my entire experience transformed.
                  </p>
                  
                  <p>
                    I was not only heard and educated but empowered with the knowledge to breastfeed confidently and pain-free. Joining a supportive community of other new moms was a game-changer.
                  </p>
                  
                  <p>
                    From contemplating giving up breastfeeding when my daughter was just three weeks old, I am now proudly nurturing my nearly 4-year-old toddler.
                  </p>
                  
                  <p className="text-primary font-medium">
                    This experience ignited my passion to address a critical gap: the lack of widespread, accurate information about breastfeeding. It's the most profound gift you can give your child, yet many women who wish to breastfeed their babies are driven to formula feeding due to misconceptions and inadequate support.
                  </p>
                  
                  <p>
                    At Naricare, we are committed to transforming the breastfeeding experience for every mother. Our mission is to break through the myths, provide the right support, and empower moms with the knowledge they need to succeed. Together, we can make a powerful impact and ensure that every mom and baby thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;