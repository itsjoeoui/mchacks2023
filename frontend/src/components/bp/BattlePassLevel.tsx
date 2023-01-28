import React from "react";
import { FiTag, FiCheckCircle } from "react-icons/fi";

type BattlePassLevelProps = {
  level: number;
  completed: boolean;
};

export default function BattlePassLevel({
  level,
  completed,
}: BattlePassLevelProps) {
  return (
    <div>
      <div className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 border border-black bg-white flex justify-center items-center">
        {completed ? <FiCheckCircle size={30} /> : <FiTag size={30} />}
      </div>
      <div className="bg-white w-full rounded-b border-x border-b border-black text-center font-serif lg:text-lg md:text-md">
        {level}
      </div>
    </div>
  );
}
