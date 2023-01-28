import Challenge from "./Challenge";

export default function ChallengeContainer() {
  return (
    <div>
      <h2 className="text-2xl font-serif mb-2">Weekly Challenges</h2>
      <div className="w-[30rem] border-2 border-black rounded">
        <div className="flex flex-col h-full">
          {[0, 1, 2].map((x) => (
            <Challenge description="Order something from ..." xp={100} />
          ))}
        </div>
      </div>
    </div>
  );
}
