import styles from '../styles/LatestNewsPage.module.scss';
import { LatestNewsBlock } from './LatestNewsForm';
import NewsForm2 from './NewsForm2';

const LatestNewsPage = () => {
    return(
        <section>
            <div className='container'>
                <div className={styles.banner}>banner</div>
                <div className={styles.column_wrapper}>
                    <div className={styles.column1}>
                        <div className={styles.title}>
                            <h1>Последние новости <span>политики</span></h1>
                        </div>
                        <div className={styles.column_content}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                        <div className={styles.column_content}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                        <div className={styles.column_content}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                        <div className={styles.column_content}>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                            <NewsForm2/>
                        </div>
                    </div>
                    <div className={styles.column2}>
                        <LatestNewsBlock/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default LatestNewsPage;