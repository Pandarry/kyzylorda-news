import styles from '../styles/CategoryBtn.module.scss';

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

export const CategoryBtn2 = () => {
  const categoryList2 = [
    { name: 'Последние', id: 1 },
    { name: 'Самые читаемые', id: 2 },
  ];

  return (
    <div>
      {categoryList2.map((category) => (
        <button className={`${styles.button} ${styles.button2}`} key={category.id}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryBtn;
