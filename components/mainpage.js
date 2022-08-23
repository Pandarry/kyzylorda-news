import styles from '../styles/mainPage.module.scss';
import Link from 'next/link';
import CategoryBtn, { CategoryBtn2 } from './categoryBtn';
import LatestNewsForm, { LatestNewsBlock } from './latestNewsForm';
import NewsForm, { NewsForm2 } from './newsForm';
import Footer from './footer';
import Multimedia from './multiMedia';

const MainPage = () => {
  const NewsColumn = (props) => {
    return (
      <div className={styles.newsColumn}>
        <div className={styles.newsColumnItem}>
          <div>
            <h1>{props.name}</h1>
          </div>
        </div>
        <div className={styles.newsColumnItem}>
          <div className={styles.item}>
            <NewsForm />
          </div>
          <div className={styles.item}>
            <LatestNewsForm />
            <LatestNewsForm />
            <LatestNewsForm />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className={styles.MainPage}>
        <div className="container">
          <div className="advBanner1">Рекламный баннер</div>
          <div className={styles.contentBox}>
            <div className={`${styles.contentBoxElem} ${styles.mainNewsColumn}`}>
              <div className={styles.contentBoxElemContent}>
                <h2>
                  <Link href="/MainNews">Главные новости</Link>
                </h2>
                <NewsForm />
              </div>
              <div className={styles.columnContent}>
                <div className={styles.columnContentElem}>
                  <NewsForm2 />
                </div>
                <div className={styles.columnContentElem}>
                  <NewsForm2 />
                </div>
              </div>
            </div>

            <div className={`${styles.contentBoxElem} ${styles.latestNewsColumn}`}>
              <LatestNewsBlock />
            </div>
            <div className={`${styles.contentBoxElem} ${styles.thirdColumn}`}>
              <div className={styles.thirdColumnContent}>
                <div className={styles.ourChoice}>
                  <h3>Выбор редакции</h3>
                  <div>slider</div>
                </div>
                <NewsForm />
              </div>
              <div className="advBanner2">Баннер</div>
            </div>
          </div>
          <div className={styles.contentBox}>
            <NewsColumn name="Взгляды и мнения" />
            <NewsColumn name="Аналитика" />
          </div>
          <div className={styles.contentBox}>
            <div className={styles.categoryNews}>
              <div className={styles.categoryNewsItem}>
                <div className={styles.categoryList}>
                  <CategoryBtn />
                </div>
                <div className={styles.categoryList}>
                  <button className={styles.readMoreBtn}>
                    Смотреть все
                    <svg viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M-7.19052e-08 12.355L5.34333 7L-5.40054e-07 1.645L1.645 -7.19052e-08L8.645 7L1.645 14L-7.19052e-08 12.355Z"
                        fill="#0078D4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.categoryNewsItem}>
                <div className={styles.categoryNewsItemWidth}>
                  <NewsForm2 />
                </div>
                <div className={styles.categoryNewsItemWidth}>
                  <NewsForm2 />
                </div>
                <div className={styles.categoryNewsItemWidth}>
                  <NewsForm2 />
                </div>
                <div className={styles.categoryNewsItemWidth}>
                  <NewsForm2 />
                </div>
              </div>
            </div>
            <div className="advBanner3">Рекламный баннер</div>
          </div>
        </div>
      </main>
      <Multimedia />
      <Footer />
    </>
  );
};

export default MainPage;
