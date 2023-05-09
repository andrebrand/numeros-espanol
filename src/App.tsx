import './App.css'
import { useState } from "react";

import { getRandomNumber } from './utils/numberUtils'

import NumberSign from './components/numberSign/numberSign'
import NumberInput from './components/numberInput/numberInput'
import Stats from './components/stats/stats';
import Timer from './components/timer/timer';


function App() {
  const maxNumber = 100;

  const colors:Array<''|'success'|'danger'> = ['', 'success', 'danger'];
  
  const [number, setNumber] = useState(54);

  const [gues, setGues] = useState(0); // 0 = default | 1 = success | 2 = false

  const [stats, setStats] = useState({right: 0, wrong: 0});

  const [gameState, setGameState] = useState(false); // false = not running | true = running

  const handleSubmitResult = (result: number) => {
    if(result === number){
      setGues(1);
      setStats((preStats)=>{
        return {right: preStats.right++, wrong: preStats.wrong};
      });
      clearGues(true);
    }else{
      setGues(2);
      setStats((preStats)=>{
        return {right: preStats.right, wrong: preStats.wrong++};
      });
      clearGues(false);
    }
  }

  const clearGues = (setNewNumber: boolean) =>{
    const timeoutId = setTimeout(() => {
      if(setNewNumber){
        setNumber(getRandomNumber(0, maxNumber));
      }
      setGues(0);
      clearTimeout(timeoutId);
    }, 500);
  }

  const handleStartGame = () => {
    setGameState(true);
    setStats({right: 0, wrong: 0});
    setNumber(getRandomNumber(0, maxNumber));
  }

  const handleEndGame = () => {
    setGameState(false);
  }

  const showStats = () => {
    if(stats.right > 0 || stats.wrong > 0){
      return <Stats stats={stats} />
    }else{
      return <h1 className='p-3 text-center'>¡Hola! Aprender los numeros en español.</h1>
    }
  }

  return (
    <div className="App">
      { !gameState
        ? <>
            { showStats() }
            <button className="btn btn-lg btn-primary" onClick={handleStartGame}>comenzar</button>
          </>
        : <>
            <Timer onTimerEnd={handleEndGame} />
            <div className="Game">
              <NumberSign number={number} color={ colors[gues] } />
              <NumberInput onResultSubmit={handleSubmitResult}  />
            </div>
          </>
      }
      
    </div>
  )
}

export default App
