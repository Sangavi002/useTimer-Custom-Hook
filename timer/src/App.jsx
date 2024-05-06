import { useTimer } from "./TimerHook"
import './App.css'

function App() {
  const[timer,isRunning,startTimer,stopTimer,resetTimer]=useTimer();

  return(
    <>
    <h1 style={{textAlign:'center'}}>Timer</h1>
    <div className="timer">
      {timer}
      <div>
        <button style={{background:'green'}} onClick={() => startTimer()}>Start</button>
        <button style={{background:'#DEAC80'}} onClick={() => stopTimer()}>Stop</button>
        <button style={{background:'red'}} onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App