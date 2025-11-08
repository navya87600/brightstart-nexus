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
import { addChild } from '@/store/slices/childrenSlice';
import OTPVerification from '@/components/OTPVerification';

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('parent');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleOTPVerified = () => {
    const userId = Math.random().toString(36).substr(2, 9);
    
    dispatch(
      loginSuccess({
        id: userId,
        firstName: firstName || 'Demo',
        lastName: lastName || 'User',
        email,
        mobile,
        role: selectedRole,
      })
    );

    if (selectedRole === 'parent' && isSignup) {
      dispatch(
        addChild({
          id: Math.random().toString(36).substr(2, 9),
          name: childName,
          age: parseInt(childAge),
          avatar: '👶',
          therapies: [],
          milestones: [],
        })
      );
    }
    
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
            {!showOTP ? (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Label htmlFor="login-mobile">Mobile Number</Label>
                  <Input
                    id="login-mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send OTP
                </Button>
              </form>
            ) : (
              <OTPVerification
                mobile={mobile}
                onVerified={handleOTPVerified}
                onBack={() => setShowOTP(false)}
              />
            )}
          </TabsContent>

          <TabsContent value="signup">
            {!showOTP ? (
              <form
                onSubmit={(e) => {
                  setIsSignup(true);
                  handleSubmit(e);
                }}
                className="space-y-4"
              >
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
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
                  <Label htmlFor="signup-mobile">Mobile Number</Label>
                  <Input
                    id="signup-mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                {selectedRole === 'parent' && (
                  <>
                    <div>
                      <Label htmlFor="childName">Child's Name</Label>
                      <Input
                        id="childName"
                        type="text"
                        placeholder="Emma"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="childAge">Child's Age (years)</Label>
                      <Input
                        id="childAge"
                        type="number"
                        placeholder="4"
                        min="0"
                        max="18"
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full">
                  Send OTP
                </Button>
              </form>
            ) : (
              <OTPVerification
                mobile={mobile}
                onVerified={handleOTPVerified}
                onBack={() => setShowOTP(false)}
              />
            )}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
