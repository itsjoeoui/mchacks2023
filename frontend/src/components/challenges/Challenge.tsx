import React from "react";

type ChallengeProps = {
  description: string;
  xp?: number;
};

export default function Challenge({ description, xp }: ChallengeProps) {
  return (
    <div className="border-black flex-1 p-5 border-b last:border-b-0">
      <div className="flex justify-between mb-2">
        <div className="text-lg">{description}</div>
        <div className="font-bold">{xp}xp</div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex
        cumque voluptate eligendi unde beatae nesciunt laborum harum rem
        similique quo sed nisi quae amet reiciendis eos, odio culpa natus?
      </p>
    </div>
  );
}
