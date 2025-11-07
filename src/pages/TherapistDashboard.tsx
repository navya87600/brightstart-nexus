import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Clock, Award } from 'lucide-react';

const TherapistDashboard = () => {
  const todaySessions = [
    { id: 1, child: 'Emma', time: '10:00 AM', type: 'Speech Therapy', status: 'upcoming' },
    { id: 2, child: 'Noah', time: '11:30 AM', type: 'Occupational Therapy', status: 'upcoming' },
    { id: 3, child: 'Olivia', time: '2:00 PM', type: 'Speech Therapy', status: 'upcoming' },
  ];

  const weeklyStats = [
    { label: 'Sessions This Week', value: '12', icon: Calendar, color: 'text-primary' },
    { label: 'Active Clients', value: '8', icon: Users, color: 'text-secondary' },
    { label: 'Hours Logged', value: '18', icon: Clock, color: 'text-accent' },
    { label: 'Completion Rate', value: '95%', icon: Award, color: 'text-highlight-foreground' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Therapist Dashboard</h1>
          <p className="text-muted-foreground">Manage your schedule and track sessions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {weeklyStats.map((stat) => (
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
          {/* Today's Schedule */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Today's Schedule</h3>
              <Button size="sm">View Calendar</Button>
            </div>
            <div className="space-y-3">
              {todaySessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-lg border border-border"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{session.child}</p>
                      <p className="text-sm text-muted-foreground">{session.type}</p>
                    </div>
                    <Badge>{session.time}</Badge>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">
                      View Notes
                    </Button>
                    <Button size="sm">Start Session</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Availability Manager */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Manage Availability</h3>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium mb-2">Weekly Time Slots</p>
                <div className="space-y-2">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-sm">{day}</span>
                      <Badge variant="outline">9:00 AM - 5:00 PM</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full">Update Availability</Button>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Recent Session Notes</h3>
            <div className="space-y-4">
              {[
                {
                  child: 'Emma',
                  date: 'Nov 5, 2024',
                  note: 'Great progress on articulation exercises. Continue with R-sound practice.',
                },
                {
                  child: 'Noah',
                  date: 'Nov 4, 2024',
                  note: 'Improved fine motor skills. Introduce more complex tasks next session.',
                },
                {
                  child: 'Olivia',
                  date: 'Nov 3, 2024',
                  note: 'Excellent engagement today. Parents report improvements at home.',
                },
              ].map((note, i) => (
                <div key={i} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">{note.child}</p>
                    <span className="text-sm text-muted-foreground">{note.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{note.note}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TherapistDashboard;
