import { useEffect, useState } from "react";
import { load, save } from "./utils/storage";
import DesktopLayout from "./components/DesktopLayout";
import Sidebar from "./components/Sidebar";
import useClock from "./hooks/useClock";
import { MdLocationOn, MdLocationOff } from "react-icons/md";
import MobiTabLayout from "./components/MobiTabLayout";
import useMediaQuery from "./utils/useMediaQuery";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#1b2d45] text-gray-200">
      {isMobile ? (
        <MobiTabLayout
          now={now}
          selectedTimeZone={selectedTimeZone}
          setSelectedTimeZone={setSelectedTimeZone}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
          isHour12={isHour12}
          homeTimeZone={homeTimeZone}
          setIsHour12={setIsHour12}
          toggleSidebar={toggleSidebar}
        />
      ) : (
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
      )}

      {/* Shared Sidebar */}

      <Sidebar
        isHour12={isHour12}
        isOpen={isSidebarOpen}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        toggleSidebar={toggleSidebar}
      />

      {/* Desktop Floating Button */}

      <button
        className="hidden md:grid fixed bottom-8 right-8 h-14 w-14 cursor-pointer place-items-center rounded-full bg-gray-950 text-[#55feac] shadow-xl z-60 hover:scale-108 transition"
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
