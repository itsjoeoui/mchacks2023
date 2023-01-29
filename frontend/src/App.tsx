import { Routes, Route } from "react-router-dom";
import BattlePassPage from "./pages/BattlePassPage";
import RestaurantsPage from "./pages/RestaurantsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BattlePassPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
    </Routes>
  );
}

export default App;
