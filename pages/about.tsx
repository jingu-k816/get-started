import React from 'react';
import styles from '/styles/Home.module.css'

const About: React.FC<{props?: any}> = () => {
  return(
    <div className={styles.container}>
      I am an about
    </div>
  )
}

export default About;