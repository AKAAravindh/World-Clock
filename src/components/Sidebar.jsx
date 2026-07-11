import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function Sidebar({ isOpen, favorite, toggleFavorite, toggleSidebar }) {
  const allTimeZones = Intl.supportedValuesOf("timeZone");

  const [searchValue, setSearchValue] = useState("");

  const filteredZones = allTimeZones.filter((zone) =>
    zone.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      {/* Overlay */}

      <div
        onClick={toggleSidebar}
        className={`
        fixed
        inset-0
        bg-black/40
        backdrop-blur-sm
        z-40

        transition-opacity
        duration-300

        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}

      <aside
        className={`
        fixed

        right-5
        top-5
        bottom-5

        w-[min(380px,90vw)]

        rounded-3xl

        bg-white/90
        backdrop-blur-xl

        shadow-2xl

        border
        border-white/50

        z-50

        overflow-hidden

        transition-transform
        duration-500
        ease-out

        ${isOpen ? "translate-x-0" : "translate-x-[120%]"}

        `}
      >
        {/* Header */}

        <div
          className="
          p-6
          "
        >
          <div
            className="
            flex
            justify-between
            items-start
            "
          >
            <div>
              <h2
                className="
                text-2xl
                font-black
                text-gray-950
                "
              >
                Explore
                <br />
                Timezones
              </h2>

              <p
                className="
                text-sm
                text-gray-500
                mt-2
                "
              >
                Choose your world clock
              </p>
            </div>

            <button
              onClick={toggleSidebar}
              className="
              text-gray-500
              hover:text-red-500
              transition cursor-pointer
              "
            >
              <IoMdClose size={28} />
            </button>
          </div>

          {/* Search */}

          <div
            className="
            mt-6

            flex
            items-center
            gap-3

            bg-gray-100

            rounded-full

            px-5
            py-3
            "
          >
            <IoSearch className="text-gray-500" />

            <input
              type="search"
              placeholder="Search timezone..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-transparent outline-none w-full text-gray-900"
            />
          </div>
        </div>

        {/* List */}

        <div className=" h-[calc(100%-220px)] overflow-y-auto px-5 pb-6">
          {filteredZones.map((zone) => (
            <div
              key={zone}
              onClick={() => toggleFavorite(zone)}
              className=" group flex justify-between items-center p-4 mb-3 rounded-2xl bg-gray-100 hover:bg-gray-950 hover:text-white cursor-pointer transition duration-300"
            >
              <div>
                <p
                  className="
                    font-semibold
                    "
                >
                  {zone.split("/")[1]?.replaceAll("_", " ") || zone}
                </p>

                <p
                  className="
                    text-xs
                    opacity-60
                    "
                >
                  {zone}
                </p>
              </div>

              <button className="text-gray-400 group-hover:text-white transition cursor-pointer">
                {favorite.includes(zone) ? (
                  <FaStar className="text-[#55feac]" size={20} />
                ) : (
                  <FaRegStar
                    className="text-gray-400 group-hover:text-white"
                    size={20}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
