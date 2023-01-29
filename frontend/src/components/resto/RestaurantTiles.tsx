import RestaurantTile from "./RestaurantTile";

export default function RestaurantTiles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RestaurantTile
        id="Resto%20Fictif"
        name="Resto Fictif"
        cuisine="French"
        thumbnail="https://cdn.vox-cdn.com/thumbor/eXmWUpWGFWUrO8LX8Gza6b7vu00=/0x0:1381x1080/1200x900/filters:focal(581x430:801x650)/cdn.vox-cdn.com/uploads/chorus_image/image/59837975/french_restaurant_boston_1.13.jpg"
        description="Come look at the menu and witness the best French food you'll never be able to have."
      />
      <RestaurantTile
        id="Kitas"
        name="Kitas"
        cuisine="Lithuanian"
        thumbnail="https://s3-media0.fl.yelpcdn.com/bphoto/joG9psHPIKqnKGJufrRzoQ/l.jpg"
        description="The best Lithuanian food in town."
      />
      <RestaurantTile
        id="Dyne"
        name="Dyne"
        cuisine="Experience"
        thumbnail="https://www.interiorzine.com/wp-content/uploads/2015/09/usine-restaurant-14.jpg"
        description="You know we're trendy because we have a weirdly placed 'y' in our name."
      />

      <RestaurantTile
        id="Qalb"
        name="Qalb"
        cuisine="Lebanese"
        thumbnail="https://cdn.vox-cdn.com/thumbor/PfdP46zP2UvUpptL5JX5ZeRs-9k=/0x0:885x529/1200x800/filters:focal(373x195:513x335)/cdn.vox-cdn.com/uploads/chorus_image/image/58834547/Abd_el_Wahab_1.0.png"
        description="Come on down and check out our Halal eats."
      />
      <RestaurantTile
        id="Thai%20Express"
        name="Thai Express"
        cuisine="Thai"
        thumbnail="https://ssmscdn.yp.ca/image/resize/ba954d10-4745-4433-be35-8e52f3544612/ypui-d-mp-pic-gal-lg/thai-express-interior-4.jpg"
        description="Enjoy authentic Thai flavours from our traditional Thai recipes freshly cooked."
      />
      <RestaurantTile
        id="Basha"
        name="Basha"
        cuisine="Middle Eastern"
        thumbnail="https://media-cdn.tripadvisor.com/media/photo-s/17/6f/5c/52/photo2jpg.jpg"
        description="Overpriced vaguely Middle Eastern meals for the whole family."
      />
    </div>
  );
}
