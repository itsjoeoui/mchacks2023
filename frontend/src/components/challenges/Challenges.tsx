import DisplayChallenge from "./displayChallenge";
import UserService, { Bp, Challenge, Users } from "../UserService";
import { useEffect, useState } from "react";

export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [bp, setBp] = useState<Bp[]>([]);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    UserService.Challenges.list().then((data) => {
      setChallenges(data);
    });

    UserService.Bp.list().then((data) => [setBp(data)]);

    UserService.Users.list().then((data) => {
      setUsers(data);
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
