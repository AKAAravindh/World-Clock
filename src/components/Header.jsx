import { MdOutlineMyLocation } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import Logo from "./Logo";

function Header({
  now,
  isHour12,
  setIsHour12,
  homeTimeZone,
  toggleSidebar,
  setSelectedTimeZone,
}) {
  const logoTime = new Date(
    now.toLocaleString("en-US", {
      timeZone: homeTimeZone,
    }),
  );

  return (
    <header className="w-full px-[clamp(1rem,6vw,6%)] pt-4 md:pt-8 pb-4 shadow-md md:shadow-none">
      <div className="flex items-center justify-between gap-3">
        <Logo now={logoTime} />

        <div className="flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full px-2 py-2">
          {/* 12/24 Toggle */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:block text-sm font-semibold pl-2">
              24H
            </span>

            <button
              onClick={() => setIsHour12((prev) => !prev)}
              className="w-14 h-7 rounded-full bg-gray-950 relative cursor-pointer hover:shadow-[inset_0_0_20px_rgba(85,254,172,0.15)]"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 ${
                  isHour12
                    ? "translate-x-0 bg-gray-400"
                    : "translate-x-7 bg-[#55feac]"
                }`}
              />
            </button>
          </div>

          {/* Current */}
          <button
            onClick={() => setSelectedTimeZone(homeTimeZone)}
            className="flex items-center gap-2 rounded-full bg-gray-950 text-white px-3 sm:px-5 py-2 text-sm cursor-pointer transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(85,254,172,0.15)] hover:text-[#55feac]"
          >
            <span className="hidden sm:block">Current</span>

            <MdOutlineMyLocation size={18} color="#55feac" />
          </button>

          {/* Timezones */}
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-2 rounded-full bg-gray-950 text-white px-3 sm:px-5 py-2 text-sm cursor-pointer transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(85,254,172,0.15)] hover:text-[#55feac]"
          >
            <IoGlobeOutline size={18} />

            <span className="hidden sm:block">Timezones</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
