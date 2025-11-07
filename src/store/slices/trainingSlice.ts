import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  progress: number;
  thumbnail: string;
  instructor: string;
}

interface TrainingState {
  courses: Course[];
  selectedCategory: string;
}

const mockCourses: Course[] = [
  {
    id: 'c1',
    title: 'Early Childhood Development Basics',
    description: 'Learn the fundamentals of early childhood development and milestones.',
    category: 'Child Development',
    duration: '4 hours',
    progress: 65,
    thumbnail: '📚',
    instructor: 'Dr. Emily Parker',
  },
  {
    id: 'c2',
    title: 'Speech Therapy Techniques',
    description: 'Master essential speech therapy techniques for children.',
    category: 'Therapy',
    duration: '6 hours',
    progress: 30,
    thumbnail: '🗣️',
    instructor: 'Dr. Sarah Johnson',
  },
  {
    id: 'c3',
    title: 'Autism Spectrum Awareness',
    description: 'Understanding autism spectrum disorders and support strategies.',
    category: 'Special Needs',
    duration: '5 hours',
    progress: 0,
    thumbnail: '🧩',
    instructor: 'Dr. Michael Chen',
  },
  {
    id: 'c4',
    title: 'Parent Communication Skills',
    description: 'Effective communication strategies for therapist-parent interactions.',
    category: 'Professional',
    duration: '3 hours',
    progress: 100,
    thumbnail: '💬',
    instructor: 'Lisa Anderson',
  },
];

const initialState: TrainingState = {
  courses: mockCourses,
  selectedCategory: 'all',
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    updateCourseProgress: (state, action: PayloadAction<{ courseId: string; progress: number }>) => {
      const course = state.courses.find(c => c.id === action.payload.courseId);
      if (course) {
        course.progress = action.payload.progress;
      }
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { updateCourseProgress, setSelectedCategory } = trainingSlice.actions;
export default trainingSlice.reducer;
