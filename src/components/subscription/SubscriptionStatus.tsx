import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function SubscriptionStatus() {
  const { user, session, subscription, subscriptionLoading, checkSubscription } = useAuth();
  const { toast } = useToast();

  const handleManageSubscription = async () => {
    if (!session) return;

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        toast({
          title: "Portal Access Failed",
          description: error.message || "Failed to access customer portal.",
          variant: "destructive",
        });
        return;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Portal error:', error);
      toast({
        title: "Portal Access Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Subscription Status</CardTitle>
            <CardDescription>Manage your subscription and billing</CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={checkSubscription}
            disabled={subscriptionLoading}
          >
            {subscriptionLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Current Plan:</span>
          <Badge variant={subscription.subscribed ? "default" : "secondary"}>
            {subscription.subscribed ? subscription.subscription_tier : "Free"}
          </Badge>
        </div>
        
        {subscription.subscribed && subscription.subscription_end && (
          <div className="flex items-center justify-between">
            <span className="font-medium">Next Billing Date:</span>
            <span className="text-sm text-muted-foreground">
              {formatDate(subscription.subscription_end)}
            </span>
          </div>
        )}

        <div className="flex gap-2">
          {subscription.subscribed && (
            <Button onClick={handleManageSubscription} variant="outline" className="flex-1">
              Manage Subscription
            </Button>
          )}
          <Button onClick={checkSubscription} variant="ghost" className="flex-1">
            Refresh Status
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}