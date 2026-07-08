import OtherRegions from "./OtherRegions";

function SecondSection({
  now,
  isHour12,
  favorite,
  setSelectedTimeZone,
  toggleFavorite,
  homeTimeZone,
}) {
  return (
    <section className="px-[7%] w-full">
      <div className="grid grid-cols-4 w-full pt-12 pb-5 gap-[10%]">
        <h2 className="text-[clamp(2.2rem,4vw,10rem)] flex flex-col leading-none col-span-2">
          Choose, <span className="whitespace-nowrap">From Favorites</span>
        </h2>
        <div className="text-center w-full h-full flex col-span-2 justify-center">
          <p className="mt-auto text-gray-600/60 text-left lg:w-[clamp(2rem,25vw,100rem)]">
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
        setSelectedTimeZone={setSelectedTimeZone}
      />
    </section>
  );
}

export default SecondSection;
