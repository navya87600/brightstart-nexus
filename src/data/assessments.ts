import { AssessmentQuestion } from '@/store/slices/assessmentSlice';

export const assessmentsByAge: Record<string, AssessmentQuestion[]> = {
  '0-2': [
    {
      id: 'q1',
      question: 'Does your child respond to their name when called?',
      options: [
        { text: 'Always responds', score: 'green' },
        { text: 'Sometimes responds', score: 'yellow' },
        { text: 'Rarely or never responds', score: 'red' },
      ],
    },
    {
      id: 'q2',
      question: 'Can your child make eye contact with you?',
      options: [
        { text: 'Yes, frequently', score: 'green' },
        { text: 'Occasionally', score: 'yellow' },
        { text: 'Rarely or never', score: 'red' },
      ],
    },
    {
      id: 'q3',
      question: 'Does your child show interest in other children?',
      options: [
        { text: 'Yes, very interested', score: 'green' },
        { text: 'Shows some interest', score: 'yellow' },
        { text: 'No interest', score: 'red' },
      ],
    },
    {
      id: 'q4',
      question: 'Can your child point to objects when asked?',
      options: [
        { text: 'Yes, easily', score: 'green' },
        { text: 'With help', score: 'yellow' },
        { text: 'Not yet', score: 'red' },
      ],
    },
    {
      id: 'q5',
      question: 'Does your child babble or try to imitate sounds?',
      options: [
        { text: 'Yes, frequently', score: 'green' },
        { text: 'Sometimes', score: 'yellow' },
        { text: 'Rarely', score: 'red' },
      ],
    },
  ],
  '3-4': [
    {
      id: 'q1',
      question: 'Can your child speak in simple sentences (3-4 words)?',
      options: [
        { text: 'Yes, clearly', score: 'green' },
        { text: 'Uses 2-3 words', score: 'yellow' },
        { text: 'Very limited speech', score: 'red' },
      ],
    },
    {
      id: 'q2',
      question: 'Does your child play pretend games (e.g., feeding dolls)?',
      options: [
        { text: 'Yes, often', score: 'green' },
        { text: 'Sometimes', score: 'yellow' },
        { text: 'Never', score: 'red' },
      ],
    },
    {
      id: 'q3',
      question: 'Can your child follow two-step instructions?',
      options: [
        { text: 'Yes, easily', score: 'green' },
        { text: 'Needs repetition', score: 'yellow' },
        { text: 'Cannot follow', score: 'red' },
      ],
    },
    {
      id: 'q4',
      question: 'Does your child interact with peers during play?',
      options: [
        { text: 'Yes, enjoys playing with others', score: 'green' },
        { text: 'Plays near others but not with them', score: 'yellow' },
        { text: 'Prefers to play alone', score: 'red' },
      ],
    },
    {
      id: 'q5',
      question: 'Can your child recognize and name colors?',
      options: [
        { text: 'Yes, several colors', score: 'green' },
        { text: 'One or two colors', score: 'yellow' },
        { text: 'Cannot identify colors', score: 'red' },
      ],
    },
  ],
  '5-6': [
    {
      id: 'q1',
      question: 'Can your child have back-and-forth conversations?',
      options: [
        { text: 'Yes, clearly', score: 'green' },
        { text: 'With some difficulty', score: 'yellow' },
        { text: 'Very limited', score: 'red' },
      ],
    },
    {
      id: 'q2',
      question: 'Does your child understand and follow classroom rules?',
      options: [
        { text: 'Yes, most of the time', score: 'green' },
        { text: 'Needs reminders', score: 'yellow' },
        { text: 'Has difficulty following rules', score: 'red' },
      ],
    },
    {
      id: 'q3',
      question: 'Can your child write their name or recognize letters?',
      options: [
        { text: 'Yes, can write name', score: 'green' },
        { text: 'Recognizes some letters', score: 'yellow' },
        { text: 'Cannot yet', score: 'red' },
      ],
    },
    {
      id: 'q4',
      question: 'Does your child make friends easily?',
      options: [
        { text: 'Yes, has several friends', score: 'green' },
        { text: 'Has one or two friends', score: 'yellow' },
        { text: 'Struggles to make friends', score: 'red' },
      ],
    },
    {
      id: 'q5',
      question: 'Can your child express emotions appropriately?',
      options: [
        { text: 'Yes, can express feelings', score: 'green' },
        { text: 'Sometimes struggles', score: 'yellow' },
        { text: 'Has difficulty expressing emotions', score: 'red' },
      ],
    },
  ],
};

export const getAssessmentForAge = (age: number): AssessmentQuestion[] => {
  if (age <= 2) return assessmentsByAge['0-2'];
  if (age <= 4) return assessmentsByAge['3-4'];
  return assessmentsByAge['5-6'];
};
