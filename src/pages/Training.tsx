import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Award } from 'lucide-react';

const Training = () => {
  const { courses } = useSelector((state: RootState) => state.training);

  const categories = ['All', 'Child Development', 'Therapy', 'Special Needs', 'Professional'];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Training Hub</h1>
          <p className="text-muted-foreground">Expand your knowledge and earn certifications</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{courses.length}</p>
                <p className="text-sm text-muted-foreground">Available Courses</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">18h</p>
                <p className="text-sm text-muted-foreground">Learning Time</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Certificates Earned</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-5xl mb-4">{course.thumbnail}</div>
                <Badge className="mb-3">{course.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>⏱️ {course.duration}</span>
                    <span>👤 {course.instructor}</span>
                  </div>

                  <Button className="w-full mt-4">
                    {course.progress === 0
                      ? 'Start Course'
                      : course.progress === 100
                      ? 'Review'
                      : 'Continue'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
