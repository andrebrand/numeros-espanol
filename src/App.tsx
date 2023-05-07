import './App.css'
import { useEffect, useState } from "react";

import { getRandomNumber } from './utils/numberUtils'

import NumberSign from './components/numberSign/numberSign'
import NumberInput from './components/numberInput/numberInput'
import Stats from './components/stats/stats';





function App() {
  const timeLimit = 100;
  const maxNumber = 100;
  const colors:Array<''|'success'|'danger'> = ['', 'success', 'danger'];

  
  const [number, setNumber] = useState(54);

  const [timer, setTimer] = useState(0);

  const [gues, setGues] = useState(0); // 0 = default | 1 = success | 2 = false

  const [stats, setStats] = useState({right: 0, wrong: 0});



  useEffect(() => {
      const intervalId = setInterval(() => {
        if(timer > 0){
          setTimer((preValue)=>{return --preValue });
          if(gues == 1){
            setNumber(getRandomNumber(0, maxNumber));
          }
          if(gues !== 0){
            setGues(0);
          }
        }
      }, 1000);
    return () => clearInterval(intervalId);
  },[timer]);


  const handleSelectItem = (result: number) => {
    if(result === number){
      setGues(1);
      setStats((preStats)=>{
        ++preStats.right
        return preStats;
      });
    }else{
      setGues(2);
      setStats((preStats)=>{
        ++preStats.wrong
        return preStats;
      });
    }
  }

  const handleStartGame = () => {
    setTimer(timeLimit);
    setStats({right: 0, wrong: 0});
    setNumber(getRandomNumber(0, maxNumber));
  }



  return (
    <div className="App">
      
      
      { timer <= 0 
        ? <>
            { (stats.right > 0 || stats.wrong > 0) && 
              <Stats stats={stats} />
            }
            <button className="btn btn-primary" onClick={handleStartGame}>comenzar</button>
          </>
        : <>
            <h1>{timer}</h1>
            <div className="Game">
              <NumberSign number={number} color={ colors[gues] } />
              <NumberInput onResultSubmit={handleSelectItem}  />
            </div>
          </>
      }
      
    </div>
  )
}

export default App
