import Layout from "../Layout";
import RestaurantTiles from "../components/resto/RestaurantTiles";

export default function RestaurantsPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-serif mb-6">Restaurants</h1>
      <RestaurantTiles />
    </Layout>
  );
}
