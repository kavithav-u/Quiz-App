import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score, numberOfQuestions } = location.state || { score: 0, numberOfQuestions: 0 };

  return (
    <section className="mt-8 px-6 sm:px-16 xl:mt-12 xl:flex xl:px-0">
      <div className="xl:w-1/2 flex items-center justify-center">
        <h2 className="text-[40px] font-extralight leading-none sm:text-[64px] text-center">
          Quiz completed !!
        </h2>
      </div>
      <div className="xl:w-1/2 xl:space-y-8">
        <section className="mb-3 mt-10 flex flex-col items-center rounded-xl bg-white p-8 drop-shadow-sm sm:p-12 xl:mb-0 xl:mt-0 xl:w-[564px]">
          <div className="flex h-[72px] items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-[40px] font-medium leading-snug sm:text-[64px]">
                You scored...
              </h3>
              <div className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-[88px] font-medium sm:text-[144px]">{score}</h4>
            <h5 className="text-lg font-light sm:text-2xl">
              out of {numberOfQuestions}
            </h5>
          </div>
        </section>
        <button
          className="bg-zinc-900 h-14 w-full rounded-xl bg-purple py-2 text-[18px] font-medium text-white transition-all duration-200 ease-in-out sm:h-[92px] sm:rounded-3xl sm:text-[28px] xl:w-[564px]"
          onClick={() => (window.location.href = "/")}
        >
          Play Again
        </button>
      </div>
    </section>
  );
}

export default Result;
