import styles from '../styles/archivePage.module.scss';
import Footer from './footer';
import { NewsForm2 } from './newsForm';

const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

const YearsList = () => {
  return (
    <div className={styles.yearsList}>
      {years.map((year, index) => (
        <button className={styles.button} key={index}>
          {year}
        </button>
      ))}
    </div>
  );
};

const NewsLinkBlock = () => {
  const NewsLinkForm = () => {
    return (
      <div className={styles.column}>
        <div className={styles.newsLink}>
          <NewsForm2 />
        </div>
        <div className={styles.newsLink}>
          <NewsForm2 />
        </div>
        <div className={styles.newsLink}>
          <NewsForm2 />
        </div>
        <div className={styles.newsLink}>
          <NewsForm2 />
        </div>
      </div>
    );
  };
  return (
    <section>
      <NewsLinkForm />
      <NewsLinkForm />
      <NewsLinkForm />
      <NewsLinkForm />
    </section>
  );
};

const ArchivePage = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.yearsBlock}>
          <h1>
            Архив за <span>8 июня 2022</span>
          </h1>
          <YearsList />
        </div>
        <div>calendars</div>
        <div className={styles.newsLinkBLock}>
          <NewsLinkBlock />
          <div className={styles.banner}>Баннер</div>
        </div>
      </div>
      <Footer styles="true" />
    </section>
  );
};

export default ArchivePage;
