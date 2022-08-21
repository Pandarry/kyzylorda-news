import styles from '../styles/Multimedia.module.scss';
import { NewsForm2 } from './NewsForm';

const Multimedia = () => {
  const MultimediaForm = (props) => {
    return (
      <div className={styles.contentBox}>
        <div className={styles.contentBoxElem}>
          <h2>{props.name}</h2>
          <a>Смотреть все</a>
        </div>
        <div className={styles.contentBoxElem}>
          <NewsForm2 styles="true" />
          <NewsForm2 styles="true" />
          <NewsForm2 styles="true" />
        </div>
        <div className={styles.slider}>
          <p>Slider</p>
        </div>
      </div>
    );
  };

  return (
    <section className={`${styles.container} ${styles.white}`}>
      <div className={styles.flexContainer}>
        <MultimediaForm name="Фоторепортажи" />
        <MultimediaForm name="Видеорепортажи" />
      </div>
    </section>
  );
};

export default Multimedia;
