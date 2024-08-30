import React from 'react';
import styles from './SixSection.module.css';
import Creater from "../assets/Creater.png"
import Onboarding from "../assets/Onboarding.png";
const SixSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Jump start your corner of the internet today</h2>
        <div className={styles.inputGroup}>
          <div className={styles.urlInput}>snef.co/<span className={styles.placeholder}>yourname</span></div>
          <button className={styles.claimButton}>Claim your Snef</button>
        </div>
      </div>
      <div className={styles.right}>
        
          <img src={Onboarding} alt="Image 1" className={styles.image} />
         
      
      
          <img src={Creater} alt="Account" className={styles.accountImage} />

        
      </div>
    </div>
  );
}

export default SixSection;
