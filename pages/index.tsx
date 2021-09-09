import React from 'react';
import styles from '/styles/Home.module.css'
import Index from '../src/presentation/components';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Index />
    </div>
  )
}

export default Home;
