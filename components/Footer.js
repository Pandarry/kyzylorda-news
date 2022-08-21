import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import Image from 'next/image';
import IG from '../public/icons/igfooter.svg';
import FB from '../public/icons/fbfooter.svg';
import YT from '../public/icons/Vector.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex__container">
        <div className={`${styles.footerColumn} ${styles.copyrights}`}>
          <h3>KYZYLORDA NEWS</h3>
          <div className={styles.rights}>
            <span>Ⓒ 2011-2022. Информационное агентство «KYZYLORDA-NEWS.KZ» </span>
            <p>
              Все права на информационные материалы, размещенные на сайте «Kyzylorda-news.kz»,
              охраняются в соответствии с законодательством Республики Казахстан, в том числе об
              авторском и смежных правах.
            </p>
            <p>
              Воспроизведение материалов целиком или частично возможно только при обязательном
              указании авторов и ссылки на сайт. Все права принадлежат ТОО «Сыр медиа».
            </p>
            <p>18+</p>
          </div>
        </div>
        <div className={`${styles.footerColumn} ${styles.contacts}`}>
          <h3>Контакты:</h3>
          <a>kyznews@mail.ru</a>
          <p>40-11-10 (10-28) (главный редактор)</p>
          <p>40-11-10 (10-29) (корреспонденты)</p>
          <h3>Наш адрес:</h3>
          <p>120000, город Кызылорда, Улица Султан Бейбарыс, 4 А, 3 этаж.</p>
        </div>
        <div className={`${styles.footerColumn} ${styles.aboutUs}`}>
          <h3>О нас:</h3>
          <ul>
            <li>
              <a>Об агентстве</a>
            </li>
            <li>
              <a>Руководство</a>
            </li>
            <li>
              <a>Редакция</a>
            </li>
            <li>
              <Link href="/contacts">
                <a>Контакты</a>
              </Link>
            </li>
            <li>
              <a>Реклама</a>
            </li>
            <li>
              <a>Правила использования материалов</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerColumn} ${styles.social}`}>
          <h3>Мы в соцсетях:</h3>
          <ul className={styles.icons}>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image src={IG} alt="instagram icon" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="https://www.facebbok.com/" target="_blank">
                <Image src={FB} alt="facebook icon" width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <Image src={YT} alt="youtube icon" width={20} height={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
