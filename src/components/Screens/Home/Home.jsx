import styles from './Home.module.css';
import Timer from './Timer/Timer';
import Counter from './Counter/Counter';

function Home() {
  return (
    <div className={styles.home}>
      <Timer/>
      <Counter/>
    </div>
  );
}

export default Home;
