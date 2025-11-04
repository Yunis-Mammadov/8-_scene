"use client";

import { top10 } from "@/app/lib/top10";
import React, { useEffect, useState } from "react";

export default function Top10Component() {
  const initialTime = 45;

  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [values, setValues] = useState<Record<number, string>>({});
  const [inputValue, setInputValue] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");

  // Mount zamanı localStorage-dan yükləmək
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedValues = localStorage.getItem("top10_values");
    const storedTime = localStorage.getItem("top10_timeLeft");
    const storedStatus = localStorage.getItem("top10_gameStatus");

    if (storedValues) setValues(JSON.parse(storedValues));
    if (storedTime) setTimeLeft(Number(storedTime));
    if (storedStatus) setGameStatus(storedStatus as "playing" | "won" | "lost");
  }, []);

  // localStorage-a yazmaq
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("top10_values", JSON.stringify(values));
    localStorage.setItem("top10_timeLeft", timeLeft.toString());
    localStorage.setItem("top10_gameStatus", gameStatus);
  }, [values, timeLeft, gameStatus]);

  // Timer işləsin
  useEffect(() => {
    if (gameStatus !== "playing") return;

    if (timeLeft <= 0) {
      const allAnswered = top10.every((item) => values[item.id]);
      if (!allAnswered) setGameStatus("lost");
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, values, gameStatus]);

  const handleSubmit = () => {
    if (inputValue.trim() === "" || gameStatus !== "playing") return;

    const matchedItem = top10.find(
      (item) => item.answer.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (matchedItem) {
      const updatedValues = { ...values, [matchedItem.id]: matchedItem.answer };
      setValues(updatedValues);

      const allAnswered = top10.every((item) => updatedValues[item.id]);
      if (allAnswered) {
        setGameStatus("won");
      }
    }

    setInputValue("");
  };

  // Oyunu sıfırlamaq funksiyası
  const handleRestart = () => {
    setValues({});
    setTimeLeft(initialTime);
    setGameStatus("playing");
    setInputValue("");

    // localStorage-dan təmizləmək
    localStorage.removeItem("top10_values");
    localStorage.removeItem("top10_timeLeft");
    localStorage.removeItem("top10_gameStatus");
  };

  return (
    <div className="max-w-sm mx-auto p-4 mt-2 text-center">
      {/* Başlıq */}
      <h2 className="text-xl font-semibold mb-6 text-amber-50">
        {top10[0]?.topic || "TOP 10"}
      </h2>

      {/* Cardlar */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {top10.map((item) => (
          <div
            key={item.id}
            className={`p-1.5 border rounded-md ${
              values[item.id]
                ? "bg-[#9c2e87] text-white"
                : "bg-slate-900 text-white"
            }`}
          >
            {item.id}. {values[item.id] || ""}
          </div>
        ))}
      </div>

      {/* Input və ya nəticə */}
      <div className="mt-6 flex gap-2 max-w-xs mx-auto justify-center">
        {gameStatus === "playing" ? (
          <>
            <input
              type="text"
              className="flex-1 border rounded-md px-3 py-1.5 focus:outline-none focus:ring text-white focus:ring-yellow-400 bg-slate-800 placeholder-gray-400"
              placeholder="Type the movie here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button
              className="px-4 py-2 border rounded-md bg-yellow-400 font-semibold text-black cursor-pointer"
              onClick={handleSubmit}
            >
              {timeLeft}s
            </button>
          </>
        ) : (
          <div className="w-full text-center flex justify-around items-center">
            <p
              className={`text-lg font-semibold ${
                gameStatus === "won" ? "text-green-400" : "text-red-400"
              }`}
            >
              {gameStatus === "won" ? "You Win!" : "You Lost!"}
            </p>
            <a
              href="/"
              className="px-4 py-2 border rounded-md bg-yellow-400 font-semibold text-black cursor-pointer"
            >
              Go to Main Menu
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
