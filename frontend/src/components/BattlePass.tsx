import React from "react";
import BattlePassLevel from "./BattlePassLevel";
import ProgressBar from "./ProgressBar";

export default function BattlePass() {
  return (
    <div className="relative w-full">
      <ProgressBar progress={75} />
      <div className="flex justify-around items-center absolute top-1/2 transform -translate-y-1/2 w-full">
        {[0, 1, 2, 3, 4].map((x) => (
          <BattlePassLevel />
        ))}
      </div>
    </div>
  );
}
