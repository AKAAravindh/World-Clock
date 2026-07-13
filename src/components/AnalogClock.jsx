import { useMemo } from "react";

function AnalogClock({ now, timeZone }) {
  const { hourDegree, minuteDegree, secondDegree } = useMemo(() => {
    const date = new Date(
      now.toLocaleString("en-US", {
        timeZone,
      }),
    );

    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
      hourDegree: hours * 30 + minutes * 0.5,
      minuteDegree: minutes * 6,
      secondDegree: seconds * 6,
    };
  }, [now, timeZone]);

  return (
    <div className="relative aspect-square w-[min(75vw,380px)] rounded-full border-4 border-gray-950/80 bg-white/20 backdrop-blur-xl shadow-2xl mt-12">
      {/* Clock numbers */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 font-bold">
        12
      </span>

      <span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold">
        3
      </span>

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-bold">
        6
      </span>

      <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold">
        9
      </span>

      {/* Hands container */}
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        {/* Hour */}
        <div
          className="absolute left-1/2 bottom-1/2 h-[25%] w-1.5 rounded-full bg-gray-950 origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${hourDegree}deg)`,
          }}
        />

        {/* Minute */}
        <div
          className="absolute left-1/2 bottom-1/2 h-[35%] w-1 rounded-full bg-gray-950 origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${minuteDegree}deg)`,
          }}
        />

        {/* Second */}
        <div
          className="absolute left-1/2 bottom-1/2 h-[40%] w-0.5 rounded-full bg-[#55feac] origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${secondDegree}deg)`,
          }}
        />
      </div>

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#55feac]" />
    </div>
  );
}

export default AnalogClock;
