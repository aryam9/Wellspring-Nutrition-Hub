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
  Award,
  Star,
  TrendingUp,
  Shield
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

  const statistics = [
    { number: "15,000+", label: "Active Users", icon: Users },
    { number: "92%", label: "Goal Achievement Rate", icon: Target },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "2.5x", label: "Faster Results", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      image: "/placeholder.svg",
      quote: "Lost 25 pounds in 4 months! The personalized meal plans made it so easy to stick to my goals. I finally found a sustainable approach to healthy eating.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Teacher",
      image: "/placeholder.svg", 
      quote: "Managing my diabetes has never been easier. The expert consultations and tailored nutrition advice have completely transformed my health.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Busy Mom",
      image: "/placeholder.svg",
      quote: "With three kids, I thought I'd never have time for proper nutrition. This app made meal planning effortless and my energy levels are through the roof!",
      rating: 5
    }
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

      {/* Statistics Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their health with our platform.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-20 h-20 bg-health-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-10 w-10 text-health-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-health-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-health-secondary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Stories, Real Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our platform has helped people achieve their health goals and transform their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-health-secondary/20"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-health-warning text-health-warning" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border">
              <Shield className="h-5 w-5 text-health-success" />
              <span className="text-sm font-medium">Verified Reviews from Real Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Health Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan to achieve your health and nutrition goals with personalized guidance and expert support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic</CardTitle>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-health-primary">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Basic meal planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Mobile app access</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6" variant="outline">
                  <Link to="/pricing">Choose Basic</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-health-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-health-primary">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Advanced meal planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Detailed progress analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Expert consultations (2/month)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Custom dietary restrictions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Recipe recommendations</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6 bg-health-primary hover:bg-health-primary/90">
                  <Link to="/pricing">Choose Premium</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-health-primary">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Unlimited expert consultations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Personal nutritionist</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Advanced health metrics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-health-success flex-shrink-0" />
                    <span>Family plan (up to 4 members)</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-6" variant="outline">
                  <Link to="/pricing">Choose Enterprise</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              All plans include a 7-day free trial. Cancel anytime. No hidden fees.
            </p>
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