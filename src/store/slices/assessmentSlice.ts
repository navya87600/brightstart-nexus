import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AssessmentQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    score: 'green' | 'yellow' | 'red';
  }[];
}

export interface AssessmentResult {
  childId: string;
  answers: Record<string, 'green' | 'yellow' | 'red'>;
  greenCount: number;
  yellowCount: number;
  redCount: number;
  redPercentage: number;
  completedAt: string;
}

interface AssessmentState {
  currentAnswers: Record<string, 'green' | 'yellow' | 'red'>;
  results: AssessmentResult[];
  showResult: boolean;
}

const initialState: AssessmentState = {
  currentAnswers: {},
  results: [],
  showResult: false,
};

const assessmentSlice = createSlice({
  name: 'assessment',
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: string; score: 'green' | 'yellow' | 'red' }>
    ) => {
      state.currentAnswers[action.payload.questionId] = action.payload.score;
    },
    submitAssessment: (state, action: PayloadAction<{ childId: string }>) => {
      const answers = state.currentAnswers;
      const totalQuestions = Object.keys(answers).length;
      const greenCount = Object.values(answers).filter((s) => s === 'green').length;
      const yellowCount = Object.values(answers).filter((s) => s === 'yellow').length;
      const redCount = Object.values(answers).filter((s) => s === 'red').length;
      const redPercentage = (redCount / totalQuestions) * 100;

      state.results.push({
        childId: action.payload.childId,
        answers,
        greenCount,
        yellowCount,
        redCount,
        redPercentage,
        completedAt: new Date().toISOString(),
      });
      state.showResult = true;
    },
    resetAssessment: (state) => {
      state.currentAnswers = {};
      state.showResult = false;
    },
  },
});

export const { setAnswer, submitAssessment, resetAssessment } = assessmentSlice.actions;
export default assessmentSlice.reducer;
