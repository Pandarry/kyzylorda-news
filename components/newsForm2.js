import Image from "next/dist/client/image";

const NewsForm2 = () => {

    const img = '/img/image3.png';

    return(
    <div className="content_box">
        <Image src={img} alt='img' width={275} height={182}/>
        <div className="news_category">
            <button className="categoryBtn">Общество</button>
            <span className="publishTime">09:30, 10 Июля 2022</span>
        </div>
        <h3 className="secondaryTitle">Токаев выразил соболезнования в связи со смертью экс-премьера Японии</h3>
        <a className="readMore">Подробнее</a>
    </div>
    )
}

export default NewsForm2;