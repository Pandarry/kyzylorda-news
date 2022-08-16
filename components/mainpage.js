import styles from '../styles/MainPage.module.scss';
import Link from 'next/link';
import CategoryBtn, { CategoryBtn2 } from './CategoryBtn';
import LatestNewsForm, { LatestNewsBlock } from './LatestNewsForm';
import NewsForm from './NewsForm';
import NewsForm2 from './NewsForm2';
import Image from 'next/dist/client/image';
import PhotoReport from './PhotoReport';
import Footer from './Footer';



const MainPage = () => {

    const img = "/img/image11.png";

    const slider1 = "/icons/sliderright.svg";

    return(
        <>
            <main className={styles.MainPage}>
                <div className='container'>
                    <div className='advBanner1'>Рекламный баннер</div>
                    <div className={styles.content__box}>
                        <div className={`${styles.news__column} ${styles.news__column1}`}>
                            <div className={styles.column__content}>
                                <h2>
                                    <Link href='/MainNews'>Главные новости</Link>
                                </h2>
                                <Image src={img} alt="img" width={584} height={322}/>
                                <NewsForm/>
                            </div>
                            <div className={styles.column__content2}>
                                <div className={styles.spaceBetweenNewsForm}><NewsForm2/></div>
                                <div className={styles.spaceBetweenNewsForm}><NewsForm2/></div>
                            </div>
                        </div>

                        <div className={styles.news__column}>
                            <div>
                                <CategoryBtn2/>
                            </div>
                            <LatestNewsForm/>
                            <LatestNewsForm/>
                            <LatestNewsForm/>
                            <LatestNewsForm/>
                            <LatestNewsForm/>
                            <LatestNewsForm/>
                            <div className={styles.allNewsBtn}>
                                <a>Все новости</a>
                            </div>
                        </div>
                        <div className={styles.news__column}>
                            <div className={styles.our_choice}>
                                <h3>Выбор редакции</h3>
                                <div>
                                    <Image src={slider1} alt='slider' width={29} height={29}/>
                                    <Image src={slider1} alt='slider' width={29} height={29}/>
                                </div>
                            </div>
                            <Image src={img} alt="img" width={416} height={238}/>
                            <NewsForm/>
                        </div>

                    </div>
                    <div className={styles.content__box}>
                        <div className={styles.news__column2}>
                            <div className={styles.news__column2Item}>
                                <div>
                                    <h1>Взгляды и мнения</h1>
                                </div>
                            </div>
                            <div className={styles.news__column2Item}>
                                <div>
                                    <Image src={img} alt="img" width={423} height={220}/>
                                    <NewsForm/>
                                </div>
                                <div>
                                    <LatestNewsForm/>
                                    <LatestNewsForm/>
                                    <LatestNewsForm/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.news__column2}>
                            <div className={styles.news__column2Item}>
                                <div>
                                    <h1>Взгляды и мнения</h1>
                                </div>
                            </div>
                            <div className={styles.news__column2Item}>
                                <div>
                                    <Image src={img} alt="img" width={423} height={220}/>
                                    <NewsForm/>
                                </div>
                                <div>
                                    <LatestNewsForm/>
                                    <LatestNewsForm/>
                                    <LatestNewsForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content__box}>
                        <div className={styles.news__column3}>
                            <div className={styles.news__column3Item}>
                                <div className={styles.categoryList}>
                                    <CategoryBtn/>
                                </div>
                                <div className={styles.categoryList}>
                                    <a>Смотреть все</a>
                                </div>
                            </div>
                            <div className={styles.news__column3Item}>
                                <NewsForm2/>
                                <NewsForm2/>
                                <NewsForm2/>
                                <NewsForm2/>
                            </div>
                        </div>
                        <div className='advBanner3'>Рекламный баннер</div>
                    </div>
                </div>
                
            </main>
            <PhotoReport/>
            <Footer/>
        </>
    )
}

export default MainPage;