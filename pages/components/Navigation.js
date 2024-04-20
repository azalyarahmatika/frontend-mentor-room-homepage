import style from '../../styles/components/_navigation.module.scss';
import logo from '../../images/logo.svg';
import Image from 'next/image';
import BurgerMenu from '../../images/icon-hamburger.svg';
import CloseNav from '../../images/icon-close.svg';
import { useState, useEffect } from 'react';

function Navigation() {
  const [isToggled, setToggle] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = async (event) => {
    event.preventDefault();
    setToggle(!isToggled);
  }
  const link_wrapper_class = isToggled ? `${style.nav_link_wrapper} ${style.nav_toggle} ${style.nav_link_color}` : `${style.nav_link_wrapper}`;

  const navClass = isToggled ? `${style.nav_wrapper_toggle} ${style.nav_wrapper}` : `${style.nav_wrapper}`;

  const logoClass = isToggled ? `${style.nav_logo_none}` : `${style.nav_logo}`;

  const navScrolled = isScrolled ? `${style.scrolled}` : ``;

  return (
    <nav className={`${navClass} ${navScrolled}`}>
      <div className={style.nav_small}>
        <Image
          src={isToggled ? CloseNav: BurgerMenu }
          width={30}
          alt="Menu"
          onClick={handleToggle}
        />
      </div>

      <div className={logoClass}>
        <Image
          src={logo}
          alt="Shortly Logo"
        />
      </div>
          
      <div className={link_wrapper_class}>
        <ul id='link_menu'>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Navigation;