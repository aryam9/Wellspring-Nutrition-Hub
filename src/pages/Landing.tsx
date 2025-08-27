import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Zap,
  Apple,
  Clock,
  Award
} from 'lucide-react';

const Landing = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Target,
      title: "Personalized Meal Plans",
      description: "Custom nutrition plans based on your goals, dietary restrictions, and health conditions"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your health journey with detailed analytics and insights"
    },
    {
      icon: Users,
      title: "Expert Consultations",
      description: "Connect with certified nutritionists for professional guidance"
    },
    {
      icon: Zap,
      title: "AI-Powered Recommendations",
      description: "Get smart suggestions that adapt to your preferences and progress"
    }
  ];

  const benefits = [
    "Science-based nutritional guidance",
    "Customized meal plans with portion control",
    "Regional food recommendations",
    "Progress tracking and motivation",
    "Dietary restriction support",
    "24/7 access to your nutrition plan"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-health-secondary/20 to-health-primary/10 py-20">
        <div className="container px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-12 w-12 text-health-primary" />
              <Apple className="h-10 w-10 text-health-success" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-health-primary to-health-success bg-clip-text text-transparent">
              Your Personal Nutrition Expert
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your health with personalized meal plans, expert guidance, and science-based nutrition insights tailored just for you.
            </p>
            {user ? (
              <Button asChild size="lg" className="bg-health-primary hover:bg-health-primary/90 text-lg px-8 py-6">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-health-primary hover:bg-health-primary/90 text-lg px-8 py-6">
                  <Link to="/auth">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="#features">Learn More</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Optimal Health
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and guidance you need to achieve your nutrition goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-health-secondary rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-health-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-health-secondary/10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose House of Health?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our certified nutrition experts use the latest scientific research to provide you with personalized guidance that actually works.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-health-primary" />
                    <CardTitle>Quick Setup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get your personalized meal plan in just 5 minutes with our comprehensive health assessment.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-health-primary" />
                    <CardTitle>Certified Experts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Work with licensed nutritionists and dietitians who understand your unique needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-health-primary to-health-success">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have already started their journey to better health with personalized nutrition.
          </p>
          {!user && (
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/auth">Get Started Today</Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;