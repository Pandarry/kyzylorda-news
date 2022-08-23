import styles from '../styles/menu.module.scss';
import Link from 'next/link';

export default function Menu({ active, setActive }) {
  const items = [
    { name: 'Главная', id: 20, href: '/main' },
    { name: 'Общество', id: 1, href: '/' },
    { name: 'Политика', id: 2, href: '/' },
    { name: 'Экономика', id: 3, href: '/' },
    { name: 'Здоровье', id: 4, href: '/' },
    { name: 'Культура', id: 5, href: '/' },
    { name: 'Образование', id: 6, href: '/' },
    { name: 'Интервью', id: 7, href: '/' },
    { name: 'Регионы', id: 8, href: '/' },
    { name: 'В мире', id: 9, href: '/' },
    { name: 'Культура', id: 10, href: '/' },
    { name: 'Спорт', id: 11, href: '/' },
    { name: 'Происшествия', id: 12, href: '/' },
    { name: 'Полезное', id: 13, href: '/' },
    { name: 'Спорт', id: 14, href: '/' },
    { name: 'Духовный мир', id: 15, href: '/' },
    { name: 'COVID-19', id: 16, href: '/' },
    { name: 'Фоторепортаж', id: 17, href: '/' },
    { name: 'Видеорепортаж', id: 18, href: '/' },
    { name: 'Архив', id: 19, href: '/' },
  ];

  return (
    <div className={active ? styles.menu_active : styles.menu} onClick={() => setActive(false)}>
      <div className={styles.blur} />
      <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
