function Logo({ dark = false, now }) {
  const hours = now?.getHours() ?? 0;
  const minutes = now?.getMinutes() ?? 0;
  const seconds = now?.getSeconds() ?? 0;

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  return (
    <div
      className="
      flex
      items-center
      gap-3
      cursor-pointer
      select-none
      "
    >
      {/* Icon */}
      <div
        className={`
        h-12
        w-12
        rounded-2xl
        grid
        place-items-center
        shadow-md
        hover:scale-105
        transition

        ${dark ? "bg-white" : "bg-gray-950"}
        `}
      >
        <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none">
          {/* Outer Clock */}
          <circle
            cx="32"
            cy="32"
            r="24"
            stroke={dark ? "#111827" : "#55feac"}
            strokeWidth="4"
          />

          {/* Clock Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (deg) => (
              <line
                key={deg}
                x1="32"
                y1="10"
                x2="32"
                y2="14"
                stroke={dark ? "#111827" : "#55feac"}
                strokeWidth="1.5"
                strokeLinecap="round"
                transform={`rotate(${deg} 32 32)`}
              />
            ),
          )}

          {/* Globe Curve */}
          <path
            d="M17 43C24 50 40 50 47 43"
            stroke="#55feac"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Hour Hand */}
          <path
            d="M32 32V20"
            stroke={dark ? "#111827" : "white"}
            strokeWidth="4"
            strokeLinecap="round"
            className="transition-transform duration-500 ease-linear"
            transform={`rotate(${hourAngle} 32 32)`}
          />

          {/* Minute Hand */}
          <path
            d="M32 32V14"
            stroke={dark ? "#111827" : "#55feac"}
            strokeWidth="3"
            strokeLinecap="round"
            className="transition-transform duration-500 ease-linear"
            transform={`rotate(${minuteAngle} 32 32)`}
          />

          {/* Second Hand */}
          <path
            d="M32 32V7"
            stroke="#55feac"
            strokeOpacity="0.8"
            strokeWidth="2"
            strokeLinecap="round"
            className="transition-transform duration-500 ease-linear"
            transform={`rotate(${secondAngle} 32 32)`}
          />

          {/* Center Pin */}
          <circle cx="32" cy="32" r="3.5" fill="#55feac" />
        </svg>
      </div>

      {/* Text */}
      <div className="leading-none text-center">
        <h1
          className={`
          text-xl
          md:text-2xl
          font-black
          tracking-tight
          drop-shadow-lg
          drop-shadow-[#55feac]/30
          ${dark ? "text-white" : "text-gray-950"}
          `}
        >
          Chrono
          <span className="text-[#2ee69c]">World</span>
        </h1>

        <p
          className={`
          text-[12px]
          uppercase
          tracking-[0.35em]

          ${dark ? "text-gray-400" : "text-gray-700"}
          `}
        >
          World Clock
        </p>
      </div>
    </div>
  );
}

export default Logo;
