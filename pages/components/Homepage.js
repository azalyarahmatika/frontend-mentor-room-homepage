import style from '../../styles/components/_homepage.module.scss';
import Image from 'next/image';
import CloseNav from '../../images/icon-close.svg';
import { useState } from 'react';
import HomepageTop from './HomepageTop';
import HomepageBottom from './HomepageBottom';

function Homepage() {
  return (
    <div className={style.homepage}>
      <HomepageTop />
      <HomepageBottom />
    </div>
  );
}
 
export default Homepage;