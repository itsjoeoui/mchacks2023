import RestaurantTile from "./RestaurantTile";

export default function RestaurantTiles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {new Array(10).fill(null).map((_, i) => (
        <RestaurantTile
          name="Resto Fictif"
          cuisine="French"
          description="The best French food you'll never be able to have."
          key={i}
        />
      ))}
    </div>
  );
}
