import Menu from "./components/Menu";
import BattlePass from "./components/bp/BattlePass";
import ChallengeContainer from "./components/challenges/Challenges";
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
