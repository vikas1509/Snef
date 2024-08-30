import React from 'react';
import CardComponent from './CardComponent';
import styles from './HowToStartSection.module.css';
import logoOne from '../assets/pen.png';
import logoTwo from '../assets/link.png';
import logoThree from '../assets/logo4.png';
import logoFour from '../assets/followers.png';

const HowToStartSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>How to start with Snef</h2>
      <div className={styles.cardsContainer}>
        <CardComponent logo={logoOne} text="Create your Snef and connect it to your social accounts." />
        <CardComponent logo={logoTwo} text="Add products to your store and manage them easily." />
        <CardComponent logo={logoThree} text="Boost your online presence by automating tasks." />
        <CardComponent logo={logoFour} text="Monitor your store's performance with detailed analytics." />
      </div>
    </div>
  );
}

export default HowToStartSection;
