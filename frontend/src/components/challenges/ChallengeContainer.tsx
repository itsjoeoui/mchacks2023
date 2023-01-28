import Challenge from "./Challenge";
import challenge from "../UserService";
export default function ChallengeContainer(props : ) {
  return (
    <div>
      <h2 className="text-2xl font-serif mb-2">Weekly Challenges</h2>
      <div className="w-[30rem] border border-black rounded">
        <div className="flex flex-col h-full">
          {props.map( (challenge) =>
            <Challenge description={challenge.description} xp={100} />
          )}
        </div>
      </div>
    </div>
  );
}
