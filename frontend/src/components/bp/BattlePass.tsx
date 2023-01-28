import React from "react";
import BattlePassLevel from "./BattlePassLevel";
import ProgressBar from "./ProgressBar";

export default function BattlePass() {
  return (
    <div className="relative w-full mb-[26px] mt-[26px] lg:mb-[43px] lg:mt-[43px]">
      <ProgressBar progress={75} />
      <div className="flex justify-around items-center absolute top-1/2 transform -translate-y-1/2 w-full">
        {[1, 2, 3, 4, 5].map((x) => (
          <BattlePassLevel key={x} level={x} />
        ))}
      </div>
    </div>
  );
}
