import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Sidebar({ isOpen, favorite, toggleFavorite, toggleSidebar }) {
  const sidebarClass = isOpen ? "w-[300px] block" : "hidden";
  const allTimeZones = Intl.supportedValuesOf("timeZone");

  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
  }

  const filteredZones = allTimeZones.filter((zone) =>
    zone.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div
      className={`bg-gray-950/90  ${sidebarClass} h-screen overflow-y-auto transition-all duration-300 ease-in-out text-sm font-mono text-gray-300 scrollbar-none relative isolate px-2 pb-2`}
    >
      <div className="flex gap-2 items-start fixed bg-gray-900 pr-4 h-min shadow-2xl w-75 py-3">
        <input
          className="w-full border-2 border-gray-600/60 rounded-full px-4 py-2 bg-gray-950/40 text-gray-300 transition-all duration-300 ease-in-out"
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => handleSearchInputChange(e)}
        />
        <span
          className="cursor-pointer text-red-600/90 hover:text-red-600"
          onClick={toggleSidebar}
        >
          <IoMdCloseCircleOutline size={36} />
        </span>
      </div>
      <div className="mt-16.5">
        {filteredZones.length > 0
          ? filteredZones?.map((timeZone, index) => (
              <div
                key={index}
                className="p-2 border-b border-gray-600/60 flex gap-4 justify-between cursor-pointer hover:bg-gray-700"
                onClick={() => toggleFavorite(timeZone)}
              >
                {timeZone}
                <button>
                  {favorite?.includes(timeZone) ? (
                    <FaStar size={20} />
                  ) : (
                    <FaRegStar size={20} />
                  )}
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Sidebar;
