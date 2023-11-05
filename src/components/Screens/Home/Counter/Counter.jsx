import { useState } from 'react'
import styles from './Counter.module.css'
function Counter() {

  const [counter, setCounter] = useState(0)

  const inc = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  const dec = () => {
    setCounter(prevCounter => prevCounter - 1)
  }
  const rnd = () => {
    const random  = Math.floor(Math.random() * 101) - 50;
    setCounter(counter => random)
  }
  const reset = () => {
    setCounter(counter => 0)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.controls}>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={rnd}>RND</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  )
}
export default Counter