import styles from './Counter.module.css'


function Counter({status, time}) {

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let hours = Math.floor(minutes / 60);

    const format = (num) => {
      return num < 10 ? '0' + num : num;
    };

    return `
      ${format(hours)}:${format(minutes)}:${format(seconds)}
    `;
  };

  return (
    <div>
      <h3 className={styles.status}>{status}</h3>
      <div className={styles.time}>{formatTime(time)}</div>
    </div>
  )
}
export default Counter