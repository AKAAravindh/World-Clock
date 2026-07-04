import Card from "./Card";
function OtherRegions({
  favorite,
  now,
  setSelectedTimeZone,
  toggleFavorite,
  homeTimeZone,
}) {
  return (
    <div className="pb-20 flex flex-wrap gap-2">
      <Card
        now={now}
        fz={homeTimeZone}
        home={true}
        setSelectedTimeZone={setSelectedTimeZone}
      />
      {favorite?.map((fz, i) => (
        <Card
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
