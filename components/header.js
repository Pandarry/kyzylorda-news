import styles from '../styles/header.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import IG from '../public/icons/ig.svg';
import FB from '../public/icons/facebook.svg';
import YT from '../public/icons/youtube.svg';
import whatsapp from '../public/icons/whatsapp.svg';
import Menu from './menu';

const Header = () => {
  const BurgerBtn = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
      <div className={styles.burgerBtn}>
        <button onClick={() => setMenuActive(!menuActive)}>
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2129 1.13173C20.7033 1.40999 21.0011 1.9925 21.0011 2.67317C21.0011 3.3517 20.7237 3.89829 20.226 4.20054L19.9431 4.37233L10.5047 4.37233L1.06623 4.37232L0.783358 4.20054C0.285591 3.89829 0.00819228 3.3517 0.00819222 2.67317C0.00819215 1.97365 0.288981 1.42645 0.798668 1.1328L1.07208 0.975341L10.5047 0.975341L19.9372 0.975341L20.2129 1.13173ZM26.9642 11.2309C27.3896 11.3895 27.8244 11.8913 27.9385 12.3555C28.0205 12.689 28.0205 13.1139 27.9385 13.4474C27.8571 13.7785 27.51 14.2624 27.2169 14.4535L26.9912 14.6006L14.0043 14.6006L1.0174 14.6006L0.791671 14.4535C-0.0383956 13.9124 -0.251655 12.6284 0.350171 11.7952C0.468831 11.631 0.667489 11.4304 0.791671 11.3494L1.0174 11.2023L13.9223 11.1911C21.0199 11.1849 26.8888 11.2028 26.9642 11.2309ZM14.4847 21.5143C14.7293 21.6098 15.1315 22.0538 15.2763 22.3882C15.443 22.7731 15.4429 23.4865 15.2761 23.8716C15.1192 24.2339 14.8519 24.5535 14.5796 24.7042C14.3705 24.8199 14.0327 24.826 7.7159 24.8267L1.07208 24.8275L0.79867 24.6701C-0.25909 24.0607 -0.268167 22.2408 0.78336 21.6023L1.06623 21.4305L7.68561 21.4373C12.1538 21.4419 14.3634 21.4669 14.4847 21.5143Z"
              fill="#0078D4"
            />
          </svg>

          <Menu active={menuActive} setActive={setMenuActive} />
        </button>
      </div>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className="flex__container">
            <div className="flex__container-items">
              <BurgerBtn />
              <span className={styles.logo}>KYZYLORDA-NEWS.KZ</span>
            </div>
            <div className="flex__container-items">
              <div className={styles.space}>
                <a>В Казахстане</a>
              </div>
              <div>
                <a>В мире</a>
              </div>
            </div>
            <div className="flex__container-items">
              <div className={styles.borderBox}>
                <p>USD: 470.4</p>
                <p>EUR: 490.7</p>
                <p>RUB: 7.8</p>
              </div>
              <div className={styles.borderBox}>
                <div className={styles.borderBoxContent}>
                  <div className={styles.weather}>
                    <button>
                      <svg
                        className={styles.weatherSvg}
                        viewBox="0 0 25 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.50694 2.39333L3.23611 2.13333C2.96528 1.87333 2.52778 1.88 2.26389 2.13333L2.25694 2.14C1.98611 2.4 1.98611 2.82 2.25694 3.07333L2.52778 3.33333C2.79861 3.59333 3.22917 3.59333 3.5 3.33333L3.50694 3.32667C3.77778 3.07333 3.77778 2.64667 3.50694 2.39333Z"
                          fill="#C4C9D2"
                        />
                        <path
                          d="M1.39583 6.63333H0.6875C0.305556 6.63333 0 6.92667 0 7.29333V7.3C0 7.66667 0.305556 7.96 0.6875 7.96H1.38889C1.77778 7.96667 2.08333 7.67333 2.08333 7.30667V7.3C2.08333 6.92667 1.77778 6.63333 1.39583 6.63333Z"
                          fill="#C4C9D2"
                        />
                        <path
                          d="M7.64583 0H7.63889C7.25 0 6.94444 0.293333 6.94444 0.66V1.3C6.94444 1.66667 7.25 1.96 7.63194 1.96H7.63889C8.02778 1.96667 8.33333 1.67333 8.33333 1.30667V0.66C8.33333 0.293333 8.02778 0 7.64583 0Z"
                          fill="#C4C9D2"
                        />
                        <path
                          d="M13.0208 2.14C12.75 1.88 12.3125 1.88 12.0417 2.13333L11.7708 2.39333C11.5 2.65333 11.5 3.07333 11.7708 3.32667L11.7778 3.33333C12.0486 3.59333 12.4861 3.59333 12.75 3.33333L13.0208 3.07333C13.2917 2.81333 13.2917 2.4 13.0208 2.14Z"
                          fill="#C4C9D2"
                        />
                        <path
                          d="M7.63889 3.3C5.34028 3.3 3.47222 5.09333 3.47222 7.3C3.47222 8.73036 4.25711 9.98706 5.43539 10.6942C5.9992 9.12627 7.55009 8 9.375 8C9.44682 8 9.51821 8.00175 9.58913 8.00519C9.88995 6.98028 10.4924 6.07673 11.2987 5.38847C10.5916 4.14492 9.21665 3.3 7.63889 3.3Z"
                          fill="#C4C9D2"
                        />
                        <path
                          d="M2.25694 12.46C2.52778 12.72 2.96528 12.72 3.23611 12.46L3.50694 12.2C3.77778 11.94 3.77083 11.52 3.50694 11.2667L3.5 11.26C3.22917 11 2.79167 11 2.52083 11.26L2.25 11.52C1.98611 11.7867 1.98611 12.2 2.25694 12.46Z"
                          fill="#C4C9D2"
                        />
                        <path
                          d="M7.29167 19H20.8333C23.1345 19 25 17.2091 25 15C25 13.1238 23.6545 11.5494 21.8393 11.1174C21.8629 10.9147 21.875 10.7087 21.875 10.5C21.875 7.46243 19.31 5 16.1458 5C13.5214 5 11.3091 6.69403 10.6308 9.00519C10.5599 9.00175 10.4885 9 10.4167 9C8.11548 9 6.25 10.7909 6.25 13C6.25 13.0568 6.25123 13.1133 6.25367 13.1695C5.03801 13.5803 4.16667 14.6925 4.16667 16C4.16667 17.6569 5.56578 19 7.29167 19Z"
                          fill="#C4C9D2"
                        />
                      </svg>
                      в Кызылорде 24°
                      <svg
                        className={styles.switchWeatherBtn}
                        viewBox="0 0 9 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.613904 0.542791L0 1.07801L2.24998 3.03901L4.49996 5L6.74998 3.03898L9 1.07795L8.38159 0.538984L7.76317 0L6.13157 1.42198L4.49996 2.84396L2.87271 1.42577C1.97772 0.645774 1.24148 0.00758425 1.23663 0.00758425C1.23177 0.00758425 0.951541 0.248429 0.613904 0.542791Z"
                          fill="#B0B7C1"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerBot}>
          <div className="flex__container">
            <div className="flex__container-items">
              <a className={styles.icons} href="https://www.instagram.com/" target="_blank">
                <Image src={IG} width={20} height={20} alt="instagram" />
              </a>
              <a className={styles.icons} href="https://www.facebook.com/" target="_blank">
                <Image src={FB} width={20} height={20} alt="facebook" />
              </a>
              <a className={styles.icons} href="https://www.youtube.com/" target="_blank">
                <Image src={YT} width={20} height={20} alt="youtube" />
              </a>
            </div>
            <div className={styles.borderBox}>
              <Image src={whatsapp} width={21} height={21} alt="whatsapp" />
              <div className={styles.whatsapp}>
                <p>
                  Присылайте новости по
                  <a href="https://wa.me/77777777777" target="_blank">
                    {' '}
                    WhatsApp +7(777) 777 77 77
                  </a>
                </p>
              </div>
            </div>
            <div className="flex__container-items">
              <div className={styles.switchLangBtn}>
                <button>
                  Рус
                  <svg viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.613904 0.542791L0 1.07801L2.24998 3.03901L4.49996 5L6.74998 3.03898L9 1.07795L8.38159 0.538984L7.76317 0L6.13157 1.42198L4.49996 2.84396L2.87271 1.42577C1.97772 0.645774 1.24148 0.00758425 1.23663 0.00758425C1.23177 0.00758425 0.951541 0.248429 0.613904 0.542791Z"
                      fill="#B0B7C1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
