import React, { useEffect, useState, ReactElement } from "react";
import { Animate } from "react-move";

import { AnimatedProgressProviderProps } from "./types";

const AnimatedProgressProvider: React.FC<AnimatedProgressProviderProps> = ({
  valueStart,
  valueEnd,
  duration,
  easingFunction,
}) => {
  let interval = undefined;

  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    interval = setInterval(() => {
      setAnimated(!animated);
    }, 1000);

    return clearInterval(interval);
  }, []);

  return (
    <Animate
      start={(): { value: number } => ({
        value: valueStart,
      })}
      update={() => ({
        value: [animated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }): React.ReactElement => value}
    </Animate>
  );
};

export default AnimatedProgressProvider;
