import styles from '../styles/MainPage.module.scss';
import AdvBanner from './advBanner';
import ChooseCategoryBtn from './chooseCategoryBtn';
import Header from './header';
import LatestNews from './latestNews';
import NewsForm from './newsForm';
import NewsForm2 from './newsForm2';
import Image from 'next/dist/client/image';



const MainPage = () => {

    const img = "/img/image11.png";

    return(
        <>
            <Header/>
            <main className={styles.MainPage}>
                <div className='container'>
                    <AdvBanner/>
                    <div className={styles.content__box}>
                        <div className={styles.news__column}>
                            <div className={styles.column__content}>
                                <h1>Главные новости</h1>
                                <Image src={img} alt="img" width={584} height={322}/>
                                <NewsForm/>
                            </div>
                            <div className={styles.column__content2}>
                                <NewsForm2/>
                                <NewsForm2/>
                            </div>
                        </div>
                        <div className={styles.news__column}>
                            <div>
                                <ChooseCategoryBtn/>
                                <ChooseCategoryBtn/>
                            </div>
                            <LatestNews/>
                            <LatestNews/>
                            <LatestNews/>
                            <LatestNews/>
                            <div>Все новости</div>
                        </div>
                        <div className={styles.news__column}>
                            <div className={styles.our_choice}>
                                <h3>Выбор редакции</h3>
                            </div>
                            <NewsForm/>
                            <div className={styles.banner_box}><AdvBanner/></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainPage;