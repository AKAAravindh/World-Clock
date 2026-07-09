import OtherRegions from "./OtherRegions";

function SecondSection({
  now,
  isHour12,
  favorite,
  selectedTimeZone,
  setSelectedTimeZone,
  toggleFavorite,
  homeTimeZone,
}) {
  return (
    <section className="px-[7%] w-full bg-[#1b2d45] text-gray-200">
      <div className="grid grid-cols-4 w-full pt-12 pb-2 gap-[10%] border-b-2 mb-8">
        <h2 className="text-[clamp(2.2rem,4vw,10rem)] flex flex-col leading-none col-span-2">
          Choose, <span className="whitespace-nowrap">From Favorites</span>
        </h2>
        <div className="text-center w-full h-full flex col-span-2 justify-center">
          <p className="mt-auto text-left lg:w-[clamp(2rem,25vw,100rem)]">
            Life moves fast, Stay on time and enjoy every moment!
          </p>
        </div>
      </div>
      <OtherRegions
        now={now}
        isHour12={isHour12}
        favorite={favorite}
        homeTimeZone={homeTimeZone}
        toggleFavorite={toggleFavorite}
        selectedTimeZone={selectedTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />
    </section>
  );
}

export default SecondSection;
