import { Progress } from "antd";
import { useEffect, useState } from "react";


export const SpinnerTime = ({ start = false, setStart = () => {} }) => {
  const [state, setState] = useState({
    min: 20,
    secs: 0,
    fin: false,
  });

  const handleTimer = () => (
    setInterval(() => {
      setState((previewState) => {
        if (previewState.secs === 0 && previewState.min === 0) {
          setStart(false);
          return previewState;
        }
        if (previewState.secs > 0) {
          return ({
            ...previewState,
            secs: previewState.secs - 1,
          });
        }
        if (previewState.secs === 0) {
          if (previewState.min > 0) {
            return ({
              ...previewState,
              min: previewState.min - 1,
              secs: 59,
            });
          }
          if (previewState.min === 0) {
            return ({
              ...previewState,
              min: 59,
            });
          }
          return ({
            ...previewState,
          });
        }
        return previewState;
      });
    }, 1000)
  );

  useEffect(() => {
    let timer;
    if (start) {
      timer = handleTimer();
    }
    return () => clearTimeout(timer);
  }, [start]);

  const totalCurrentSeconds = (state.min * 60) + state.secs;

  const total = totalCurrentSeconds * 100;

  const percentage = total / 60 / 20;

  return (
    <Progress
      type="circle"
      strokeColor="#782CE8"
      trailColor="#D8CDEE"
      strokeWidth={10}
      strokeLinecap="square"
      width={152.2}
      percent={100 - percentage}
      format={() => `${state.min}:${state.secs}`}
    />
  );
};
