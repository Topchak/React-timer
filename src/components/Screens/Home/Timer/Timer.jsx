import {useEffect, useState, useRef} from 'react';

import styles from './Timer.module.css'
import Counter from './Counter/Counter'
import Button from '../../UI/Button/Button'

function Timer() {
  const storedTime = localStorage.getItem('timer');
  const initialTimer = storedTime
    ? parseInt(storedTime, 10)
    : 0;
  const saveTimeToLocalStorage = (currentTime) => {
    localStorage.setItem('timer', currentTime.toString());
  };

  const [time, setTime] = useState(initialTimer);
  const [status, setStatus] = useState(''); //
  const [isActive, setIsActive] = useState(false);
  const [wrapperClasses,setWrapperClasses] = useState(styles.wrapper); 

  const wrapperRef = useRef();

  const handleClick = () => {
    if (wrapperClasses === styles.wrapper) {
      setWrapperClasses(styles.wrapper__block)
    } else {
      setWrapperClasses(styles.wrapper)
    }
  };

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (isActive) {
        setTime((prevTime) => prevTime + 1)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [isActive])

  useEffect(() => {
    saveTimeToLocalStorage(time);
  }, [time]);

  const start = () => {
    setIsActive(true);
    setStatus('Running');
  }
  const pause = () => {
    setIsActive(false);
    !isActive
      ? setStatus('')
      : setStatus('Paused');
  }

  const reset = () => {
    setIsActive(false);
    setStatus('');
    setTime(0);
    localStorage.removeItem('timer');
  }

  const addClass = () => {
    if (isActive && status === 'Running') {
      return styles.active;
    } else if (!isActive && status === 'Paused') {
      return styles.paused;
    }
    return '';
  }

  return (
    <div ref={wrapperRef} className={`${wrapperClasses} ${addClass()}`}>
      <div>
        <h1>Timer</h1>
        <Counter status={status} time={time}/>
      </div>
      <div className={styles.buttons}>
        <Button onClick={start} text="Start"/>
        <Button onClick={pause} text="Pause"/>
        <Button onClick={reset} text="Reset"/>
      </div>
      <Button onClick={handleClick} text="Change type of timer"/>
    </div>
  )
}
export default Timer
