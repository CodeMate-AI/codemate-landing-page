"use client"

import React, { useState } from "react";
import "../../../styles/indus.css"

function TimeWorthPage() {
  const [progress, setProgress] = useState(0);
  const [price, setPrice] = useState(0);

  const handleChange = (e: any) => {
    let value = e.target.value;

    setProgress(value);
    setPrice(value * 10);
  };

  return (
    <div className="mt-20 mb-8">
      <h1 className="text-5xl font-bold text-center dark:text-white">How much is your time worth to you?</h1>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row  items-center justify-center dark:bg-gray-900 shadow-lg rounded-lg p-4 m-4">
          <div className="md:w-1/2 md:mr-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">How much is 1 hour of your time worth to you?</h1>
            <div className="mt-2">
              <label htmlFor="progress" className="text-xl text-gray-600 dark:text-white">
                ${progress}
              </label>
              <input
                id="progress"
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleChange}
                className="w-full h-2  appearance-none rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Return on investment
              per month with Codemate AI</h1>
            <div className="mt-2">
              <p className="text-3xl font-bold text-green-600">${price}</p>
              <button id="getStarted" className="mt-7">
                <svg id="get-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                <span className="get-span">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TimeWorthPage;
