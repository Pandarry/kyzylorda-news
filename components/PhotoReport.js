import styles from  '../styles/PhotoReport.module.scss';
import NewsForm2 from './NewsForm2';

const PhotoReport = (props) => {
    return(
        <section className={styles.container}>
            <div className={styles.flex__container}>
                <div className={styles.contentBox}>
                    <div className={styles.content__item}>
                        <h2>Фоторепортажи</h2>
                        <a>Смотреть все</a>
                    </div>
                    <div className={styles.content__item}>
                        <NewsForm2 />
                        <NewsForm2/>
                        <NewsForm2/>
                    </div>
                    <div className={styles.slider}>
                        <p>Slider</p>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.content__item}>
                        <h2>Видеорепортажи</h2>
                        <a>Смотреть все</a>
                    </div>
                    <div className={styles.content__item}>
                        <NewsForm2/>
                        <NewsForm2/>
                        <NewsForm2/>
                    </div>
                    <div className={styles.slider}>
                        <p>Slider</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PhotoReport;