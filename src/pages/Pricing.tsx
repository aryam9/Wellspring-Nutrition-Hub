import { SubscriptionCard } from "@/components/subscription/SubscriptionCard";
import { SubscriptionStatus } from "@/components/subscription/SubscriptionStatus";
import { useAuth } from "@/contexts/AuthContext";

export default function Pricing() {
  const { user } = useAuth();

  const plans = [
    {
      tier: 'Basic' as const,
      price: 9,
      features: [
        'Basic meal planning',
        'Progress tracking',
        'Email support',
        'Mobile app access'
      ]
    },
    {
      tier: 'Premium' as const,
      price: 19,
      features: [
        'Advanced meal planning',
        'Detailed progress analytics',
        'Expert consultations (2/month)',
        'Priority support',
        'Custom dietary restrictions',
        'Recipe recommendations'
      ],
      popular: true
    },
    {
      tier: 'Enterprise' as const,
      price: 29,
      features: [
        'Everything in Premium',
        'Unlimited expert consultations',
        'Personal nutritionist',
        '24/7 priority support',
        'Advanced health metrics',
        'Family plan (up to 4 members)',
        'Meal delivery integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Health Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan to achieve your health and nutrition goals with personalized guidance and expert support.
          </p>
        </div>

        {user && (
          <div className="max-w-md mx-auto mb-12">
            <SubscriptionStatus />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <SubscriptionCard
              key={plan.tier}
              tier={plan.tier}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day free trial. Cancel anytime. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
}