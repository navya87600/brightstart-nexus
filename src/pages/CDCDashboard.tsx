import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Calendar, TrendingUp } from 'lucide-react';

const CDCDashboard = () => {
  const therapists = [
    { name: 'Dr. Sarah Johnson', specialty: 'Speech Therapy', status: 'active', sessions: 24 },
    { name: 'Dr. Michael Chen', specialty: 'Occupational Therapy', status: 'active', sessions: 18 },
    { name: 'Lisa Anderson', specialty: 'Behavioral Therapy', status: 'active', sessions: 15 },
  ];

  const stats = [
    { label: 'Total Therapists', value: '12', icon: Users, color: 'text-primary' },
    { label: 'Active Clients', value: '48', icon: Users, color: 'text-secondary' },
    { label: 'Sessions This Month', value: '156', icon: Calendar, color: 'text-accent' },
    { label: 'Growth Rate', value: '+23%', icon: TrendingUp, color: 'text-highlight-foreground' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">CDC Centre Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Manage your centre and team</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 bg-muted rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Therapist Management */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Therapist Team</h3>
              <Button size="sm">Add Therapist</Button>
            </div>
            <div className="space-y-3">
              {therapists.map((therapist) => (
                <div
                  key={therapist.name}
                  className="p-4 bg-gradient-to-r from-primary-light/10 to-secondary-light/10 rounded-lg border border-border"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{therapist.name}</p>
                      <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                    </div>
                    <Badge>{therapist.status}</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-muted-foreground">
                      {therapist.sessions} sessions this month
                    </span>
                    <Button size="sm" variant="outline">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Centre Analytics */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Performance Overview</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Capacity Utilization</span>
                  <span className="text-sm text-muted-foreground">78%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-primary rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Client Satisfaction</span>
                  <span className="text-sm text-muted-foreground">4.8/5.0</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-secondary rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Session Completion</span>
                  <span className="text-sm text-muted-foreground">94%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-accent rounded-full" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CDCDashboard;
