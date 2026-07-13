import { MdOutlineAccessTime } from "react-icons/md";
import SecondSection from "./SecondSection";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import Header from "./Header";
import Footer from "./Footer";

function MobiTabLayout({
  now,
  selectedTimeZone,
  isHour12,
  homeTimeZone,
  favorite,
  setIsHour12,
  toggleFavorite,
  setSelectedTimeZone,
  toggleSidebar,
}) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start gap-0 bg-[#BDD5EA] text-gray-900">
      <Header
        now={now}
        homeTimeZone={homeTimeZone}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
        isHour12={isHour12}
        setIsHour12={setIsHour12}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex flex-col items-center gap-6 w-full">
        {/* Analog Clock */}
        <AnalogClock now={now} timeZone={selectedTimeZone} />

        {/* Digital Clock */}
        <DigitalClock
          now={now}
          timeZone={selectedTimeZone}
          isHour12={isHour12}
        />

        {/* Timezone Info */}
        <div className="flex items-center gap-2 rounded-full bg-white/40 backdrop-blur-lg border border-white/50 px-5 py-2 mb-10 text-sm">
          <MdOutlineAccessTime size={18} />

          <span>{selectedTimeZone}</span>

          {selectedTimeZone === homeTimeZone && (
            <span className="text-xs font-semibold text-green-700">
              • Current
            </span>
          )}
        </div>
      </div>

      {/* Favourite Section */}
      <SecondSection
        now={now}
        isHour12={isHour12}
        favorite={favorite}
        homeTimeZone={homeTimeZone}
        toggleFavorite={toggleFavorite}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />

      <Footer />
    </main>
  );
}

export default MobiTabLayout;
