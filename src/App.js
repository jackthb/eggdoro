import React, { useState, useRef } from 'react';
import './styles/styles.css';


const quotes = [
  'Akiramenaide!',
  "Don't give up!",
  'Just try a little bit harder!',
  'Think of all the people around you and the pople cheering you on!',
  'Never Give Up!!'
]

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [title, setTitle] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const [timeLeft, setTimeLeft] = useState(25*60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current != null) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft>= 1) return timeLeft-1;
        resetTimer()
        return 0;
      });
    }, 1000);
  }

  function stopTimer(){
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep it up!');
  }
  function resetTimer(){
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(quotes[Math.floor(Math.random() * quotes.length)]);
    setTimeLeft(25*60);
  }
  const minutes = padTime(Math.floor(timeLeft / 60));

  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className='h-screen'>
      <div className='container mx-auto h-full flex justify-center items-center'>
        <div className='rounded-sm shadow-2xl border-secondary flex flex-col text w-1/2 h-1/2 justify-around border-secondary border-4'>
          <h2 className="text-5xl text-center h-2/4">{title}</h2>
          <div className='text-8xl text-center'>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          <div className="flex justify-evenly">
              <button className='btn btn:hover' onClick={startTimer}>Start</button>
              <button className='btn' onClick={stopTimer}>Stop</button>
              <button className='btn' onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
