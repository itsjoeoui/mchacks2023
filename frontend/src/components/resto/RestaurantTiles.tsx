import RestaurantTile from "./RestaurantTile";

export default function RestaurantTiles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* {new Array(10).fill(null).map((_, i) => ( */}
      <RestaurantTile
        id="Resto%20Fictif"
        name="Resto Fictif"
        cuisine="French"
        description="Come look at the menu and witness the best French food you'll never be able to have."
        key={1}
      />
      {/* ))} */}
    </div>
  );
}
