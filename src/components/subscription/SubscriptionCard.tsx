import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface SubscriptionCardProps {
  tier: 'Basic' | 'Premium' | 'Enterprise';
  price: number;
  features: string[];
  popular?: boolean;
}

export function SubscriptionCard({ tier, price, features, popular }: SubscriptionCardProps) {
  const { session, subscription } = useAuth();
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { tier },
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        toast({
          title: "Checkout Failed",
          description: error.message || "Failed to create checkout session.",
          variant: "destructive",
        });
        return;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isCurrentPlan = subscription.subscribed && subscription.subscription_tier === tier;

  return (
    <Card className={`relative ${popular ? 'border-primary scale-105' : ''}`}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{tier}</CardTitle>
        <CardDescription>
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/month</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {isCurrentPlan ? (
          <Button disabled className="w-full">
            Current Plan
          </Button>
        ) : (
          <Button onClick={handleSubscribe} className="w-full" variant={popular ? "default" : "outline"}>
            Subscribe to {tier}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}