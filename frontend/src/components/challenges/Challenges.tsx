import DisplayChallenge from "./displayChallenge";
import UserService, { Challenge } from "../UserService";
import { useEffect, useState } from "react";

export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    UserService.Challenges.list().then((data) => {
      setChallenges(data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-serif mb-3">Weekly Challenges</h2>
      <div className="w-full border border-black rounded">
        <div className="flex flex-col h-full">
          {challenges.map((challenge) => (
            <div key={challenge.id}>
              <DisplayChallenge description={challenge.description} xp={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
