import { useEffect, useState } from "react";
import { load, save } from "./utils/storage";
import DesktopLayout from "./components/DesktopLayout";
import Sidebar from "./components/Sidebar";
import useClock from "./hooks/useClock";
import { MdLocationOn } from "react-icons/md";
import { MdLocationOff } from "react-icons/md";

function App() {
  const now = useClock();
  const [isHour12, setIsHour12] = useState(true);
  const homeTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedTimeZone, setSelectedTimeZone] = useState(
    load("selectedTimeZone", homeTimeZone),
  );
  const [favorite, setFavorite] = useState(() => {
    return load("favorites", []);
  });

  useEffect(() => {
    save("selectedTimeZone", selectedTimeZone);
  }, [selectedTimeZone]);
  useEffect(() => {
    save("favorites", favorite);
  }, [favorite]);

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
        homeTimeZone={homeTimeZone}
        toggleSidebar={toggleSidebar}
        toggleFavorite={toggleFavorite}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />

      <div className="fixed top-0 right-0 h-screen z-50 shadow-2xl">
        {isSidebarOpen ? (
          <div
            className="absolute translate-x-[-100vw] h-screen w-screen bg-black/40 z-25"
            onClick={toggleSidebar}
          />
        ) : null}
        <Sidebar
          isHour12={isHour12}
          isOpen={isSidebarOpen}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <button
        className="fixed bottom-10 right-10 bg-gray-600 text-gray-300 p-3 rounded-full z-25 cursor-pointer"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <MdLocationOff size={30} />
        ) : (
          <MdLocationOn size={30} />
        )}
      </button>
    </div>
  );
}

export default App;
