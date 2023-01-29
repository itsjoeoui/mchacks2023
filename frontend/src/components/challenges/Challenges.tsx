import DisplayChallenge from "./displayChallenge";
import UserService, { Challenge } from "../UserService";
import { useEffect, useState } from "react";

type ChallengesProps = {
  challenges: Challenge[];
};

export default function Challenges({ challenges }: ChallengesProps) {
  return (
    <div>
      <h2 className="text-3xl font-serif mb-3">Weekly Challenges</h2>
      <div className="w-full border border-black rounded">
        <div className="flex flex-col h-full">
          {challenges.map((challenge) => (
            <div key={challenge.id}>
              <DisplayChallenge challenge={challenge} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
