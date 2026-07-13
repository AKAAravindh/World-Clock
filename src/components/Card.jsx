import { IoMdCloseCircleOutline } from "react-icons/io";

function Card({
  fz,
  now,
  selectedTimeZone,
  setSelectedTimeZone,
  toggleFavorite,
  homeTimeZone,
  home,
  isHour12,
}) {
  return (
    <div
      className="group relative w-full rounded-3xl border border-white/10 bg-gray-950/50 backdrop-blur-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#55feac]/40 hover:bg-gray-950/80 shadow-lg cursor-pointer"
      onClick={() => setSelectedTimeZone(fz)}
    >
      <div className="flex justify-between items-center gap-2">
        <span>
          {home ? "Now: " : ""}
          {fz}
        </span>

        {!home && (
          <span
            className={`cursor-pointer ${
              selectedTimeZone === fz
                ? "text-blue-500 hover:text-blue-600"
                : "text-red-400 hover:text-red-500"
            }`}
            onClick={(e) => {
              e.stopPropagation();

              toggleFavorite(fz);

              if (selectedTimeZone === fz) {
                setSelectedTimeZone(homeTimeZone);
              }
            }}
          >
            <IoMdCloseCircleOutline size={20} />
          </span>
        )}
      </div>

      <h3 className="text-[1.6rem] leading-none tabular-nums">
        {now.toLocaleTimeString("en-US", {
          timeZone: fz,
          hour12: isHour12,
        })}
      </h3>
    </div>
  );
}

export default Card;
