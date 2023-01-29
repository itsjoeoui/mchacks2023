import { Routes, Route } from "react-router-dom";
import BattlePassPage from "./pages/BattlePassPage";
import RedeemPage from "./pages/RedeemPage";
import RestaurantPage from "./pages/RestaurantPage";
import RestaurantsPage from "./pages/RestaurantsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantsPage />} />
      <Route path="/battle-pass" element={<BattlePassPage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
      <Route path="/redeem" element={<RedeemPage />} />
    </Routes>
  );
}

export default App;
