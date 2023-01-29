import DisplayChallenge from "./displayChallenge";
import {Challenge} from "../UserService";
type ChallengeContainerProps = {
    challenges: Challenge[]
}
export default function ChallengeContainer( {challenges}: ChallengeContainerProps) {
  return (
    <div>
      <h2 className="text-3xl font-serif mb-3">Weekly Challenges</h2>
      <div className="w-full border border-black rounded">
        <div className="flex flex-col h-full">
          {challenges.map( (challenge) =>
              <div key={challenge.id}>
                <DisplayChallenge description={challenge.description} xp={100} />
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
