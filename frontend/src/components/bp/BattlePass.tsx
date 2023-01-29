import React, {useEffect, useRef} from "react";
import BattlePassLevel from "./BattlePassLevel";
import ProgressBar from "./ProgressBar";
import ScrollContainer from "react-indiana-drag-scroll";
import { ScrollContainerProps } from "react-indiana-drag-scroll";

type BattlePassProps = {
  userExp : number;
  totalExp : number;
}
function getLeft(focus: number) {
  const windowWidth = window.innerWidth;
  const gapSize = windowWidth < 768 ? 96 : 192;
  return (focus + 2) * gapSize;
}

function getBarProgressPixel() {
  const windowWidth = window.innerWidth;
  const gapSize = windowWidth < 768 ? 96 : 192;
  return 18 * gapSize;
}

export default function BattlePass( {userExp, totalExp} : BattlePassProps) {
  const ref: any = useRef<ScrollContainer>(null);
  const level = 13;
  const levels = Array(13).fill(true).concat(Array(12).fill(false));
  useEffect(() => {
    // const windowWidth = window.innerWidth;
    // const gapSize = windowWidth < 768 ? 96 : 192;
    ref.current?.getElement().scrollTo({
      left: getLeft(level),
    });
  }, []);

  return (
    <ScrollContainer className="w-[412rem] h-36" vertical={false} ref={ref}>
      <div className="relative w-[412rem] mb-[26px] mt-16 lg:mb-[55px]">
        <ProgressBar progress={getBarProgressPixel()} />
        <div className="flex gap-24 md:gap-48 items-center absolute top-1/2 transform -translate-y-1/2 w-full">
          {levels.map((x, i) => (
            <BattlePassLevel key={i} level={i + 1} completed={x} />
          ))}
        </div>
      </div>
    </ScrollContainer>
  );
}
