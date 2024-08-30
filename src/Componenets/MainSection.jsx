import React from 'react'
import { Button } from './Button'
import inclind from "../assets/inclind-tady.png";
import styles from "./MainSection.module.css";
import Creator from "../assets/CreatorPage.png";
import Frame from "../assets/Frame.png"
import  Group from "../assets/Group.png";
import bagOne from "../assets/bagOne.png";
import bagTwo from "../assets/bagTwo.png";
import SLogo from "../assets/SLogo.png";
import cardImageOne from "../assets/cardImageOne.png";
import cardImageTwo from "../assets/cardImageOne.png";
import cardImageThree from "../assets/cardImageOne.png";
import HowToStartSection from './HowToStartSection';
import SixSection from './SixSection';
import Footer from './Footer';


const MainSection = () => {
  return (
   <div className={styles.main}>
   <div className={styles.sectionone}>
   <div><p className={styles.headline}>Your AI - Powered Creator Commerce Autopilot</p></div>
    <div className={styles.Signup}>Sign up today to automate your storefront, 
      enhance customer experience, and boost sales effortlessly.</div>
    <div>
      <div className={styles.inputsection}>
<img src={inclind} />
<input className={styles.input}placeholder="snef.co/yourname"/>
  <div className="Claim"><Button text={"Claim Your Snef"}/></div>
      </div>
    
    </div>
   </div>


   <div className={styles.sectionTwo}>
    <div className={styles.leftSectionTwo}>
     
      <img src={Creator} className={styles.imageOne} height={300}/>
      <img src={Frame} className={styles.imageTwo} height={200} width={250}/>
    </div>
    <div className={styles.rightSectionTwo}>
      <div className={styles.heading}>Effortlessly manage store front with <span>autopilot</span>.</div>
      <Button text={"Get started for free"}/>
    </div>
   </div>


   <div className={styles.sectionThree}>
    <div className={styles.sectionThreeLeft}>

      <div className={styles.heading}>Take control of your digital presence by <span>training AI.</span></div>
      <Button text={"Get started for free"}/>
    </div>
    <div className={styles.sectionThreeRight}>
      <img src={Group} height={400}/>
    </div>
   </div>



   <div className={styles.sectionFour}>
    <div className={styles.leftSectionFour}>
    <img src={bagTwo} className={styles.imageOneBag} height={300}/>
    <img src={bagOne} className={styles.imageTwoBag} height={200} width={250}/>
     
     
    </div>
    <div className={styles.rightSectionFour}>
      <div className={styles.heading}><span>Boost your sales</span> by making ordering as easy as a few clicks</div>
      <Button text={"Get started for free"}/>
    </div>
   </div>

   <div className={styles.sectionFive}>
      <div className={styles.sectionFiveHeading}>The creators tried Snef</div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <button className={styles.cardButton}>/tasyafarasya</button>
          <img src={cardImageOne} alt="Card 1" />
        </div>
        <div className={styles.card}>
          <button className={styles.cardButton}>/tasyafarasya</button>
          <img src={cardImageTwo} alt="Card 2" />
        </div>
        <div className={styles.card}>
          <button className={styles.cardButton}>/tasyafarasya</button>
          <img src={cardImageThree} alt="Card 3" />
        </div>
        <div className={styles.card}>
          <button className={styles.cardButton}>/tasyafarasya</button>
          <img src={cardImageTwo} alt="Card 4" />
        </div>
      </div>
    </div>

    <HowToStartSection/>
<SixSection />
<Footer/>
    </div>
  )
}

export default MainSection