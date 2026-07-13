import Card from "./Card";
function OtherRegions({
  isHour12,
  favorite,
  now,
  selectedTimeZone,
  setSelectedTimeZone,
  toggleFavorite,
  homeTimeZone,
}) {
  return (
    <div className="mt-10 grid md:grid-cols-[repeat(auto-fit,minmax(250px,320px))] gap-6">
      <Card
        isHour12={isHour12}
        now={now}
        fz={homeTimeZone}
        home={true}
        homeTimeZone={homeTimeZone}
        setSelectedTimeZone={setSelectedTimeZone}
      />
      {favorite?.map((fz, i) => (
        <Card
          isHour12={isHour12}
          home={false}
          now={now}
          key={i}
          fz={fz}
          homeTimeZone={homeTimeZone}
          selectedTimeZone={selectedTimeZone}
          setSelectedTimeZone={setSelectedTimeZone}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default OtherRegions;
