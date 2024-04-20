import style from '../../styles/components/_homepageTop.module.scss';
import Image from 'next/image';
import HeroFirst from '../../images/desktop-image-hero-1.jpg';
import HeroSecond from '../../images/desktop-image-hero-2.jpg';
import HeroThird from '../../images/desktop-image-hero-3.jpg';
import AngleLeft from '../../images/icon-angle-left.svg';
import AngleRight from '../../images/icon-angle-right.svg';
import Arrow from '../../images/icon-arrow.svg';
import { useState } from 'react';

function HomepageTop() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesData = [
    {
      src: HeroFirst,
      title: 'Discover innovative ways to decorate',
      description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
    },
    {
      src: HeroSecond,
      title: 'We are available all across the globe',
      description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
      src: HeroThird,
      title: 'Manufactured with the best materials',
      description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    }
  ];

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className={style.homepage_top}>
      <div className={style.homepage_top_hero_wrapper}>
        <div className={style.homepage_top_hero}>
          <Image
            src={imagesData[currentImageIndex].src}
            alt={imagesData[currentImageIndex].title}
          />
        </div>

        <div className={style.homepage_top_angle}>
          <div className={style.angle_left} onClick={prevImage}>
            <Image
              src={AngleLeft}
              alt="Left"
            />
          </div>

          <div className={style.angle_right} onClick={nextImage}>
            <Image
              src={AngleRight}
              alt="Right"
            />
          </div> 
        </div>
        
      </div>
      <div className={style.homepage_top_description}>
        <h1>{imagesData[currentImageIndex].title}</h1>
        <p>{imagesData[currentImageIndex].description}</p>
        <div className={style.cta_link}>
          <a>SHOP NOW</a>
          <Image
            src={Arrow}
            alt="Right"
          />
        </div>
      </div>
    </div>
  );
}
 
export default HomepageTop;