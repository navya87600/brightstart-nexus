import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import { useState } from 'react';
import ConsultationBooking from '@/components/ConsultationBooking';

const AssessmentResult = () => {
  const navigate = useNavigate();
  const { selectedChild } = useSelector((state: RootState) => state.children);
  const { results } = useSelector((state: RootState) => state.assessment);
  const [showBooking, setShowBooking] = useState(false);

  const latestResult = results[results.length - 1];

  if (!latestResult || !selectedChild) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">No assessment results found</p>
          <Button onClick={() => navigate('/parent-dashboard')} className="mt-4">
            Go to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const { greenCount, yellowCount, redCount, redPercentage } = latestResult;
  const needsConsultation = redPercentage >= 25;

  const getResultStatus = () => {
    if (redPercentage >= 25) return { label: 'Needs Attention', color: 'red', icon: AlertCircle };
    if (yellowCount > greenCount) return { label: 'Needs Observation', color: 'yellow', icon: AlertTriangle };
    return { label: 'Healthy Progress', color: 'green', icon: CheckCircle };
  };

  const status = getResultStatus();
  const StatusIcon = status.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-secondary-light">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="p-8">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                status.color === 'green'
                  ? 'bg-green-100 text-green-600'
                  : status.color === 'yellow'
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              <StatusIcon className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Assessment Complete</h1>
            <p className="text-muted-foreground">
              Results for {selectedChild.name}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="p-4 bg-green-50 border-green-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">{greenCount}</p>
                <p className="text-sm text-green-700">On Track</p>
              </div>
            </Card>
            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-600">{yellowCount}</p>
                <p className="text-sm text-yellow-700">Observe</p>
              </div>
            </Card>
            <Card className="p-4 bg-red-50 border-red-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">{redCount}</p>
                <p className="text-sm text-red-700">Concern</p>
              </div>
            </Card>
          </div>

          <Card className={`p-6 mb-6 ${
            status.color === 'green'
              ? 'bg-green-50 border-green-200'
              : status.color === 'yellow'
              ? 'bg-yellow-50 border-yellow-200'
              : 'bg-red-50 border-red-200'
          }`}>
            <h3 className="font-semibold text-lg mb-2">Assessment Status: {status.label}</h3>
            <p className="text-sm">
              {status.color === 'green' &&
                "Great news! Your child is showing healthy developmental progress. Continue the good work!"}
              {status.color === 'yellow' &&
                "Some areas need observation. Consider monitoring these milestones closely."}
              {status.color === 'red' &&
                "We recommend consulting with a verified child development specialist for a detailed evaluation."}
            </p>
          </Card>

          {needsConsultation && (
            <Card className="p-6 mb-6 border-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Professional Consultation Recommended
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Based on the assessment results, we recommend booking a consultation
                    with a verified child development therapist for personalized guidance.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">₹499</p>
                      <p className="text-xs text-muted-foreground">Consultation Fee</p>
                    </div>
                    <Button onClick={() => setShowBooking(true)} size="lg">
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => navigate('/parent-dashboard')}
              className="flex-1"
            >
              Back to Dashboard
            </Button>
            <Button
              onClick={() => navigate('/assessment')}
              className="flex-1"
            >
              Retake Assessment
            </Button>
          </div>
        </Card>
      </div>

      <ConsultationBooking
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
      />
    </div>
  );
};

export default AssessmentResult;
