import React from "react";
import { Challenge } from "../UserService";

type ChallengeProps = {
  challenge: Challenge;
};

export default function DisplayChallenge({ challenge }: ChallengeProps) {
  return (
    <div className="border-black flex-1 p-5 border-b last:border-b-0">
      <div className="flex justify-between mb-2">
        <div className="text-lg">{challenge.name}</div>
        <div className="font-bold">{challenge.exp}xp</div>
      </div>

      <p>{challenge.description}</p>
    </div>
  );
}
