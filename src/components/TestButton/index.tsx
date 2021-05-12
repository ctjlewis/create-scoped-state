import styles from './TestButton.module.css';

export const namedExport = 42;

const TestButton = () => {
  return (
    <button className={styles.button}>Go</button>
  );
}

export default TestButton;