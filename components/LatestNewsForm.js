import styles from '../styles/LatestNewsForm.module.scss';
import News from '../pages/data';
import { CategoryBtn2 } from './CategoryBtn';

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
  //   const numberOfElem = props.numberOfElem;

  //   function LatestNewsFormAmount() {
  //     for (let i = 0; i < numberOfElem; i++) {
  //       return <LatestNewsForm />;
  //     }
  //   }

  return (
    <div className={alternativeStyle ? styles.newsBlock : ''}>
      <div className={styles.categoryBlock}>
        <CategoryBtn2 />
      </div>
      {/* {LatestNewsFormAmount} */}
      <LatestNewsForm />
      <LatestNewsForm />
      <LatestNewsForm />
      <LatestNewsForm />
      <LatestNewsForm />
      <LatestNewsForm />
      <div className={styles.allNewsBtn}>
        <a>Все новости</a>
      </div>
    </div>
  );
};

export default LatestNewsForm;
