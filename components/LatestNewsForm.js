import styles from '../styles/latestNewsForm.module.scss';
import { useState, useEffect } from 'react';
import News from '../pages/data';
import { LatestNewsBtn } from './categoryBtn';

const LatestNewsForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.category}>
          <button>{News[1].category}</button>
          <span>09:30, 10 Июля 2022</span>
        </div>
        <h3>{News[1].title}</h3>
        <a>Подробнее</a>
      </div>
    </div>
  );
};

export const LatestNewsBlock = (props) => {
  const alternativeStyle = props.styles;
  const [latestNews, setLatestNews] = useState([]);
  const numberOfElem = props.numberOfElem;

  function LatestNewsFormAmount() {
    let tempArray = [];
    for (let i = 0; i < numberOfElem; i++) {
      tempArray.push(<LatestNewsForm key={i} />);
    }
    setLatestNews(tempArray);
  }

  useEffect(() => {
    LatestNewsFormAmount();
  }, []);

  return (
    <div className={alternativeStyle ? styles.newsBlock : ''}>
      <div className={styles.categoryBlock}>
        <LatestNewsBtn />
      </div>
      {latestNews}
      <div className={styles.allNewsBtn}>
        <a>Все новости</a>
      </div>
    </div>
  );
};

export default LatestNewsForm;
