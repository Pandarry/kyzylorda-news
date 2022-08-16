import Image from "next/image";
import styles from '../styles/NewsForm.module.scss';
import NEWS from "../pages/data";

const img = "/img/image11.png";

const NewsForm = () => {
    return(
        <div className={styles.container}>
            {/* <Image src={img} alt="img" width={584} height={322}/> */}
            <div className={styles.category}>
                <button>{NEWS[2].category}</button>
                <span>09:30, 10 Июля 2022</span>
            </div>
            <h2>{NEWS[2].title}</h2>
            <p>{NEWS[2].subtitle}</p>
            <a>Подробнее</a>
        </div>
    )
}

export default NewsForm;