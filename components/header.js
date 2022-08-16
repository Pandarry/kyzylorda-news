import styles from '../styles/Header.module.scss';
import BurgerBtn from './BurgerBtn';
import Image from 'next/image';
import IG from '../public/icons/ig.svg';
import FB from '../public/icons/facebook.svg';
import YT from '../public/icons/youtube.svg';
import weather from '../public/icons/weather.svg';
import arrow from '../public/icons/arrow.svg';
import whatsapp from '../public/icons/whatsapp.svg';


const Header = () => {
  return(
    <>
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className="flex__container">
                    <div className="flex__container-items">
                        <BurgerBtn/>
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
                    <div className='flex__container-items'>
                        <div className={styles.header__borderBox}>
                            <p>USD: 470.4</p>
                            <p>EUR: 490.7</p>
                            <p>RUB: 7.8</p>
                        </div>
                        <div className={styles.header__borderBox}>
                            <div className={styles.borderBox_content}>
                                <div className={styles.weather}>
                                    <Image src={weather} width={25} height={19} alt='weather'/>
                                    <button>
                                    в Кызылорде 24°
                                        <Image src={arrow} width={9} height={5} alt='arrow'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bot}>
                <div className='flex__container'>
                    <div className='flex__container-items'>
                        <a className={styles.icons}>
                            <Image src={IG} width={20} height={20} alt='instagram'/>
                        </a>
                        <a className={styles.icons}>
                            <Image src={FB} width={20} height={20} alt='facebook'/>
                        </a>
                        <a className={styles.icons}>
                            <Image src={YT} width={20} height={20} alt='youtube'/>
                        </a>
                    </div>
                    <div className={styles.header__borderBox}>
                        <Image src={whatsapp} width={21} height={21} alt='whatsapp'/>
                        <div className={styles.whatsapp}>
                            <p>Присылайте новости по 
                                <a 
                                    href='https://wa.me/77777777777'
                                    target='_blank'> WhatsApp +7(777) 777 77 77
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className='flex__container-items'>
                        <div className={styles.switchLangBtn}>
                            <button>Рус
                                <Image src={arrow} width={9} height={5} alt='arrow'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;