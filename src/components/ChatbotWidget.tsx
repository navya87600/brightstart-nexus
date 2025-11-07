import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickActions = [
    'Book appointment',
    'Track milestones',
    'Browse courses',
    'Find therapists',
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4">
            <h3 className="text-white font-semibold">CDC Assistant</h3>
            <p className="text-white/80 text-sm">How can I help you today?</p>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto bg-muted/20">
            <div className="bg-card rounded-lg p-3 mb-3 border border-border">
              <p className="text-sm">
                👋 Hello! I'm your CDC Assistant. I can help you navigate the platform, book appointments, or
                answer questions.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
              {quickActions.map((action) => (
                <button
                  key={action}
                  className="w-full text-left text-sm p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
