import Menu from "./components/Menu";
import BattlePass from "./components/bp/BattlePass";
import ChallengeContainer from "./components/challenges/ChallengeContainer";
import ApiIntegration from "./components/apiIntegration";

function App() {
  return (
    <div>
      {/* <div className="font-serif text-6xl">Radish</div> */}
      <Menu />
      <main className="px-8">
        <div className="flex items-center justify-center w-full mb-6">
          <BattlePass />
        </div>
        <div className="flex justify-center md:w-3/5 mx-auto">
          <ChallengeContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
