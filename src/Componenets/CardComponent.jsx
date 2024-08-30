import React from 'react';
import styles from './CardComponent.module.css';

const CardComponent = ({ logo, text }) => {
  return (
    <div className={styles.card}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default CardComponent;
