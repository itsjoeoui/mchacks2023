import React from "react";
import BattlePassLevel from "./BattlePassLevel";
import ProgressBar from "./ProgressBar";

export default function BattlePass() {
  return (
    <div className="relative w-full mb-[26px] mt-[26px] lg:mb-[43px] lg:mt-[43px]">
      <ProgressBar progress={75} />
      <div className="flex justify-around items-center absolute top-1/2 transform -translate-y-1/2 w-full">
        {[true, true, true, true, false].map((x, i) => (
          <BattlePassLevel key={i} level={i + 1} completed={x} />
        ))}
      </div>
    </div>
  );
}
