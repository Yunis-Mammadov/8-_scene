"use client"

export default function Home() {
  return (
    <div style={{
      background: "#282669",
      minHeight: "100vh"
    }}>
      <div className="max-w-5xl mx-auto p-12">
        {/* grid: mobile 1, small 2, md 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-stretch">

          <a href="/quiz/who-box/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img
              className="w-full object-cover"
              src="https://futbol-11.com/media/thumbnail/legacy.webp"
              alt=""
            />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Who is in the Box?</p>
            </div>
          </a>
          <a href="/quiz/agent007/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Agent 007</p>
            </div>
          </a>

          <a href="quiz/blind-box/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Blind Box</p>
            </div>
          </a>
          <a href="quiz/cine-bingo/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Cine Bingo</p>
            </div>
          </a>

          <a href="quiz/recommendman/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">RecommendMan</p>
            </div>
          </a>

          <a href="/quiz/top10/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Top10</p>
            </div>
          </a>

          <a href="quiz/wordle/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Wordle</p>
            </div>
          </a>

          <a href="quiz/hero-universe/rules" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-sm md:text-lg font-semibold text-white">PLAY</h2>
              <p className="text-sm md:text-lg text-white">Hero Universe</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
