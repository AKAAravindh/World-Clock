import Header from "./Header";
import MainTimer from "./MainTimer";
import SecondSection from "./SecondSection";

function DesktopLayout({
  now,
  isHour12,
  favorite,
  setIsHour12,
  homeTimeZone,
  toggleSidebar,
  toggleFavorite,
  selectedTimeZone,
  setSelectedTimeZone,
}) {
  return (
    <div className="min-h-screen w-full text-gray-900 font-mono">
      <div className="bg-[#BDD5EA]">
        <Header
          isHour12={isHour12}
          setIsHour12={setIsHour12}
          homeTimeZone={homeTimeZone}
          toggleSidebar={toggleSidebar}
          setSelectedTimeZone={setSelectedTimeZone}
        />
        <MainTimer
          now={now}
          homeTimeZone={homeTimeZone}
          selectedTimeZone={selectedTimeZone}
          isHour12={isHour12}
        />
      </div>
      <SecondSection
        now={now}
        isHour12={isHour12}
        favorite={favorite}
        homeTimeZone={homeTimeZone}
        toggleFavorite={toggleFavorite}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />
    </div>
  );
}

export default DesktopLayout;
