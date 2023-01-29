import React, { useEffect, useState } from "react";
import UserService, { Bp, User, Config } from "../components/UserService";
import BattlePass from "../components/bp/BattlePass";
import Challenges from "../components/challenges/Challenges";
import Menu from "../components/Menu";
import Layout from "../Layout";
import { useAuth } from "../components/AuthContext";

export default function BattlePassPage() {
  const [config, setConfig] = useState<Config>();
  const user = useAuth();

  useEffect(() => {
    UserService.Config.details().then((data) => {
      setConfig(data);
    });
  }, []);

  let content;
  if (!user || !config) {
    content = <div>Loading...</div>;
  } else {
    content = (
      <>
        <div className="flex items-center justify-center w-full mb-6">
          <BattlePass
            userExp={user.bp.exp}
            totalExp={config.maxExp}
            config={config}
          />
        </div>
        <div className="flex justify-center md:w-3/5 mx-auto">
          <Challenges challenges={user.challenges} />
        </div>
      </>
    );
  }

  return <Layout>{content}</Layout>;
}
