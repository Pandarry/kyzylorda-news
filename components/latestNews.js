import styles from '../styles/latestNews.module.scss';

const LatestNews = () => {
    return(
        <div className={styles.content}>
            <div className={styles.category}>
                <button className='categoryBtn'>Здравоохранение</button>
                <span className='publishTime'>09:30, 10 Июля 2022</span>
            </div>
            <h3 className='secondaryTitle'>Реформами по голоду: как Минсельхоз собирается обеспечить безопасность</h3>
            <a className='readMore'>Подробнее</a>
        </div>
    )
}

export default LatestNews;