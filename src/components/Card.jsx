import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";

function Card({
  fz,
  now,
  setSelectedTimeZone,
  toggleFavorite,
  home,
  isHour12,
}) {
  return (
    <div
      className="border-2 rounded-2xl p-3 border-gray-600/30 flex flex-col justify-between cursor-pointer gap-2"
      onClick={() => setSelectedTimeZone(fz)}
    >
      <div className="flex justify-between items-center gap-2">
        <span className="text-gray-600/60">
          {home ? "Now: " : null}
          {fz}
        </span>
        {home ? (
          <span className="text-gray-600">
            <BiCurrentLocation size={20} />
          </span>
        ) : (
          <span
            id="favoriteCloseButton"
            className="text-red-600/60 hover:text-red-600"
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
