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
    <section className="overflow-hidden px-[clamp(1rem,7vw,7%)] py-16 md:py-20 bg-[#1b2d45] text-gray-200 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              World Clock
            </p>

            <h2 className="mt-3 text-3xl md:text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.9]">
              Choose your
              <br />
              <span className="text-[#55feac]">favorite</span> timezones
            </h2>
          </div>

          <p className="max-w-md text-gray-400 text-lg">
            Keep track of the places that matter most. Switch between your
            favourite locations instantly.
          </p>
        </div>

        {/* Favourite Cards */}
        <OtherRegions
          isHour12={isHour12}
          favorite={favorite}
          now={now}
          selectedTimeZone={selectedTimeZone}
          setSelectedTimeZone={setSelectedTimeZone}
          toggleFavorite={toggleFavorite}
          homeTimeZone={homeTimeZone}
        />
      </div>
    </section>
  );
}

export default SecondSection;
