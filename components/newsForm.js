import Image from 'next/image';
import styles from '../styles/newsForm.module.scss';
import News from '../pages/data';

const NewsForm = () => {
  const img = '/img/image11.png';
  return (
    <div className={styles.container}>
      <Image
        layout="responsive"
        objectFit="cover"
        src={img}
        alt="img"
        width={584}
        height={322}
        className={styles.imgStyle}
      />
      <div className={styles.category}>
        <button>{News[2].category}</button>
        <span>09:30, 10 Июля 2022</span>
      </div>
      <div className={styles.articleText}>
        <h2>{News[2].title}</h2>
        <p>{News[2].subtitle}</p>
      </div>
      <a>Подробнее</a>
    </div>
  );
};

export function NewsForm2(props) {
  const alternativeStyle = props.styles;
  const img = '/img/image3.png';

  return (
    <div className={alternativeStyle ? styles.withStyle : styles.container}>
      <div className={styles.imgBox}>
        <Image
          layout="responsive"
          objectFit="cover"
          src={img}
          alt="img"
          width={275}
          height={182}
          className={styles.imgStyle}
        />
      </div>
      <div className={styles.category}>
        <button>{News[1].category}</button>
        <span>09:30, 10 Июля 2022</span>
      </div>
      <h3>{News[1].title}</h3>
      <a>Подробнее</a>
    </div>
  );
}

export default NewsForm;
