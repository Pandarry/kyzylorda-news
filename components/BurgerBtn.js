import Image from "next/dist/client/image";
import styles from '../styles/BurgerBtn.module.scss';
import img from '../public/icons/burgerBtn.svg';
import { useState } from "react";
import Link from "next/link";


const Menu = (active, setActive) => {

    const items = [
        {name: 'Главная', id: 20, href:'/',},
        {name: 'Общество', id: 1, href:'/',},
        {name: 'Политика', id: 2, href:'/',},
        {name: 'Экономика', id: 3, href:'/',},
        {name: 'Здоровье', id: 4, href:'/',},
        {name: 'Культура', id: 5, href:'/',},
        {name: 'Образование', id: 6, href:'/',},
        {name: 'Интервью', id: 7, href:'/',},
        {name: 'Регионы', id: 8, href:'/',},
        {name: 'В мире', id: 9, href:'/',},
        {name: 'Культура', id: 10, href:'/',},
        {name: 'Спорт', id: 11, href:'/',},
        {name: 'Проишествия', id: 12, href:'/',},
        {name: 'Полезное', id: 13, href:'/',},
        {name: 'Спорт', id: 14, href:'/',},
        {name: 'Духовный мир', id: 15, href:'/',},
        {name: 'COVID-19', id: 16, href:'/',},
        {name: 'Фоторепортаж', id: 17, href:'/',},
        {name: 'Видеорепортаж', id: 18, href:'/',},
        {name: 'Архив', id: 19, href:'/',},
    ]

    return(
        <div className={active ? styles.menu_active : styles.menu}>
            <div className={styles.menuContent}>
                <ul>
                    {items.map(item =>
                        <li>
                            <Link href={item.href}>
                                <a>{item.name}</a>
                            </Link>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}


const BurgerBtn = () => {

    const [menuActive, setMenuActive] = useState (false);

    return(
        <div className={styles.burgerBtn}>
            <button onClick={() => setMenuActive(!menuActive)}>
                <Image src={img} width={28} height={24}/>
                {/* <Menu active={menuActive} setActive={setMenuActive}/> */}
            </button>
        </div>        
    )
}

export default BurgerBtn;