import Layout from "../Layout";
import RestaurantTiles from "../components/resto/RestaurantTiles";
import { useParams } from "react-router-dom";

export default function RestaurantPage() {
  let { id } = useParams();

  return (
    <Layout>
      <h1 className="text-4xl font-serif mb-6">Restaurant {id}</h1>

      <h2 className="text-3xl font-serif">Menu</h2>
      <div className="flex flex-col">
        {new Array(16).fill(null).map((_) => (
          <div className="border-b border-black last:border-b-0 py-4">
            <h3 className="font-bold text-xl mb-2">Lorem Ipsum</h3>
            <p>
              Dolor, sit amet consectetur adipisicing elit. Quia blanditiis qui
              exercitationem odit provident debitis corporis pariatur minus
              saepe, eum ipsa doloribus dolorum similique id, ratione vero
              quibusdam molestiae! Dolore? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Enim nemo, cum unde molestias dolor
              vitae blanditiis nam illo nulla maxime rerum non? Sint rem
              asperiores, alias sapiente necessitatibus blanditiis rerum.
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
