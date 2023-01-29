import { FiClock, FiMapPin } from "react-icons/fi";
import UserService, {Inventory} from "../UserService";

type RestaurantTileProps = {
  name: string;
  cuisine: string;
  description: string;
}

const Handle_Clicked = (id : number) => {
  UserService.Inventory.send(id)
      .then((response) => {
        if(response == id)
          console.log('order succeeded! ')
      })
}

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
        <h2 className="font-serif text-3xl mt-2">{name}</h2>
        <h3 className="font-sans text-xl mb-2">{cuisine}</h3>

        <p>{description}</p>

        <div className="flex flex-row justify-around items-center mt-2">
          <div className="flex flex-row gap-2 items-center">
            <FiClock />
            <span>30-35 mins.</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiMapPin />
            <span>Somewhere in Montreal</span>
          </div>
        </div>
      </div>
    </a>
  );
}

