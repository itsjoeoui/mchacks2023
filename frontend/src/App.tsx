import BattlePass from "./components/bp/BattlePass";
import ChallengeContainer from "./components/challenges/ChallengeContainer";
import ApiIntegration from "./components/apiIntegration";

function App() {
  return (
    <div className="p-8">
      {/* <div className="font-serif text-6xl">Radish</div> */}
      <img
        src="https://radish.coop/assets/images/radish-logos/Radish-Logo-BlackText-Large.png"
        alt="Radish"
        width={175}
      />
      <div className="flex items-center justify-center w-full my-4">
        <BattlePass />
      </div>
        <ApiIntegration />
    </div>
  );
}

export default App;
