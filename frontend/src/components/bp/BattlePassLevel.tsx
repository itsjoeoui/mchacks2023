import React, { useState } from "react";
import { FiTag, FiCheckCircle } from "react-icons/fi";
import { FaCoins, FaHamburger } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Item } from "../UserService";

type BattlePassLevelProps = {
  level: number;
  item: Item;
  completed: boolean;
};

enum RewardType {
  Coupon,
  Food,
  Coin,
}

export default function BattlePassLevel({
  level,
  item,
  completed,
}: BattlePassLevelProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  let icon = <FiCheckCircle size={30} />;
  if (!completed) {
    switch (item.rewardType) {
      case RewardType.Coin:
        icon = <FaCoins size={30} />;
        break;
      case RewardType.Coupon:
        icon = <FiTag size={30} />;
        break;
      case RewardType.Food:
        icon = <FaHamburger size={30} />;
        break;
      default:
        icon = <FiTag size={30} />;
        break;
    }
  }

  return (
    <div className="relative overflow">
      <div
        className="border border-black bg-white text-xs md:text-sm w-32 md:w-36 z-10 p-2 h-12 md:h-16 absolute top-[-12px] left-16 lg:left-24 pointer-events-none"
        style={{
          opacity: showTooltip ? 200 : 0,
          transitionDuration: "300ms",
        }}
      >
        {item.name}
      </div>
      <div
        className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 border border-black bg-white flex justify-center items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </div>
      <div className="bg-white w-full rounded-b border-x border-b border-black text-center font-serif lg:text-lg md:text-md">
        {level}
      </div>
    </div>
  );
}
