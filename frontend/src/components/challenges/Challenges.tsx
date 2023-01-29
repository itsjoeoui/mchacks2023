import DisplayChallenge from "./displayChallenge";
import UserService, { Bp, Challenge, User } from "../UserService";
import { useEffect, useState } from "react";

export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>();
  const [bp, setBp] = useState<Bp>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserService.Challenges.list().then((data) => {
      setChallenges(data);
    });

    UserService.Bp.details().then((data) => [setBp(data)]);

    UserService.User.details().then((data) => {
      setUser(data);
    });
  }, []);

  if (!challenges) {
    return <div>Loading...</div>;
  }
  console.log(challenges);

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
