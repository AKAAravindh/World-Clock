import { getGreeting } from "../utils/greeting";

function MainTimer({ now, homeTimeZone, selectedTimeZone, isHour12 }) {
  const [hours, minutes, seconds, period] = now
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: isHour12,
      timeZone: selectedTimeZone,
      selectedTimeZone,
    })
    .split(/[: ]/);

  const date = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: selectedTimeZone,
    }).format(now),
    10,
  );

  const { emoji, title, subtitle } = getGreeting(hour);

  return (
    <div className="bg-transparent w-full flex flex-col border-b-2 border-white pb-12">
      <h1 className="flex items-center justify-center font-extrabold text-[clamp(1.5rem,100vw,16vw)] leading-none pt-[5vw] pb-[4vw] font-timer w-full">
        <div>
          <span className="inline-block w-[2ch] text-center">
            {hours || "00"}
          </span>
          <span>:</span>
          <span className="inline-block w-[2ch] text-center">
            {minutes || "00"}
          </span>
          <span>:</span>
          <span className="inline-block w-[2ch] text-center">
            {seconds || "00"}
          </span>
          <span className="inline-block text-2xl text-center">{period}</span>
        </div>
      </h1>
      <div className="px-[7%] flex justify-between w-full items-center">
        <h5 className="text-gray-600/60 shrink(10)">
          TimeZone: {selectedTimeZone}
          {selectedTimeZone === homeTimeZone ? (
            <span> (Current Location)</span>
          ) : null}
        </h5>
        <div className="text-center">
          <p>
            {emoji} {title}
          </p>
          <p>{subtitle}</p>
        </div>
        <div className="flex justify-between items-center gap-[15vw]">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default MainTimer;
