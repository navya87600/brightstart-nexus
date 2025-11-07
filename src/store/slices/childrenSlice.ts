import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Child {
  id: string;
  name: string;
  age: number;
  avatar: string;
  therapies: string[];
  milestones: {
    category: string;
    completed: number;
    total: number;
  }[];
}

interface ChildrenState {
  children: Child[];
  selectedChild: Child | null;
}

const mockChildren: Child[] = [
  {
    id: 'child1',
    name: 'Emma',
    age: 4,
    avatar: '👧',
    therapies: ['Speech Therapy', 'Occupational Therapy'],
    milestones: [
      { category: 'Communication', completed: 8, total: 10 },
      { category: 'Motor Skills', completed: 6, total: 10 },
      { category: 'Social Skills', completed: 7, total: 10 },
    ],
  },
];

const initialState: ChildrenState = {
  children: mockChildren,
  selectedChild: mockChildren[0],
};

const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    selectChild: (state, action: PayloadAction<string>) => {
      state.selectedChild = state.children.find(c => c.id === action.payload) || null;
    },
    addChild: (state, action: PayloadAction<Child>) => {
      state.children.push(action.payload);
    },
  },
});

export const { selectChild, addChild } = childrenSlice.actions;
export default childrenSlice.reducer;
