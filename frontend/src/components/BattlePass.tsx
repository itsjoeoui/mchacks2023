import React from "react";
import ProgressBar from "./ProgressBar";

export default function BattlePass() {
  return (
    <div className="relative">
      <ProgressBar />
      {[0, 1, 2, 3, 4].map((x) => (
        <div
          className="rounded w-10 h-10 bg-blue-400 absolute top-[-6px] left-0"
          style={{ left: x * 75 }}
        ></div>
      ))}
    </div>
  );
}
