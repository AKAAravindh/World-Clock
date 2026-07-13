function DigitalClock({ now, timeZone, isHour12 }) {
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: isHour12,
    timeZone,
  });

  const [hours, minutes, seconds, period] = timeString.split(/[: ]/);

  return (
    <div className="mt-8 font-timer font-extrabold tracking-widest font-variant-numeric tabular-nums text-gray-950 text-[clamp(2.5rem,10vw,7rem)] leading-none">
      <span className="inline-block w-[2ch] text-center">{hours}</span>

      <span>:</span>

      <span className="inline-block w-[2ch] text-center">{minutes}</span>

      <span>:</span>

      <span className="inline-block w-[2ch] text-center">{seconds}</span>

      {period && (
        <span className="ml-2 text-[clamp(1rem,3vw,2rem)] align-middle">
          {period}
        </span>
      )}
    </div>
  );
}

export default DigitalClock;
