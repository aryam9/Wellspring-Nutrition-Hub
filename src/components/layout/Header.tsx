import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Heart, Leaf, Apple, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Heart className="h-6 w-6 text-health-primary" />
            <Leaf className="h-5 w-5 text-health-success" />
            <Apple className="h-5 w-5 text-health-accent" />
          </div>
          <span className="font-bold text-xl">House of Health</span>
        </Link>

        <nav className="flex items-center gap-6">
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium hover:text-health-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/meal-plans" className="text-sm font-medium hover:text-health-primary transition-colors">
                Meal Plans
              </Link>
              <Link to="/progress" className="text-sm font-medium hover:text-health-primary transition-colors">
                Progress
              </Link>
              <Link to="/subscription" className="text-sm font-medium hover:text-health-primary transition-colors">
                Subscription
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button asChild className="bg-health-primary hover:bg-health-primary/90">
              <Link to="/auth">Get Started</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;