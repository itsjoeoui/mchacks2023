import BattlePass from "../components/bp/BattlePass";
import Challenges from "../components/challenges/Challenges";
import Menu from "../components/Menu";


export default function BattlePassPage() {
  return (
    <div>
      <Menu />
      <main className="px-8">
        <div className="flex items-center justify-center w-full mb-6">
          <BattlePass />
        </div>
        <div className="flex justify-center md:w-3/5 mx-auto">
          <Challenges />
        </div>
      </main>
    </div>
  );
}
