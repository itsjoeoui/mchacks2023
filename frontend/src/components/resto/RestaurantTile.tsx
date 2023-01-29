import { FiClock, FiMapPin } from "react-icons/fi";

type RestaurantTileProps = {
  name: string;
  cuisine: string;
  description: string;
};

export default function RestaurantTile({
  name,
  cuisine,
  description,
}: RestaurantTileProps) {
  return (
    <a className="flex flex-col">
      <img
        src="https://cdn.radish.coop/media/ofish-restaurants-listing.jpg"
        alt="Restaurant Thumbnail"
        className="w-full w-min-[200px] h-full block object-cover"
      />

      <div>
        <h2 className="font-serif text-3xl mt-2">Restaurant Name</h2>
        <h3 className="font-sans text-xl mb-2">Cuisine</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          pariatur. Quae sequi fugit nostrum ratione impedit ad veritatis
          eveniet iste quo quis temporibus rerum, voluptate fuga sit dolores
          quasi molestiae.
        </p>

        <div>
          <div>
            <FiClock />
            <span>30-35 mins.</span>
          </div>
          <div>
            <FiMapPin />
            <span>Somewhere in Montreal</span>
          </div>
        </div>
      </div>
    </a>
  );
}
