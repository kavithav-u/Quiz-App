import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setChecked,
  setIsSubmitted,
  setShowNextQuestion,
  setError,
  setScore,
  setQuestionIndex,
} from "../Slice/quizSlice";
import data from "../database/data";
import Result from "./Result";

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questionIndex, checked, isSubmitted, showNextQuestion, score } =
    useSelector((state) => state.quiz);

  const [timeLeft, setTimeLeft] = useState(5);

  const question = data[questionIndex];
  const numberOfQuestions = data.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setTimeout(() => {
            handleSubmit(true);
          });
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questionIndex]);

  const handleSelectedAnswer = (option) => {
    dispatch(setChecked(option));
  };

  const handleSubmit = (autoSubmit = false) => {
    clearInterval();
    dispatch(setIsSubmitted(true));
    if (checked === undefined && !autoSubmit) {
      dispatch(setError(true));
      return;
    } else {
      dispatch(setError(false));
      if (checked === question.correctAnswer) {
        dispatch(setScore(score + 1));
      }
      dispatch(setShowNextQuestion(true));
      setTimeout(() => {
        handleNextQuestion();
      }, 5000);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex + 1 === numberOfQuestions) {
      navigate("/result", { state: { score, numberOfQuestions } });
    } else {
      dispatch(setIsSubmitted(false));
      dispatch(setShowNextQuestion(false));
      dispatch(setChecked(undefined));
      dispatch(setQuestionIndex(questionIndex + 1));
      setTimeLeft(5);
    }
  };

  return (
    <div className="questions ">
      {questionIndex === numberOfQuestions ? (
        <Result score={score} numberOfQuestions={numberOfQuestions} />
      ) : (
        <section className="mt-8 px-6 sm:px-16 xl:flex xl:w-full xl:px-0">
          <div className="mb-10 xl:mb-0 xl:flex xl:h-[452px] xl:w-1/2 xl:flex-col xl:justify-center items-center">
            <div className="xl:w-[465px] ">
              <p className="text-sm italic text-greyNavy  sm:text-[20px] text-white">
                Question {questionIndex + 1} of {numberOfQuestions}
              </p>
              <h2 className="text-[20px] font-medium sm:text-[36px] text-white">
                {question?.question}
              </h2>
            </div>
          </div>
          <div className="xl:w-1/2 xl:flex xl:flex-col xl:items-center xl:justify-center">
            <div className="timer text-[15px] sm:text-[16px] font-medium text-red-700 absolute top-0 right-10 mt-2">
              Time left: {timeLeft}s
            </div>
            <ul className="mt-12 space-y-3 pb-3 sm:space-y-6 sm:pb-6 xl:mt-6 xl:w-[564px]">
              {question?.options.map((option, index) => {
                const letter = String.fromCharCode(65 + index);
                const isSelected = checked === option;
                const isCorrect = question?.correctAnswer === option;
                const bgColor = isSubmitted
                  ? isCorrect
                    ? "text-black bg-green-500"
                    : isSelected
                    ? "bg-red-500 text-black"
                    : "bg-lightGrey text-darkNavy"
                  : isSelected
                  ? "bg-purple-500 text-black"
                  : "bg-lightGrey text-darkNavy";
                const borderColor = isSubmitted
                  ? isCorrect
                    ? "border-green-500"
                    : isSelected
                    ? "border-red-500"
                    : "border-white dark:border-navy"
                  : isSelected
                  ? "border-purple-500"
                  : "border-white dark:border-navy";
                return (
                  <li
                    key={index}
                    className={
                      isSubmitted
                        ? `min-h-14 sm:min-h-20 pointer-events-none flex h-auto w-full items-center justify-between gap-4 rounded-xl border-[3px] bg-gray-700 p-3 font-medium drop-shadow-sm  sm:rounded-3xl xl:min-h-[92px] xl:w-[564px] ${borderColor}`
                        : `min-h-14 sm:min-h-20 group flex h-auto w-full cursor-pointer items-center gap-4 rounded-xl border-[3px] bg-gray-700 p-3 font-medium drop-shadow-sm  sm:rounded-3xl xl:min-h-[92px] xl:w-[564px] ${borderColor}`
                    }
                    onClick={() => handleSelectedAnswer(option)}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-md text-[18px] uppercase text-greyNavy sm:h-14 sm:w-14 sm:rounded-xl sm:text-[28px] ${bgColor}`}
                    >
                      {letter}
                    </span>
                    <p className="w-[200px] text-base sm:w-[456px] sm:text-[28px] sm:leading-tight">
                      {option}
                    </p>
                    <span className="ml-auto h-8 w-8 sm:h-10 sm:w-10"></span>
                  </li>
                );
              })}
            </ul>
            {!showNextQuestion && !isSubmitted && (
              <button
                className="bg-cyan-900 h-14 w-96 rounded-xl bg-purple py-2 text-xs font-semibold text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px] xl:w-[564px]"
                onClick={() => handleSubmit(false)}
              >
                Submit Answer
              </button>
            )}
            {showNextQuestion && (
              <button
                className="bg-sky-950 h-14 w-96 rounded-xl bg-purple py-2 text-xs font-semibold text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px]"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Questions;
