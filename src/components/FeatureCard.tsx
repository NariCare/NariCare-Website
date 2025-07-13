import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: 'warm' | 'calm' | 'hero';
}

const FeatureCard = ({ icon: Icon, title, description, gradient = 'warm' }: FeatureCardProps) => {
  const gradientClasses = {
    warm: 'bg-gradient-warm',
    calm: 'bg-gradient-calm', 
    hero: 'bg-gradient-hero'
  };

  return (
    <Card className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${gradientClasses[gradient]} rounded-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;