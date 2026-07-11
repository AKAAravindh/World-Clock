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
    <div
      className="mt-10
flex
flex-wrap
gap-6
items-start"
    >
      <Card
        isHour12={isHour12}
        now={now}
        fz={homeTimeZone}
        home={true}
        setSelectedTimeZone={setSelectedTimeZone}
      />
      {favorite?.map((fz, i) => (
        <Card
          isHour12={isHour12}
          home={false}
          now={now}
          key={i}
          fz={fz}
          selectedTimeZone={selectedTimeZone}
          setSelectedTimeZone={setSelectedTimeZone}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default OtherRegions;
