import style from '../../styles/components/_homepageBottom.module.scss';
import Image from 'next/image';
import AboutDark from '../../images/image-about-dark.jpg';
import AboutLight from '../../images/image-about-light.jpg';
import { useState } from 'react';

function HomepageBottom() {
  return (
    <div className={style.homepage_bottom}>
      <div className={style.homepage_bottom_pictureLeft}>
        <Image
          src={AboutDark}
          alt="Shortly Logo"
        />
        {/* <p>hello</p> */}
      </div>
      
      <div className={style.homepage_bottom_about}>
        <h2>ABOUT OUR FURNITURE</h2>
        <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>

      <div className={style.homepage_bottom_pictureRight}>
        <Image
          src={AboutLight}
          alt="Shortly Logo"
        /> 
        {/* <p>hello</p> */}
      </div>
    </div>
  );
}
 
export default HomepageBottom;