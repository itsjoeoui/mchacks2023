import BattlePass from "../components/bp/BattlePass";
import Challenges from "../components/challenges/Challenges";
import Menu from "../components/Menu";
import Layout from "../Layout";


export default function BattlePassPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full mb-6">
        <BattlePass />
      </div>
      <div className="flex justify-center md:w-3/5 mx-auto">
        <Challenges />
      </div>
    </Layout>
  );
}
