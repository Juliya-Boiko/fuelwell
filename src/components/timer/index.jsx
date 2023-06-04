import { useTimer } from 'react-timer-hook';
import { Fade } from "react-awesome-reveal";

export const Timer = () => {
  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 600);
  const { seconds, minutes, hours } = useTimer({ expiryTimestamp });

  const formatValue = (value) => {
    return value <= 9 ? `0${value}` : value;
  }; 

  return (
    <Fade delay={600}>
      <div className="timer">
        <span>{formatValue(hours)}</span>:<span>{formatValue(minutes)}</span>:<span>{formatValue(seconds)}</span>
        <div className='timer__layout'></div>
      </div>
    </Fade>
  );
};