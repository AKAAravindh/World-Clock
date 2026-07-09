import MainLogo from "../assets/images/logos/logo.png";
import { MdOutlineMyLocation } from "react-icons/md";

function Header({
  isHour12,
  setIsHour12,
  homeTimeZone,
  toggleSidebar,
  setSelectedTimeZone,
}) {
  return (
    <div className="text-sm flex px-[6%] items-center pt-8">
      <div className="bg-white px-2 rounded-full object-cover overflow-hidden">
        <img className="h-14" src={MainLogo} alt="min logo icon" />
      </div>
      <nav className="flex ml-auto w-full justify-end items-center gap-10">
        <div className="flex items-center gap-2">
          <h5 className="text-gray-950 font-bold text-[1rem]">24hr</h5>
          <div
            className="bg-black p-1 rounded-full w-16 h-8 flex cursor-pointer"
            onClick={() => setIsHour12((prev) => !prev)}
          >
            <button
              className={`w-8 h-full rounded-full transition-all duration-500 ease-in-out ${isHour12 ? "bg-gray-700" : "translate-x-6 bg-green-700"} cursor-pointer text-white grid place-items-center text-xs`}
            />
          </div>
        </div>
        <div className="flex gap-6 text-gray-950">
          <button
            className="cursor-pointer flex items-center gap-1 bg-gray-950 text-gray-50 px-4 py-1.75 rounded-full"
            onClick={() => setSelectedTimeZone(homeTimeZone)}
          >
            Current Timezone <MdOutlineMyLocation size={20} />
          </button>
          <button
            className="bg-gray-950 text-gray-50 px-4 py-1.75 rounded-full cursor-pointer"
            onClick={toggleSidebar}
          >
            All Timezones
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
