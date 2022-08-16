import Image from "next/dist/client/image";
import styles from '../styles/NewsForm.module.scss';
import NEWS from "../pages/data";

const NewsForm2 = () => {

    const img = '/img/image3.png';

    return(
    <div className={styles.container}>
        <Image src={img} alt='img' width={275} height={182}/>
        <div className={styles.category}>
            <button>{NEWS[1].category}</button>
            <span>09:30, 10 Июля 2022</span>
        </div>
        <h3>{NEWS[1].title}</h3>
        <a>Подробнее</a>
    </div>
    )
}

export default NewsForm2;