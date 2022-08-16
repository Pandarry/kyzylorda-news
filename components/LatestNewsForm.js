import styles from '../styles/LatestNewsForm.module.scss';
import NEWS from '../pages/data';
import { CategoryBtn2 } from './CategoryBtn';

const LatestNewsForm = ({children}) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.category}>
                    <button>{NEWS[1].category}</button>
                    <span>09:30, 10 Июля 2022</span>
                </div>
                <h3>{NEWS[1].title}</h3>
                <a>Подробнее</a>
            </div>
        </div>
    )
}

export const LatestNewsBlock = () => {
    return(
        <div className={styles.news_block}>
            <div className={styles.category_block}>
                <CategoryBtn2/>
            </div>
            <LatestNewsForm/>
            <LatestNewsForm/>
            <LatestNewsForm/>
            <LatestNewsForm/>
            <LatestNewsForm/>
            <LatestNewsForm/>
        <div className={styles.allNewsBtn}>
            <a>Все новости</a>
        </div>
    </div>
    )
}

export default LatestNewsForm;
