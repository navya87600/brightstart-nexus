import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, TrendingUp, BookOpen, Calendar } from 'lucide-react';

const ParentDashboard = () => {
  const navigate = useNavigate();
  const { selectedChild } = useSelector((state: RootState) => state.children);
  const { results } = useSelector((state: RootState) => state.assessment);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground">
            Track {selectedChild?.name}'s developmental progress
          </p>
        </div>

        {/* Child Info Card */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-primary-light to-secondary-light border-0">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{selectedChild?.avatar}</div>
            <div>
              <h2 className="text-2xl font-bold">{selectedChild?.name}</h2>
              <p className="text-muted-foreground">Age: {selectedChild?.age} years</p>
            </div>
          </div>
        </Card>

        {/* Assessment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <ClipboardList className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  Developmental Assessment
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take a quick assessment to track {selectedChild?.name}'s developmental
                  milestones based on their age group.
                </p>
                <Button onClick={() => navigate('/assessment')} className="w-full">
                  Start Assessment
                </Button>
              </div>
            </div>
          </Card>

          {results.length > 0 && (
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Latest Results</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>On Track:</span>
                      <span className="font-medium text-green-600">
                        {results[results.length - 1].greenCount}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Needs Observation:</span>
                      <span className="font-medium text-yellow-600">
                        {results[results.length - 1].yellowCount}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Concerns:</span>
                      <span className="font-medium text-red-600">
                        {results[results.length - 1].redCount}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/assessment-result')}
                    className="w-full"
                  >
                    View Full Results
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{results.length}</p>
                <p className="text-xs text-muted-foreground">Assessments Completed</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {selectedChild?.therapies.length || 0}
                </p>
                <p className="text-xs text-muted-foreground">Active Therapies</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{selectedChild?.age} yrs</p>
                <p className="text-xs text-muted-foreground">Current Age</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
