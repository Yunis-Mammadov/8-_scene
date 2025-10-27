'use client'
import { directors } from "@/app/lib/cinebingo";
import { dailyDate, films } from "@/app/lib/films";
import { useEffect, useRef, useState } from "react";

export default function CineBingo() {
  const initialTime = 5;
  const STORAGE_KEY = 'cinebingo_state';
  const STORAGE_DATE_KEY = 'cinebingo_date';

  const [currentDirector, setCurrentDirector] = useState<typeof directors[0] | null>(null);
  const [cards, setCards] = useState(
    films.slice(0, 12).map(f => ({ ...f, isMatched: false, poster: f.poster }))
  );
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [gameResult, setGameResult] = useState<null | 'won' | 'lost'>(null);

  const cardsRef = useRef(cards);
  const currentDirectorRef = useRef(currentDirector);
  cardsRef.current = cards;
  currentDirectorRef.current = currentDirector;

  // --- Restore state ---
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedDate = localStorage.getItem(STORAGE_DATE_KEY);
    const raw = localStorage.getItem(STORAGE_KEY);

    if (savedDate !== dailyDate) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_DATE_KEY);
      const dir = directors[Math.floor(Math.random() * directors.length)];
      setCurrentDirector(dir);
      return;
    }

    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.cards) setCards(parsed.cards);
      if (parsed?.gameResult) {
        setGameResult(parsed.gameResult);
        setTimeLeft(parsed.timeLeft ?? 0);
        setCurrentDirector(null);
        return;
      }
    }

    const dir = directors[Math.floor(Math.random() * directors.length)];
    setCurrentDirector(dir);
  }, []);

  // --- Timer ---
  useEffect(() => {
    if (gameResult) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          const allMatched = cardsRef.current.every(c => c.isMatched);
          const result = allMatched ? 'won' : 'lost';
          setGameResult(result);
          setCurrentDirector(null);

          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            cards: cardsRef.current,
            gameResult: result,
            timeLeft: 0
          }));
          localStorage.setItem(STORAGE_DATE_KEY, dailyDate);

          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameResult]);

  // --- Save state on card update ---
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        cards,
        gameResult,
        timeLeft
      }));
      localStorage.setItem(STORAGE_DATE_KEY, dailyDate);
    } catch (e) { }
  }, [cards, gameResult, timeLeft]);

  const handleSkip = () => {
    if (gameResult || !currentDirector) return;
    let newDirector;
    do {
      newDirector = directors[Math.floor(Math.random() * directors.length)];
    } while (newDirector.name === currentDirector.name && directors.length > 1);
    setCurrentDirector(newDirector);
  };

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    if (gameResult) { event.preventDefault(); return; }
    event.dataTransfer.setData("directorName", currentDirectorRef.current?.name || "");
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, idx: number) => {
    event.preventDefault();
    if (gameResult) return;
    const director = currentDirectorRef.current;
    if (!director) return;

    const card = cardsRef.current[idx];
    const isValid = director.films.some(f => f.title === card.title);
    if (!isValid) return;

    setCards(prev => {
      const newCards = [...prev];
      newCards[idx] = {
        ...newCards[idx],
        poster: director.photo,
        isMatched: true
      };

      const allMatched = newCards.every(c => c.isMatched);
      if (allMatched) {
        setGameResult('won');
        setCurrentDirector(null);
        setTimeLeft(0);
      } else handleSkip();

      return newCards;
    });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    if (gameResult) return;
    event.preventDefault();
  };

  return (
    <div className="max-w-5xl mx-auto pt-13">
      <div className="max-w-3xl mx-auto relative flex items-center justify-center p-2">
        {gameResult ? (
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            {gameResult === 'won' ? (
              <h2 className="selection:bg-[#9c2e87] text-x md:text-xl font-bold text-green-300">
                You’re a wizard Harry<br /> Come back tomorrow!
              </h2>
            ) : (
              <h2 className="selection:bg-yellow-500 text-xl font-bold text-[#9c2e87]">
                Hasta la vista, baby<br /> Come back tomorrow!
              </h2>
            )}
          </div>
        ) : currentDirector && (
          <>
            <img
              draggable
              onDragStart={handleDragStart}
              className="max-w-60 max-h-30 text-2xl font-semibold absolute left-1/2 -translate-x-1/2"
              src={currentDirector.photo}
              alt={currentDirector.name}
            />
            <span className="text-[#9c2e87] block w-40 text-center absolute top-22 shadow-[0_0_20px_#9c2e87]">
              {currentDirector.name}
            </span>
          </>
        )}

        {!gameResult && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-red-700 font-semibold">
            <span className="text-xl">{timeLeft}s</span>
          </div>
        )}

        {!gameResult && (
          <button
            onClick={handleSkip}
            className="ml-60 md:ml-80 bg-[#9c2e87] text-white px-4 py-2 rounded cursor-pointer"
            disabled={!!gameResult}
          >
            Skip
          </button>
        )}
      </div>

      {/* Card grid */}
      <div className="max-w-3xl mx-auto rounded-lg mt-18 p-3">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-5 justify-items-center shadow-[0_0_20px_#18173d]">
          {cards.map((film, idx) => (
            <div
              key={idx}
              onDrop={(e) => handleDrop(e, idx)}
              onDragOver={handleDragOver}
              className={`w-full max-w-[250px] max-h-100 aspect-[2/3] rounded overflow-hidden shadow-lg relative
                ${film.isMatched ? "bg-[#18173d]" : "bg-gray-800"}`}
              style={{
                boxShadow: film.isMatched ? "0 0 20px 3px rgba(34, 197, 94, 0.6)" : "none",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={film.poster}
                  alt="Movie Title"
                  className={`transition-all duration-200 rounded ${film.isMatched ? 'w-3/4 h-2/3 object-cover' : 'w-full h-full object-cover'}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          {gameResult && (
            <a
              href="/"
              className="bg-[#9c2e87] text-white px-3 py-2 rounded cursor-pointer text-center"
            >
              Go to Main Menu
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
