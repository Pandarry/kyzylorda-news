import styles from '../styles/categoryBtn.module.scss';

const CategoryBtn = () => {
  const categoryList = [
    { name: 'Общество', id: 1 },
    { name: 'Политика', id: 2 },
    { name: 'Экономика', id: 3 },
    { name: 'Культура', id: 4 },
    { name: 'Спорт', id: 5 },
    { name: 'Проиcшествия', id: 6 },
  ];

  return (
    <div>
      {categoryList.map((category) => (
        <button className={styles.button} key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export const LatestNewsBtn = () => {
  const latestNewsBtnList = [
    { name: 'Последние', id: 1 },
    { name: 'Самые читаемые', id: 2 },
  ];

  return (
    <div>
      {latestNewsBtnList.map((category) => (
        <button className={`${styles.button} ${styles.anotherBtn}`} key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryBtn;
