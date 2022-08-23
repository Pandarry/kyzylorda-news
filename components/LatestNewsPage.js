import styles from '../styles/latestNewsPage.module.scss';
import { LatestNewsBlock } from './latestNewsForm';
import { NewsForm2 } from './newsForm';

const LatestNewsPage = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.banner}>banner</div>
        <div className={styles.flexContainer}>
          <div className={styles.contentBox}>
            <div className={styles.title}>
              <h1>
                Последние новости <span>политики</span>
              </h1>
            </div>
            <div className={styles.contentBoxItem}>
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
            </div>
            <div className={styles.contentBoxItem}>
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
            </div>
            <div className={styles.contentBoxItem}>
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
            </div>
            <div className={styles.contentBoxItem}>
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
              <NewsForm2 />
            </div>
          </div>
          <div className={`${styles.contentBox} ${styles.column2}`}>
            <LatestNewsBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsPage;
