import Card from "./Card";
function OtherRegions({
  isHour12,
  favorite,
  now,
  setSelectedTimeZone,
  toggleFavorite,
  homeTimeZone,
}) {
  return (
    <div className="pb-20 flex flex-wrap gap-2">
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
          setSelectedTimeZone={setSelectedTimeZone}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default OtherRegions;
