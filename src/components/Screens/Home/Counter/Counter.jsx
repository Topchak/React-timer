import { useRef, useState } from 'react'
import styles from './Counter.module.css'
function Counter() {

  const [counter, setCounter] = useState(0)
  const renderWrapper = useRef(null)
  const renderCounter = useRef(null)
  const renderBtn = useRef(null)

  const inc = () => setCounter(prevCounter => prevCounter + 1)

  const dec = () => setCounter(prevCounter => prevCounter - 1)

  const rnd = () => {
    const random  = Math.floor(Math.random() * 101) - 50;
    setCounter(random)
  }
  const reset = () => setCounter(0)
 
  const changeStyles = () => {
    renderWrapper.current.classList.toggle(styles.wrapper__change)
    renderCounter.current.classList.toggle(styles.counter__change)
    renderBtn.current.classList.toggle(styles.btn__change)
  }

  return (
    <div ref={renderWrapper} className={styles.wrapper}>
      <div ref={renderCounter} className={styles.counter}>{counter}</div>
      <div ref={renderBtn} className={styles.controls}>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={rnd}>RND</button>
        <button onClick={reset}>RESET</button>
        <button onClick={changeStyles}>Change Styles</button>
      </div>
    </div>
  )
}
export default Counter