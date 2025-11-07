import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Heart, Eye, TrendingUp } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: 'Tips for managing sensory sensitivities?',
      author: 'Sarah M.',
      category: 'Sensory Processing',
      replies: 12,
      views: 234,
      likes: 18,
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      title: 'Speech therapy progress - when to expect results?',
      author: 'John D.',
      category: 'Speech Therapy',
      replies: 8,
      views: 156,
      likes: 15,
      timestamp: '5 hours ago',
    },
    {
      id: 3,
      title: 'Recommended activities for fine motor skills',
      author: 'Emily R.',
      category: 'Motor Skills',
      replies: 24,
      views: 478,
      likes: 32,
      timestamp: '1 day ago',
    },
  ];

  const resources = [
    {
      title: 'Understanding Early Intervention',
      type: 'Article',
      readTime: '5 min read',
      author: 'Dr. Lisa Chen',
    },
    {
      title: 'Home Therapy Activities Guide',
      type: 'PDF Guide',
      readTime: '12 pages',
      author: 'CDC Connect Team',
    },
    {
      title: 'Parent Support Webinar Series',
      type: 'Video',
      readTime: '45 min',
      author: 'Sarah Johnson',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Community Hub</h1>
          <p className="text-muted-foreground">Connect, share, and learn together</p>
        </div>

        <Tabs defaultValue="discussions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="experts">Expert Q&A</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  All Topics
                </Button>
                <Button variant="outline" size="sm">
                  Trending
                </Button>
                <Button variant="outline" size="sm">
                  Unanswered
                </Button>
              </div>
              <Button>Start Discussion</Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{discussion.category}</Badge>
                        <span className="text-sm text-muted-foreground">{discussion.timestamp}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">by {discussion.author}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {discussion.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {discussion.likes} likes
                        </span>
                      </div>
                    </div>
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <Badge className="mb-3">{resource.type}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {resource.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{resource.readTime}</span>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experts">
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Q&A Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Connect with certified therapists and specialists for personalized advice
              </p>
              <Button>Get Notified</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;
