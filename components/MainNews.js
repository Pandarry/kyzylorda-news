import Image from "next/dist/client/image";
import styles from '../styles/MainNews.module.scss';
import CategoryBtn, { CategoryBtn2 } from './CategoryBtn';
import LatestNewsForm, { LatestNewsBlock } from "./LatestNewsForm";
import NewsForm2 from "./newsForm2";

export default function MainNews () {

    const img = '/img/image3.png';
    const img2 = '/img/image16.png';

    return(
        <section>
            <div className='container'>
                <div className={styles.banner}>Рекламный баннер</div>
                <div className={styles.column_wrapper}>
                    <div className={styles.column1}>
                        <div>
                            <h1>Елена Рыбакина творит историю на Уимблдоне. Финал, которого не ждали</h1>
                            <div className={styles.publishDate}>
                                <div>
                                    <button>Общество</button>
                                    <span>09:30, 10 Июля 2022</span>
                                </div>
                                <div>
                                    <span>Просмотры</span>
                                </div>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={img} alt='img' width={873} height={469}/>
                                <p>Елена Рыбакина / Фото Informburo.kz</p>
                            </div>
                            <div>
                                <h3>9 июля на Уимблдоне титул в женском одиночном разряде разыграют Унс Джабир из Туниса и казахстанка Елена Рыбакина.</h3>
                                <p>Вечером на Центральном корте Всеанглийского лаун-теннисного клуба, где в 135-й раз проходит Уимблдонский турнир, титул в женском одиночном разряде разыграют Унс Джабир из Туниса и наша Елена Рыбакина. Неожиданно? Да. Но и приятно!..</p>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={img2} alt='img' width={873} height={469}/>
                                <p>Финалистки Уимблдонского турнира-2022 в женском одиночном разряде Елена Рыбакина (Казахстан) – Унс Джабир (Тунис) / Коллаж с сайта Федерации тенниса Казахстана</p>
                            </div>
                            <div>
                                <h3>Первопроходец Слава</h3>
                                <p>В 2010 году Ярослава Шведова, нынешний капитан (главный тренер) женской сборной Казахстана, первой из наших теннисистов стала победительницей турнира "Большого шлема". Случилось это как раз на Уимблдоне, где она первенствовала в паре с американкой Ваней Кинг. А через два месяца они выиграли и Открытый чемпионат США.
                                    Доходили до финала "Ролан Гарроса-2021" Александр Бублик и Андрей Голубев: были близки к победе (при счёте 6:4, 5:4 Саша подавал на матч, но провалил подачу) и… всё же уступили хозяевам турнира Николя Маю и Пьеру-Югу Эрберу.
                                    Ну и Анна Данилина с бразильянкой Беатрис Хаддад Майя играли в финале Открытого чемпионата Австралии-2022.
                                    А вот в одиночном разряде лучшим достижением наших теннисистов на "мейджорах" всё это время оставался выход в четвертьфинал: по три раза – Шведова и Юлия Путинцева. Тем приятнее отметить, что на нынешнем Уимблдоне 23-летняя Елена Рыбакина улучшила это достижение, пробившись сначала в полуфинал, а затем и в финал.
                                </p>
                            </div>
                            <div className={styles.imageBox}>
                                <Image src={img2} alt='img' width={873} height={469}/>
                                <p>Перед началом полуфинального матча Уимблдонского турнира-2022 между Татьяной Марией (Германия) и Унс Джабир (Тунис) / Фото Джоэла Марклунда, AELTC</p>
                            </div>
                            <div className={styles.hashtags}>
                                <ul>
                                    <li><a>#хэштег</a></li>
                                    <li><a>#хэштег</a></li>
                                    <li><a>#хэштег</a></li>
                                    <li><a>#хэштег</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2>Читайте также:</h2>
                            <div className={styles.readAlso}>
                                <NewsForm2/>
                                <NewsForm2/>
                                <NewsForm2/>
                            </div>
                            <div className={styles.banner}>Рекламный баннер</div>
                        </div>
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                            4 column
                        </div>
                    </div>
                    <div className={styles.column2}>
                        <LatestNewsBlock/>
                        <div className={styles.banner}>Рекламный баннер</div>
                        <div className={styles.column_content}>
                            <div>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>  
                            </div>
                            <div>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>  
                            </div>
                            <div>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>  
                            </div>
                            <div>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>  
                            </div>
                            <div>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>
                                <LatestNewsForm/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}