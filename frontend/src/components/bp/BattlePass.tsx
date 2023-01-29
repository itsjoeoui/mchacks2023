import React, { useEffect, useRef } from "react";
import BattlePassLevel from "./BattlePassLevel";
import ProgressBar from "./ProgressBar";
import ScrollContainer from "react-indiana-drag-scroll";
import { ScrollContainerProps } from "react-indiana-drag-scroll";
import { Config } from "../UserService";

type BattlePassProps = {
  userExp: number;
  totalExp: number;
  config: Config;
};
function getLeft(focus: number) {
  const windowWidth = window.innerWidth;
  const gapSize = windowWidth < 768 ? 96 : 192;
  return (focus + 2) * gapSize;
}

const EXP_PER_LEVEL = 500;

export default function BattlePass({
  userExp,
  totalExp,
  config,
}: BattlePassProps) {
  const ref: any = useRef<ScrollContainer>(null);
  const level = Math.floor(userExp / EXP_PER_LEVEL);
  useEffect(() => {
    ref.current?.getElement().scrollTo({
      left: getLeft(level),
    });
  }, []);

  const fillPercent = (userExp / totalExp) * 100;

  return (
    <ScrollContainer className="w-[328rem] h-36" vertical={false} ref={ref}>
      <div className="relative w-[328rem] mb-[26px] mt-16 lg:mb-[55px]">
        <ProgressBar progress={fillPercent} />
        <div className="flex gap-24 md:gap-48 items-center absolute top-1/2 transform -translate-y-1/2 w-full">
          {config.items.map((item, i) => (
            <BattlePassLevel
              key={i}
              level={i + 1}
              item={item}
              completed={i < level}
            />
          ))}
        </div>
      </div>
    </ScrollContainer>
  );
}
