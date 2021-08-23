import { Progress } from "antd";
import { useEffect, useState } from "react";


export const SpinnerTime = () => {
  const [state, setState] = useState({
    hours: 0,
    min: 0,
    secs: 0,
    fin: false,
    percent: 100,
    initialTime: 7200,
  });

  useEffect(() => {
    setInterval(() => {
      const {
        hours, min, secs,
      } = state;

      if (secs > 0) {
        setState((previewState) => ({
          ...previewState,
          secs: previewState.secs - 1,
        }));
      } else {
        setState((previewState) => ({
          ...previewState,
          secs: 59,
        }));
        if (min > 0) {
          setState((previewState) => ({
            ...previewState,
            min: previewState.min - 1,
          }));
        } else {
          setState((previewState) => ({
            ...previewState,
            min: 59,
            hours: previewState.hours - 1,
          }));
          if (hours < 0) {
            setState((previewState) => ({
              ...previewState,
              fin: true,
              hours: 0,
              min: 0,
              secs: 0,
            }));
          }
        }
      }

      setState((prevState) => ({
        percent: Math.round(prevState.percent - 0.83),
      }));
    }, 100);
  }, []);
  // console.log(Math.round(100 - 0.83));

  // const currentTime = (state.hours * 60 * 60) + (state.min * 60) + state.secs;
  // const percentage = (currentTime / state.initialTime) * 100;
  console.log(state);

  return (
    <Progress
      type="circle"
      strokeColor="#782CE8"
      trailColor="#D8CDEE"
      strokeWidth={10}
      strokeLinecap="square"
      width={152.2}
    />
  );
};
