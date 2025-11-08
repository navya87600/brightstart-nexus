import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ConsultationBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationBooking = ({ isOpen, onClose }: ConsultationBookingProps) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { toast } = useToast();

  const doctor = {
    name: 'Dr. Priya Sharma',
    specialization: 'Child Development Specialist',
    experience: '12+ years',
    rating: 4.9,
    reviews: 247,
    testimonials: [
      'Very patient and understanding. Helped us immensely!',
      'Excellent guidance for my child\'s speech development.',
    ],
  };

  const availableSlots = [
    { id: '1', date: '2025-11-10', time: '10:00 AM', available: true },
    { id: '2', date: '2025-11-10', time: '2:00 PM', available: true },
    { id: '3', date: '2025-11-11', time: '11:00 AM', available: true },
    { id: '4', date: '2025-11-11', time: '3:00 PM', available: false },
    { id: '5', date: '2025-11-12', time: '9:00 AM', available: true },
    { id: '6', date: '2025-11-12', time: '4:00 PM', available: true },
  ];

  const handlePayment = () => {
    // Mock payment success
    setTimeout(() => {
      setShowPayment(false);
      setShowConfirmation(true);
      toast({
        title: 'Booking Confirmed!',
        description: 'You will receive a confirmation email shortly.',
      });
    }, 1500);
  };

  if (showConfirmation) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-6">
              Your consultation has been successfully booked
            </p>
            <Card className="p-4 text-left bg-muted/30">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doctor:</span>
                  <span className="font-medium">{doctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="font-medium">
                    {availableSlots.find((s) => s.id === selectedSlot)?.date} at{' '}
                    {availableSlots.find((s) => s.id === selectedSlot)?.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Paid:</span>
                  <span className="font-medium">₹499</span>
                </div>
              </div>
            </Card>
            <Button onClick={onClose} className="w-full mt-6">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (showPayment) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Payment</DialogTitle>
          </DialogHeader>
          <Card className="p-6 bg-muted/30">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="font-medium">₹499</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Platform Fee</span>
                <span className="font-medium">₹0</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="font-semibold">Total Amount</span>
                <span className="text-xl font-bold text-primary">₹499</span>
              </div>
            </div>
          </Card>
          <div className="space-y-3">
            <Button onClick={handlePayment} className="w-full" size="lg">
              Pay ₹499
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowPayment(false)}
              className="w-full"
            >
              Back
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Consultation</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Doctor Profile */}
          <Card className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  PS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{doctor.name}</h3>
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {doctor.specialization}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">{doctor.experience}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Testimonials */}
          <div>
            <h4 className="font-semibold mb-3">Patient Testimonials</h4>
            <div className="space-y-2">
              {doctor.testimonials.map((testimonial, index) => (
                <Card key={index} className="p-3 bg-muted/30">
                  <p className="text-sm text-muted-foreground">"{testimonial}"</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Available Slots */}
          <div>
            <h4 className="font-semibold mb-3">Select a Time Slot</h4>
            <div className="grid grid-cols-2 gap-3">
              {availableSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => slot.available && setSelectedSlot(slot.id)}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    selectedSlot === slot.id
                      ? 'border-primary bg-primary/10'
                      : slot.available
                      ? 'border-border hover:border-primary/50'
                      : 'border-border opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(slot.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{slot.time}</span>
                  </div>
                  {!slot.available && (
                    <span className="text-xs text-red-500 mt-1 block">
                      Not available
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={() => setShowPayment(true)}
              disabled={!selectedSlot}
              className="flex-1"
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationBooking;
