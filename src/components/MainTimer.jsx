import { getGreeting } from "../utils/greeting";
import { MdOutlineAccessTime } from "react-icons/md";

function MainTimer({ now, homeTimeZone, selectedTimeZone, isHour12 }) {
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: isHour12,
    timeZone: selectedTimeZone,
  });

  const [hours, minutes, seconds, period] = timeString.split(/[: ]/);

  const date = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: selectedTimeZone,
  }).format(now);

  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: selectedTimeZone,
    }).format(now),
  );

  const { emoji, title, subtitle } = getGreeting(hour);

  return (
    <section
      className="
      w-full
      flex
      flex-col
      items-center
      pb-16
      "
    >
      {/* Main Clock */}

      <div
        className="
        pt-[5vw]
        pb-[6vw]
        font-timer
        font-extrabold
        tracking-tight
        text-gray-950

        text-[clamp(4rem,16vw,19rem)]

        leading-none
        "
      >
        <span className="inline-block w-[2ch] text-center">{hours}</span>

        <span>:</span>

        <span className="inline-block w-[2ch] text-center">{minutes}</span>

        <span>:</span>

        <span className="inline-block w-[2ch] text-center">{seconds}</span>

        {period && (
          <span
            className="
            text-[clamp(1rem,3vw,2rem)]
            ml-3
            align-top
            "
          >
            {period}
          </span>
        )}
      </div>

      {/* Info Area */}

      <div
        className="
        w-full
        px-[clamp(1rem,7vw,7%)]

        flex
        flex-col
        md:flex-row

        justify-between
        items-center

        gap-6
        "
      >
        {/* Timezone */}

        <div
          className="
          flex
          items-center
          gap-2

          bg-white/40
          backdrop-blur-lg

          border
          border-white/50

          rounded-full

          px-5
          py-2

          text-sm
          "
        >
          <MdOutlineAccessTime size={18} className="text-[#0f172a]" />

          <span>{selectedTimeZone}</span>

          {selectedTimeZone === homeTimeZone && (
            <span
              className="
              text-xs
              text-green-700
              font-semibold
              "
            >
              • Current
            </span>
          )}
        </div>

        {/* Greeting */}

        <div
          className="
          text-center
          "
        >
          <p
            className="
            text-lg
            font-semibold
            "
          >
            {emoji} {title}
          </p>

          <p
            className="
            text-sm
            text-gray-600
            "
          >
            {subtitle}
          </p>
        </div>

        {/* Date */}

        <div
          className="
          text-center
          md:text-right
          "
        >
          <p
            className="
            text-sm
            text-gray-600
            "
          >
            {date}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainTimer;
