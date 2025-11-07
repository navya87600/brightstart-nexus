import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { loginSuccess } from '@/store/slices/authSlice';
import { UserRole } from '@/store/slices/authSlice';
import { Baby } from 'lucide-react';

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('parent');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    dispatch(
      loginSuccess({
        id: '1',
        name: name || 'Demo User',
        email,
        role: selectedRole,
      })
    );
    
    // Navigate based on role
    if (selectedRole === 'parent') navigate('/parent-dashboard');
    else if (selectedRole === 'therapist') navigate('/therapist-dashboard');
    else if (selectedRole === 'cdc-centre') navigate('/cdc-dashboard');
    else navigate('/');
  };

  const roles = [
    { value: 'parent' as UserRole, label: 'Parent', icon: '👨‍👩‍👧' },
    { value: 'therapist' as UserRole, label: 'Therapist', icon: '🩺' },
    { value: 'cdc-centre' as UserRole, label: 'CDC Centre', icon: '🏥' },
    { value: 'admin' as UserRole, label: 'Admin', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-background to-secondary-light p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Baby className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Welcome to CDC Connect</h1>
        <p className="text-center text-muted-foreground mb-6">Sign in to continue</p>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="role">Select Your Role</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {roles.map((role) => (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => setSelectedRole(role.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedRole === role.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{role.icon}</div>
                      <div className="text-sm font-medium">{role.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="role">Select Your Role</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {roles.map((role) => (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => setSelectedRole(role.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedRole === role.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{role.icon}</div>
                      <div className="text-sm font-medium">{role.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
