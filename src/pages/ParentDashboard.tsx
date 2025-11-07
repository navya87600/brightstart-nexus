import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, TrendingUp, BookOpen, Clock } from 'lucide-react';

const ParentDashboard = () => {
  const { selectedChild } = useSelector((state: RootState) => state.children);
  const { appointments } = useSelector((state: RootState) => state.appointments);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground">Here's how {selectedChild?.name} is doing</p>
        </div>

        {/* Child Info Card */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-primary-light to-secondary-light border-0">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{selectedChild?.avatar}</div>
            <div>
              <h2 className="text-2xl font-bold">{selectedChild?.name}</h2>
              <p className="text-muted-foreground">Age: {selectedChild?.age} years</p>
              <div className="flex gap-2 mt-2">
                {selectedChild?.therapies.map((therapy) => (
                  <span key={therapy} className="px-3 py-1 bg-card rounded-full text-xs">
                    {therapy}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{appointments.length}</p>
                <p className="text-xs text-muted-foreground">Upcoming Sessions</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">7/10</p>
                <p className="text-xs text-muted-foreground">Milestones Reached</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Active Programs</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-highlight/20 rounded-lg">
                <Clock className="h-5 w-5 text-highlight-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">12h</p>
                <p className="text-xs text-muted-foreground">This Month</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Milestones */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Developmental Milestones</h3>
            <div className="space-y-4">
              {selectedChild?.milestones.map((milestone) => (
                <div key={milestone.category}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{milestone.category}</span>
                    <span className="text-sm text-muted-foreground">
                      {milestone.completed}/{milestone.total}
                    </span>
                  </div>
                  <Progress value={(milestone.completed / milestone.total) * 100} />
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Appointments */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
              <Button size="sm">Book New</Button>
            </div>
            <div className="space-y-3">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-4 bg-muted/30 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{apt.type}</p>
                      <p className="text-sm text-muted-foreground">{apt.therapistName}</p>
                    </div>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {apt.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>📅 {new Date(apt.date).toLocaleDateString()}</span>
                    <span>🕐 {apt.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
