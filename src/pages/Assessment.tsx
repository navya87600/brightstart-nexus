import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/store/store';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { setAnswer, submitAssessment } from '@/store/slices/assessmentSlice';
import { getAssessmentForAge } from '@/data/assessments';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Assessment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedChild } = useSelector((state: RootState) => state.children);
  const { currentAnswers } = useSelector((state: RootState) => state.assessment);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (!selectedChild) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-6 text-center">
          <p className="text-muted-foreground">No child selected</p>
          <Button onClick={() => navigate('/parent-dashboard')} className="mt-4">
            Go to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const questions = getAssessmentForAge(selectedChild.age);
  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (score: 'green' | 'yellow' | 'red') => {
    dispatch(setAnswer({ questionId: question.id, score }));

    if (currentQuestion < totalQuestions - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    }
  };

  const handleSubmit = () => {
    dispatch(submitAssessment({ childId: selectedChild.id }));
    navigate('/assessment-result');
  };

  const canSubmit = Object.keys(currentAnswers).length === totalQuestions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-background to-secondary-light">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/parent-dashboard')}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>

        <Card className="p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">
                {selectedChild.name}'s Assessment
              </h2>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} / {totalQuestions}
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium mb-4">{question.question}</p>
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = currentAnswers[question.id] === option.score;
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.text}</span>
                        {isSelected && (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="flex-1"
              >
                Previous
              </Button>
              <Button
                onClick={
                  currentQuestion < totalQuestions - 1
                    ? () => setCurrentQuestion(currentQuestion + 1)
                    : handleSubmit
                }
                disabled={!currentAnswers[question.id] || (currentQuestion === totalQuestions - 1 && !canSubmit)}
                className="flex-1"
              >
                {currentQuestion < totalQuestions - 1 ? 'Next' : 'Submit Assessment'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;
