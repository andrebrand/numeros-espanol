import { useEffect, useState } from "react";
import './timer.css'

interface Props{   
    onTimerEnd: ()=>void;
}

function Timer({onTimerEnd} : Props){
    const timeLimit = 3;

    const [timer, setTimer] = useState(timeLimit);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if(timer > 0){
            setTimer((preValue)=>{return --preValue });
          }else{
            onTimerEnd();
          }
        }, 1000);
      return () => clearInterval(intervalId);
    },[timer]);

    return (
        <div className="Timer">{timer}</div>
    )
}

export default Timer