import { useState } from "react";

export const Timer = () => {
  const [hours, setHours] = useState('01');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const updateTimer = () => {
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " ";
  };
  setTimeout(updateTimer, 1000);
  
  return (
    <div className="timer">
      <div>{hours}</div>:<div>{minutes}</div>:<div>{seconds}</div>
    </div>
  );
};