import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";

function Card({
  fz,
  now,
  selectedTimeZone,
  setSelectedTimeZone,
  toggleFavorite,
  home,
  isHour12,
}) {
  return (
    <div
      className="group
relative
w-fit
min-w-65
max-w-85

rounded-3xl

border
border-white/10

bg-white/0.05

backdrop-blur-xl

p-5

transition-all
duration-300

hover:-translate-y-0.5
hover:border-[#55feac]/40
hover:bg-white/0.08
shadow-lg
cursor-pointer
"
      onClick={() => setSelectedTimeZone(fz)}
    >
      <div className="flex justify-between items-center gap-2">
        <span className="">
          {home ? "Now: " : null}
          {fz}
        </span>
        {home ? (
          <span className="text-[#55feac]">
            <BiCurrentLocation size={20} />
          </span>
        ) : (
          <span
            id="favoriteCloseButton"
            className={`${selectedTimeZone === fz ? "text-blue-500 hover:text-blue-600" : "text-red-400 hover:text-red-500"} `}
            onClick={() => toggleFavorite(fz)}
          >
            <IoMdCloseCircleOutline size={20} />
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-[1.6rem] leading-none">
          {now.toLocaleTimeString("en-US", {
            timeZone: fz,
            hour12: isHour12,
          })}
        </h3>
      </div>
    </div>
  );
}

export default Card;
