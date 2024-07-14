import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleGetStarted = () => {
    if (username.trim() === "") {
      toast.error("Please enter a username!");
    } else {
      navigate("/quiz");
    }
  };

  return (
    <main className="flex h-screen w-full items-center justify-center px-6 text-xl sm:px-16">
      <div className="flex flex-col xl:flex-row xl:w-full xl:items-center xl:justify-between xl:px-0">
        <section className="flex flex-col gap-4 xl:w-1/2">
          <h2 className="flex flex-col text-[40px] leading-tight sm:text-[64px] text-white">
            <span className="font-extralight">Welcome to the</span>
            <span className="font-medium">Quiz App!</span>
          </h2>
        </section>
        <section className="mt-10 flex flex-col gap-3 sm:gap-6 xl:mt-0 xl:w-1/2 xl:items-center">
          <form className="max-w-sm mx-auto">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                ref={inputRef}
                className="rounded-none rounded-e-lg border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-lg p-3.5"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </form>
          <div className="start flex items-center justify-center mt-4 rounded-xl bg-white p-3 drop-shadow-sm sm:h-10 sm:rounded-3xl xl:w-[200px] xl:p-3">
            <button
              className="btn text-lg font-medium sm:text-[18px] text-black"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
