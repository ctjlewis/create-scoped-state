import React from 'react'
import styles from './TestHeading.module.css'

export const namedExport = 42;

const TestHeading = () => {
  return (
    <div>
      <h1 className={`${styles.heading} text-5xl font-bold`}>Hello world!</h1>
    </div>
  );
}

export default TestHeading;