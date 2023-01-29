import React, { useState } from "react";
import { FiTag, FiCheckCircle } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

type BattlePassLevelProps = {
  level: number;
  completed: boolean;
};

export default function BattlePassLevel({
  level,
  completed,
}: BattlePassLevelProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative overflow">
      <div
        className="border border-black bg-white text-xs md:text-sm w-32 md:w-36 z-10 p-2 h-12 md:h-16 absolute top-[-12px] left-16 lg:left-24 pointer-events-none"
        style={{
          opacity: showTooltip ? 200 : 0,
          transitionDuration: "300ms",
        }}
      >
        5$ Drink Coupon at Starbucks
      </div>
      <div
        className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 border border-black bg-white flex justify-center items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {completed ? <FiCheckCircle size={30} /> : <FiTag size={30} />}
      </div>
      <div className="bg-white w-full rounded-b border-x border-b border-black text-center font-serif lg:text-lg md:text-md">
        {level}
      </div>
    </div>
  );
}
