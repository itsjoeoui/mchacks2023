import React, {useEffect, useRef, useState} from "react";
import BattlePassLevel from "./BattlePassLevel";
import ProgressBar from "./ProgressBar";
import UserService, { User } from "../UserService";
import ScrollContainer from "react-indiana-drag-scroll";
import { ScrollContainerProps } from "react-indiana-drag-scroll";

function getLeft() {
  const windowWidth = window.innerWidth;
  const gapSize = windowWidth < 768 ? 96 : 192;
  return 3 * gapSize;
}

function getBarProgressPixel() {
  const windowWidth = window.innerWidth;
  const gapSize = windowWidth < 768 ? 96 : 192;
  return 4.5 * gapSize;
}

export default function BattlePass() {
  const [user, setUser] = useState<User>()
  const ref: any = useRef<ScrollContainer>(null);
  useEffect(() => {
    // const windowWidth = window.innerWidth;
    // const gapSize = windowWidth < 768 ? 96 : 192;
    UserService.User.details().then( (data) => {
      setUser(data)
    })

    ref.current?.getElement().scrollTo({
      left: getLeft(),
    });
  }, []);

  return (
    <ScrollContainer className="w-[300rem] h-36" vertical={false} ref={ref}>
      <div className="relative w-[300rem] mb-[26px] mt-16 lg:mb-[55px]">
        <ProgressBar progress={getBarProgressPixel()} />
        <div className="flex gap-24 md:gap-48 items-center absolute top-1/2 transform -translate-y-1/2 w-full">
          {[true, true, true, true, false].map((x, i) => (
            <BattlePassLevel key={i} level={i + 1} completed={x} />
          ))}
        </div>
      </div>
    </ScrollContainer>
  );
}
