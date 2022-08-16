import NewsForm2 from "./NewsForm2";
import styles from '../styles/ArchivePage.module.scss';
import Footer from "./Footer";

const ArchivePage = () => {
    return(
        <section>
            <div className="container">
                <div>
                    <div>
                        <h1>Архив за <span></span></h1>
                    </div>
                    <div>
                        <ul>
                            <li><a>2022</a></li>
                            <li><a>2021</a></li>
                            <li><a>2020</a></li>
                            <li><a>2019</a></li>
                            <li><a>2018</a></li>
                            <li><a>2017</a></li>
                            <li><a>2016</a></li>
                            <li><a>2015</a></li>
                        </ul>
                    </div>
                </div>
                <div>calendars</div>
                <div className={styles.flex_container}>
                    <div>
                        <div className={styles.column}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                        <div className={styles.column}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                        <div className={styles.column}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                        <div className={styles.column}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                    </div>
                    <div className={styles.banner}>Баннер</div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default ArchivePage;