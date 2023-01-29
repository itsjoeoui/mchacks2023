import { FiClock, FiMapPin } from "react-icons/fi";
import UserService, {Inventory} from "../UserService";
import { Link } from "react-router-dom";

type RestaurantTileProps = {
  id: string;
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
  id,
  name,
  cuisine,
  description,
}: RestaurantTileProps) {

  return (
    <Link
      to={`/restaurant/${id}`}
      className="flex flex-col hover:opacity-70 border border-black"
    >
      <img
        src="https://cdn.vox-cdn.com/thumbor/eXmWUpWGFWUrO8LX8Gza6b7vu00=/0x0:1381x1080/1200x900/filters:focal(581x430:801x650)/cdn.vox-cdn.com/uploads/chorus_image/image/59837975/french_restaurant_boston_1.13.jpg"
        alt="Restaurant Thumbnail"
        className="w-full w-min-[200px] h-full block object-cover"
      />

      <div className="pt-4 flex flex-col items-center text-center gap-2 pb-6 px-3">
        <h2 className="font-serif text-3xl">{name}</h2>
        <h3 className="font-sans text-l uppercase font-bold">{cuisine}</h3>

        <p>{description}</p>

        <div className="flex flex-row gap-4 items-center w-{45%}">
          <div className="flex flex-row gap-2 items-center">
            <FiClock />
            <span>30-35 mins.</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiMapPin />
            <span>McGill</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

