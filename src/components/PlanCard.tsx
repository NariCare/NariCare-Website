import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const PlanCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  ctaText 
}: PlanCardProps) => {
  return (
    <Card className={`relative group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 ${
      isPopular 
        ? 'border-primary shadow-warm scale-105' 
        : 'border-border/50 bg-card/50 backdrop-blur-sm'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-warm text-white px-4 py-1 rounded-full font-medium">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          {title}
        </h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground ml-1">/{period}</span>
        </div>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span className="text-foreground text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full" 
          variant={isPopular ? "default" : "outline"}
          size="lg"
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanCard;