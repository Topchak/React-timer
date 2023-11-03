import styles from './Home.module.css';
import Timer from './Timer/Timer';

function Home() {
  return (
    <div className={styles.home}>
      <Timer/>
    </div>
  );
}

export default Home;
