import Menu from "./components/Menu";
import BattlePass from "./components/bp/BattlePass";
import ChallengeContainer from "./components/challenges/Challenges";
import { Routes, Route } from "react-router-dom";
import BattlePassPage from "./pages/BattlePassPage";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<BattlePassPage />} />
      </Route>
    </Routes>
  );
}

export default App;
