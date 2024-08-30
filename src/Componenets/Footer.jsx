import React from 'react';
import styles from './Footer.module.css';
import insta from "../assets/insta.png";
import tiktok from "../assets/tiktok.png";
import mail from "../assets/mail.png";
import x from "../assets/x.png";
import apple from "../assets/apple.png";
import play from "../assets/play.png";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={logo} alt="Snef Logo" className={styles.logoImage} />
        </div>
        <div className={styles.contact}>
          <p className={styles.contactEmail}>
            <img src={mail} alt="Email Icon" className={styles.icon} />
            info@snef.co
          </p>
        </div>
        <div className={styles.copyright}>
          <p>© 2024</p>
          <p className={styles.privacy}>Data Privacy</p>
        </div>
      </div>
      <div className={styles.right}>
        <nav className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#brand">Brand</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className={styles.socialLinks}>
          
          <a href="google-play-link" className={styles.storeLink}>
            <img src={play} alt="Google Play" />
          </a>
          <a href="social-instagram-link" className={styles.socialIcon}>
            <img src={insta} alt="Instagram" />
          </a>
          <a href="social-tiktok-link" className={styles.socialIcon}>
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="social-twitter-link" className={styles.socialIcon}>
            <img src={x} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
