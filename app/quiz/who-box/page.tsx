"use client";

import { dailyWhoboxGames } from "@/app/lib/whobox";
import React, { useState } from "react";

export default function WhoBoxGameClient({
  dayIndex = 0,
  placeholderAvatar = "https://i.pinimg.com/1200x/d6/df/78/d6df7830ee5838503c148bc6bbb5255f.jpg",
}) {
  const game = dailyWhoboxGames?.[dayIndex];

  if (!game) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center p-6">
        <div className="text-center text-gray-300">Game data not found.</div>
      </div>
    );
  }

  const [input, setInput] = useState("");
  const [revealedCount, setRevealedCount] = useState(1); // ilkin birinci kart açıq
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [finished, setFinished] = useState(false);

  const normalized = (s) => s?.trim().toLowerCase();

  const checkAnswer = () => {
    if (finished) return;
    const user = normalized(input);
    if (!user) return;

    setAttempts((a) => a + 1);

    if (user === normalized(game.correctAnswer)) {
      setIsCorrect(true);
      setFinished(true);
    } else {
      if (revealedCount < game.cards.length) {
        setRevealedCount((r) => r + 1);
        setInput("");
      } else {
        setFinished(true); // oyun bitdi, cavab səhv olsa belə
      }
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") checkAnswer();
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className={`w-28 h-28 rounded-lg flip-card ${finished ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              {/* Front - placeholder */}
              <div className="flip-card-front bg-[#0b1b22] flex items-center justify-center">
                <img
                  src={placeholderAvatar}
                  alt="avatar placeholder"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Back - correct image */}
              <div
                className={`flip-card-back rounded-lg overflow-hidden ${isCorrect ? "shadow-[0_0_20px_#18173d]" : ""}`}
              >
                <img
                  src={game.correctImage}
                  alt="correct avatar"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-2xl text-white/90 font-medium mb-6">
          I played for these {game.cards.length} films. Who am I?
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center mb-12">
          {game.cards.map((imgSrc, i) => {
            const isFlipped = i === 0 || i < revealedCount; // kartlar normal açılacaq
            return (
              <div
                key={i}
                className={`w-32 h-32 md:w-36 md:h-36 flip-card ${isFlipped ? "flipped" : ""}`}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">{i + 1}</div>

                  {/* Back */}
                  <div className="flip-card-back">
                    <img src={imgSrc} alt={`card-${i + 1}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!finished ? (
          <div className="flex items-center justify-center gap-4 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type the actor here"
              disabled={finished}
              className="w-72 md:w-96 py-3 px-4 rounded-full bg-[#2b3a40] placeholder:text-gray-300 text-white outline-none ring-1 ring-transparent focus:ring-cyan-500 transition disabled:opacity-60"
            />
            <button
              onClick={() => {
                if (!finished) {
                  if (revealedCount < game.cards.length) {
                    setRevealedCount((r) => r + 1);
                  } else {
                    setFinished(true);
                  }
                }
              }}
              className="py-2 px-4 rounded-lg bg-yellow-400 text-[#0b1720] font-semibold shadow disabled:opacity-60"
            >
              Skip
            </button>
          </div>
        ) : (
          <div className="text-center flex flex-col w-100 mx-auto">
            {isCorrect ? (
              <div className="inline-block bg-green-600/20 text-green-200 px-4 py-2 rounded-md mb-2">
                🎉 Correct — I am <span className="font-semibold">{game.correctAnswer}</span>!
              </div>
            ) : (
              <div className="inline-block bg-red-600/20 text-red-200 px-4 py-2 rounded-md mb-2">
                ❌ No more attempts. The correct answer was <span className="font-semibold">{game.correctAnswer}</span>.
              </div>
            )}
            <a
              href="/"
              className="px-4 py-2 border mt-4 mx-auto rounded-md bg-yellow-400 font-semibold text-black cursor-pointer"
            >
              Go to Main Menu
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
