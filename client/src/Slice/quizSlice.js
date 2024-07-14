// src/features/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionIndex: 0,
  checked: undefined,
  isSubmitted: false,
  showNextQuestion: false,
  error: false,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
    setShowNextQuestion: (state, action) => {
      state.showNextQuestion = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setQuestionIndex: (state, action) => {
      state.questionIndex = action.payload;
    },
  },
});

export const {
  setChecked,
  setIsSubmitted,
  setShowNextQuestion,
  setError,
  setScore,
  setQuestionIndex,
} = quizSlice.actions;

export default quizSlice.reducer;
