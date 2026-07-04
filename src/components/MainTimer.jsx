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

  return (
    <div className="bg-transparent w-full flex flex-col border-b-2 border-white pb-12">
      <h1 className="flex items-center justify-center font-extrabold text-[clamp(1.5rem,100vw,16vw)] leading-none py-[5vw] font-timer w-full">
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
      <div className="px-[7%] flex justify-between w-full">
        <h5 className="text-gray-600/60 shrink(10)">
          TimeZone: {selectedTimeZone}
          {selectedTimeZone === homeTimeZone ? (
            <span> (Current Location)</span>
          ) : null}
        </h5>
        <div className="flex justify-between gap-[15vw]">
          <div className="">
            {/* <p>
              Sun <span>☀️</span>: 07:12 - 17:17 (10hr 06m)
            </p> */}
            <p>{date}</p>
          </div>
          {/* <div className="bg-white w-min rounded-full px-6 py-2 relative flex justify-evenly gap-5 isolate h-min ml-auto">
            <span>12h</span> <span>24h</span>
            <span className="bg-gray-960 absolute bottom-0 top-0 w-16 right-0 rounded-full -z-10" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainTimer;
