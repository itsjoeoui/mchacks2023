import React from "react";
import { FiTag } from "react-icons/fi";

type BattlePassLevelProps = {
  level: number;
};

export default function BattlePassLevel({ level }: BattlePassLevelProps) {
  return (
    <div>
      <div className="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 border-2 border-black bg-white flex justify-center items-center">
        <FiTag size={30} />
      </div>
      <div className="bg-white w-full rounded-b border-x-2 border-b-2 border-black text-center font-serif lg:text-lg md:text-md">
        {level}
      </div>
    </div>
  );
}
