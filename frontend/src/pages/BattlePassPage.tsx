import React, {useEffect, useState} from "react";
import UserService, {Bp, User, Config} from '../components/UserService'
import BattlePass from "../components/bp/BattlePass";
import Challenges from "../components/challenges/Challenges";
import Menu from "../components/Menu";
import Layout from "../Layout";


export default function BattlePassPage() {
    const [bp, setBp] = useState<Bp>();
    const [user, setUser] = useState<User>();
    const [config, setConfig] = useState<Config>();

    useEffect(() => {
        UserService.User.details().then( (data) => {
            setUser(data)
        })

        UserService.Bp.details().then((data) => {
            setBp(data)
        })

        UserService.Config.details().then((data) => {
            setConfig(data)
        })
    }, [])

  return (
    <Layout>
      <div className="flex items-center justify-center w-full mb-6">
        <BattlePass userExp={bp?.xp} totalExp={config?.maxExp} />
      </div>
      <div className="flex justify-center md:w-3/5 mx-auto">
        <Challenges />
      </div>
    </Layout>
  );
}
