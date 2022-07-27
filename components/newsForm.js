import Image from "next/image";

const img = "/img/image11.png";

const NewsForm = () => {
    return(
        <div className="main_news">
            {/* <Image src={img} alt="img" width={584} height={322}/> */}
            <div className="news_category">
                <button className="categoryBtn">Общество</button>
                <span className="publishTime">09:30, 10 Июля 2022</span>
            </div>
            <h2 className="mainTitle">Елена Рыбакина творит историю на Уимблдоне. Финал, которого не ждали</h2>
            <h5 className="subtitle">9 июля на Уимблдоне титул в женском одиночном разряде разыграют казахстанка Елена Рыбакина и Онс Жабёр из Туниса...</h5>
            <a className="readMore">Подробнее</a>
        </div>
    )
}

export default NewsForm;