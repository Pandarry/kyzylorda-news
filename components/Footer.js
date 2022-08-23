import Link from 'next/link';
import styles from '../styles/footer.module.scss';

const Footer = (props) => {
  const alternativeStyle = props.styles;
  return (
    <footer className={alternativeStyle ? styles.footerGray : styles.footer}>
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
            <span>18+</span>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z"
                    fill="white"
                  />
                  <path
                    d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7612 7.23875 15 10 15C12.7612 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z"
                    fill="white"
                  />
                  <path
                    d="M15.375 5.29122C15.743 5.29122 16.0413 4.99293 16.0413 4.62497C16.0413 4.25702 15.743 3.95873 15.375 3.95873C15.0071 3.95873 14.7088 4.25702 14.7088 4.62497C14.7088 4.99293 15.0071 5.29122 15.375 5.29122Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebbok.com/" target="_blank">
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.06501 0H7.98266C4.97439 0 2.52701 2.44745 2.52701 5.45572V7.75821H0.677835C0.487422 7.75821 0.333008 7.91262 0.333008 8.10303V10.8617C0.333008 11.0521 0.487422 11.2065 0.677835 11.2065H2.52687V19.6552C2.52687 19.8456 2.68128 20 2.8717 20H5.63032C5.82073 20 5.97514 19.8456 5.97514 19.6552V11.2065H8.71901C8.90942 11.2065 9.06383 11.0521 9.06383 10.8617V8.10303C9.06383 7.91262 8.90942 7.75821 8.71901 7.75821H5.97514V5.45572C5.97514 4.34883 6.8757 3.44828 7.98252 3.44828H9.06487C9.25528 3.44828 9.4097 3.29386 9.4097 3.10345V0.344828C9.40983 0.154414 9.25542 0 9.06501 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23 5.70998C23.0494 4.27864 22.7364 2.858 22.09 1.57998C21.6514 1.05558 21.0427 0.701694 20.37 0.579984C17.5875 0.327509 14.7935 0.224028 12 0.269984C9.21664 0.221942 6.4327 0.322084 3.66 0.569984C3.11182 0.669701 2.60451 0.926826 2.2 1.30998C1.3 2.13998 1.2 3.55998 1.1 4.75998C0.954908 6.91755 0.954908 9.08242 1.1 11.24C1.12893 11.9154 1.22949 12.5858 1.4 13.24C1.52057 13.745 1.76452 14.2123 2.11 14.6C2.51726 15.0034 3.03638 15.2752 3.6 15.38C5.75591 15.6461 7.92821 15.7564 10.1 15.71C13.6 15.76 16.67 15.71 20.3 15.43C20.8775 15.3316 21.4112 15.0595 21.83 14.65C22.11 14.3699 22.3191 14.0271 22.44 13.65C22.7976 12.5526 22.9733 11.4041 22.96 10.25C23 9.68998 23 6.30998 23 5.70998ZM9.74 10.85V4.65998L15.66 7.76998C14 8.68998 11.81 9.72998 9.74 10.85Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
