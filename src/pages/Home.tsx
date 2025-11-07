import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, GraduationCap, Heart, Calendar, BookOpen, MessageSquare } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Connect with Therapists',
      description: 'Find qualified therapists specialized in your child\'s needs',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Book and manage appointments with just a few clicks',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      icon: Heart,
      title: 'Track Progress',
      description: 'Monitor your child\'s developmental milestones',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: GraduationCap,
      title: 'Professional Training',
      description: 'Access courses and certifications for therapists',
      color: 'text-highlight',
      bg: 'bg-highlight/20',
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Explore guides, articles, and educational materials',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: MessageSquare,
      title: 'Community Support',
      description: 'Join discussions with other parents and professionals',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
  ];

  const roles = [
    {
      title: 'Parents',
      description: 'Track your child\'s progress and connect with experts',
      icon: '👨‍👩‍👧',
      link: '/auth',
    },
    {
      title: 'Therapists',
      description: 'Manage sessions and collaborate with families',
      icon: '🩺',
      link: '/auth',
    },
    {
      title: 'CDC Centres',
      description: 'Coordinate care and manage your team',
      icon: '🏥',
      link: '/auth',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-secondary-light to-accent-light">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Supporting Every Child's Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with therapists, track milestones, and access resources - all in one place
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg">
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/training">Explore Training</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`${feature.bg} ${feature.color} p-3 rounded-xl w-fit mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Who Are You?</h2>
          <p className="text-center text-muted-foreground mb-12">Choose your role to get started</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {roles.map((role) => (
              <Link key={role.title} to={role.link}>
                <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="text-5xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of families and professionals transforming child development care
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/auth">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
