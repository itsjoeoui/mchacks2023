import React from "react";
import { Challenge } from "../UserService";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
type ChallengeProps = {
  challenge: Challenge;
};

export default function DisplayChallenge({ challenge }: ChallengeProps) {
  let icon = <FiSquare size={30} />;
  if (challenge.completed == true) icon = <FiCheckSquare size={30} />;
  return (
    <div className="border-black flex-1 p-5 border-b last:border-b-0">
      <div className="flex justify-between mb-2">
        <div className="text-lg">{challenge.name}</div>
        <div className="font-bold">{challenge.exp}xp</div>
      </div>

      <div className="flex justify-between">
        <p
          style={{
            textDecoration: challenge.completed ? "line-through" : "none",
          }}
        >
          {challenge.description}
        </p>
        {icon}
      </div>
    </div>
  );
}
