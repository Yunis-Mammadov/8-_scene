export default function Home() {
  return (
    <div style={{
      background: "#282669",
      minHeight: "100vh"
    }}>
      <div className="max-w-5xl mx-auto p-12">
        {/* grid: mobile 1, small 2, md 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-stretch">

          <a href="/who-is-in-the-box" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img
              className="w-full object-cover"
              src="https://futbol-11.com/media/thumbnail/legacy.webp"
              alt=""
            />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>
          <a href="/agent009" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>

          <a href="/bird-box" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>
          <a href="/cine-bingo" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>

          <a href="/recommendman" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>

          <a href="/top10" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>

          <a href="/wordle" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>

          <a href="/hero-universe" className="bg-[#18173d] block rounded overflow-hidden shadow-sm w-full">
            <img className="w-full object-cover" src="https://futbol-11.com/media/thumbnail/legacy.webp" alt="" />
            <div className="py-1 flex flex-col gap-1 bg-[#9c2e87] text-center h-full">
              <h2 className="text-lg font-semibold text-white">PLAY</h2>
              <p className="text-base text-white">Who is in the Box?</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}
