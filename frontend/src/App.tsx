import { Routes, Route } from "react-router-dom";
import BattlePassPage from "./pages/BattlePassPage";
import RestaurantPage from "./pages/RestaurantPage";
import RestaurantsPage from "./pages/RestaurantsPage";

function App() {
  return (
    <Routes>
      <Route path="/bp" element={<BattlePassPage />} />
      <Route path="/" element={<RestaurantsPage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
    </Routes>
  );
}

export default App;
