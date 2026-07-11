import { useEffect, useState } from "react";
import { load, save } from "./utils/storage";
import DesktopLayout from "./components/DesktopLayout";
import Sidebar from "./components/Sidebar";
import useClock from "./hooks/useClock";
import { MdLocationOn } from "react-icons/md";
import { MdLocationOff } from "react-icons/md";

function App() {
  const now = useClock();
  const homeTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedTimeZone, setSelectedTimeZone] = useState(
    load("selectedTimeZone", homeTimeZone),
  );
  const [favorite, setFavorite] = useState(() => {
    return load("favorites", []);
  });
  const [isHour12, setIsHour12] = useState(() => {
    return load("isHour12", true);
  });

  useEffect(() => {
    save("selectedTimeZone", selectedTimeZone);
  }, [selectedTimeZone]);
  useEffect(() => {
    save("favorites", favorite);
  }, [favorite]);
  useEffect(() => {
    save("isHour12", isHour12);
  }, [isHour12]);

  const toggleFavorite = (item) => {
    setFavorite((prev) => {
      const alreadyExists = prev.some((fav) => fav === item);

      return alreadyExists
        ? prev.filter((fav) => fav !== item)
        : [...prev, item];
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <DesktopLayout
        now={now}
        isHour12={isHour12}
        favorite={favorite}
        setIsHour12={setIsHour12}
        homeTimeZone={homeTimeZone}
        toggleSidebar={toggleSidebar}
        toggleFavorite={toggleFavorite}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />

      {/* Sidebar */}

      <Sidebar
        isHour12={isHour12}
        isOpen={isSidebarOpen}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        toggleSidebar={toggleSidebar}
      />

      {/* Floating Button */}

      <button
        className="fixed bottom-8 right-8 h-14 cursor-pointer
  w-14

  grid
  place-items-center

  rounded-full

  bg-gray-950
  text-[#55feac]

  shadow-xl

  z-60

  hover:scale-108 transition"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <MdLocationOff size={26} />
        ) : (
          <MdLocationOn size={26} />
        )}
      </button>
    </div>
  );
}

export default App;
