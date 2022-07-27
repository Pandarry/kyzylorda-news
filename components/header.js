import styles from '../styles/Header.module.scss';

const Header = () => {
  return(
    <>
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className="flex__container">
                    <div className="container-items">
                        <button>burger</button>
                        <span className={styles.logo}>KYZYLORDA-NEWS.KZ</span>
                    </div>
                    <div className="container-items">
                        <a>В Казахстане</a>
                        <a>В мире</a>
                    </div>
                    <div className='container-items'>
                        <div className={styles.header__border}>
                            <span className={styles.currency}>USD: 470.4</span>
                            <span className={styles.currency}>EUR: 490.7</span>
                            <span className={styles.currency}>RUB: 7.8</span>
                        </div>
                        <div className={styles.header__border}>
                            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.50694 2.39333L3.23611 2.13333C2.96528 1.87333 2.52778 1.88 2.26389 2.13333L2.25694 2.14C1.98611 2.4 1.98611 2.82 2.25694 3.07333L2.52778 3.33333C2.79861 3.59333 3.22917 3.59333 3.5 3.33333L3.50694 3.32667C3.77778 3.07333 3.77778 2.64667 3.50694 2.39333Z" fill="#C4C9D2"/>
                                <path d="M1.39583 6.63333H0.6875C0.305556 6.63333 0 6.92667 0 7.29333V7.3C0 7.66667 0.305556 7.96 0.6875 7.96H1.38889C1.77778 7.96667 2.08333 7.67333 2.08333 7.30667V7.3C2.08333 6.92667 1.77778 6.63333 1.39583 6.63333Z" fill="#C4C9D2"/>
                                <path d="M7.64583 0H7.63889C7.25 0 6.94444 0.293333 6.94444 0.66V1.3C6.94444 1.66667 7.25 1.96 7.63194 1.96H7.63889C8.02778 1.96667 8.33333 1.67333 8.33333 1.30667V0.66C8.33333 0.293333 8.02778 0 7.64583 0Z" fill="#C4C9D2"/>
                                <path d="M13.0208 2.14C12.75 1.88 12.3125 1.88 12.0417 2.13333L11.7708 2.39333C11.5 2.65333 11.5 3.07333 11.7708 3.32667L11.7778 3.33333C12.0486 3.59333 12.4861 3.59333 12.75 3.33333L13.0208 3.07333C13.2917 2.81333 13.2917 2.4 13.0208 2.14Z" fill="#C4C9D2"/>
                                <path d="M7.63889 3.3C5.34028 3.3 3.47222 5.09333 3.47222 7.3C3.47222 8.73036 4.25711 9.98706 5.43539 10.6942C5.9992 9.12627 7.55009 8 9.375 8C9.44682 8 9.51821 8.00175 9.58913 8.00519C9.88995 6.98028 10.4924 6.07673 11.2987 5.38847C10.5916 4.14492 9.21665 3.3 7.63889 3.3Z" fill="#C4C9D2"/>
                                <path d="M2.25694 12.46C2.52778 12.72 2.96528 12.72 3.23611 12.46L3.50694 12.2C3.77778 11.94 3.77083 11.52 3.50694 11.2667L3.5 11.26C3.22917 11 2.79167 11 2.52083 11.26L2.25 11.52C1.98611 11.7867 1.98611 12.2 2.25694 12.46Z" fill="#C4C9D2"/>
                                <path d="M7.29167 19H20.8333C23.1345 19 25 17.2091 25 15C25 13.1238 23.6545 11.5494 21.8393 11.1174C21.8629 10.9147 21.875 10.7087 21.875 10.5C21.875 7.46243 19.31 5 16.1458 5C13.5214 5 11.3091 6.69403 10.6308 9.00519C10.5599 9.00175 10.4885 9 10.4167 9C8.11548 9 6.25 10.7909 6.25 13C6.25 13.0568 6.25123 13.1133 6.25367 13.1695C5.03801 13.5803 4.16667 14.6925 4.16667 16C4.16667 17.6569 5.56578 19 7.29167 19Z" fill="#C4C9D2"/></svg>
                            <span>в Кызылорде 24°</span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.613904 0.542791L0 1.07801L2.24998 3.03901L4.49996 5L6.74998 3.03898L9 1.07795L8.38159 0.538984L7.76317 0L6.13157 1.42198L4.49996 2.84396L2.87271 1.42577C1.97772 0.645774 1.24148 0.00758425 1.23663 0.00758425C1.23177 0.00758425 0.951541 0.248429 0.613904 0.542791Z" fill="#B0B7C1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bot}>
                <div className='flex__container'>
                    <div className='container-items'>
                        <a className={styles.icons}>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.75 0H6.25C2.79875 0 0 2.83145 0 6.32303V13.9107C0 17.4022 2.79875 20.2337 6.25 20.2337H13.75C17.2013 20.2337 20 17.4022 20 13.9107V6.32303C20 2.83145 17.2013 0 13.75 0ZM18.125 13.9107C18.125 16.3513 16.1625 18.3368 13.75 18.3368H6.25C3.8375 18.3368 1.875 16.3513 1.875 13.9107V6.32303C1.875 3.88234 3.8375 1.89691 6.25 1.89691H13.75C16.1625 1.89691 18.125 3.88234 18.125 6.32303V13.9107Z" fill="#242424"/>
                                    <path d="M10 5.05842C7.23875 5.05842 5 7.32333 5 10.1168C5 12.9104 7.23875 15.1753 10 15.1753C12.7612 15.1753 15 12.9104 15 10.1168C15 7.32333 12.7612 5.05842 10 5.05842ZM10 13.2784C8.2775 13.2784 6.875 11.8595 6.875 10.1168C6.875 8.37295 8.2775 6.95533 10 6.95533C11.7225 6.95533 13.125 8.37295 13.125 10.1168C13.125 11.8595 11.7225 13.2784 10 13.2784Z" fill="#242424"/>
                                    <path d="M15.375 5.35304C15.743 5.35304 16.0413 5.05127 16.0413 4.67901C16.0413 4.30676 15.743 4.00498 15.375 4.00498C15.0071 4.00498 14.7088 4.30676 14.7088 4.67901C14.7088 5.05127 15.0071 5.35304 15.375 5.35304Z" fill="#242424"/>
                            </svg>
                        </a>
                        <a className={styles.icons}>
                            <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.06598 0H7.98364C4.97536 0 2.52798 2.47605 2.52798 5.51947V7.84886H0.678812C0.488398 7.84886 0.333984 8.00507 0.333984 8.19771V10.9886C0.333984 11.1812 0.488398 11.3374 0.678812 11.3374H2.52785V19.8848C2.52785 20.0775 2.68226 20.2337 2.87267 20.2337H5.63129C5.82171 20.2337 5.97612 20.0775 5.97612 19.8848V11.3374H8.71998C8.9104 11.3374 9.06481 11.1812 9.06481 10.9886V8.19771C9.06481 8.00507 8.9104 7.84886 8.71998 7.84886H5.97612V5.51947C5.97612 4.39964 6.87667 3.48857 7.9835 3.48857H9.06584C9.25626 3.48857 9.41067 3.33235 9.41067 3.13971V0.348857C9.41081 0.156218 9.2564 0 9.06598 0Z" fill="#242424"/>
                            </svg>
                        </a>
                        <a className={styles.icons}>
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 5.80005C23.0495 4.35198 22.7365 2.91474 22.09 1.62179C21.6514 1.09127 21.0427 0.733242 20.37 0.61011C17.5875 0.354685 14.7936 0.249995 12 0.296488C9.21667 0.247885 6.43274 0.349197 3.66003 0.599993C3.11185 0.700875 2.60454 0.961005 2.20003 1.34864C1.30003 2.18834 1.20003 3.62493 1.10003 4.83895C0.954939 7.02172 0.954939 9.21189 1.10003 11.3947C1.12896 12.078 1.22952 12.7562 1.40003 13.418C1.5206 13.929 1.76455 14.4017 2.11003 14.7939C2.51729 15.2021 3.03641 15.477 3.60003 15.583C5.75594 15.8523 7.92824 15.9638 10.1 15.9169C13.6 15.9675 16.67 15.9169 20.3 15.6336C20.8775 15.5341 21.4112 15.2588 21.83 14.8445C22.11 14.5612 22.3191 14.2143 22.44 13.8328C22.7977 12.7226 22.9733 11.5607 22.96 10.3931C23 9.82655 23 6.40706 23 5.80005ZM9.74003 11.0001V4.73778L15.66 7.88412C14 8.81487 11.81 9.86702 9.74003 11.0001Z" fill="#242424"/>
                            </svg>
                        </a>
                    </div>
                    <div className={styles.header__border}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 0C4.8357 0 0 4.8357 0 10.8C0 12.8261 0.569107 14.7151 1.53984 16.3354L0.0966797 21.6L5.47383 20.1885C7.04642 21.0826 8.86184 21.6 10.8 21.6C16.7643 21.6 21.6 16.7643 21.6 10.8C21.6 4.8357 16.7643 0 10.8 0ZM7.10332 5.76211C7.27882 5.76211 7.45914 5.76104 7.61484 5.76914C7.80745 5.77364 8.01707 5.78775 8.21777 6.23145C8.45627 6.75885 8.97559 8.08192 9.04219 8.21602C9.10879 8.35012 9.15598 8.50809 9.06328 8.68359C8.97508 8.86359 8.92921 8.97254 8.79961 9.13184C8.66551 9.28664 8.51857 9.4789 8.39707 9.5959C8.26297 9.73 8.1245 9.87704 8.2793 10.1443C8.4341 10.4116 8.97171 11.2879 9.76641 11.9953C10.7879 12.9079 11.6498 13.1884 11.918 13.3225C12.1862 13.4566 12.3415 13.4357 12.4963 13.2557C12.6556 13.0802 13.1653 12.478 13.3453 12.2098C13.5208 11.9416 13.7 11.988 13.943 12.0762C14.1896 12.1644 15.5047 12.8122 15.7729 12.9463C16.0411 13.0804 16.2169 13.1468 16.2844 13.2557C16.3537 13.3682 16.3537 13.9037 16.1314 14.5283C15.9091 15.152 14.8175 15.7552 14.3279 15.7975C13.8338 15.8434 13.3727 16.0196 11.1164 15.1313C8.39481 14.0594 6.67844 11.2718 6.54434 11.0918C6.41024 10.9163 5.45449 9.64252 5.45449 8.32852C5.45449 7.01002 6.14579 6.36429 6.38789 6.09609C6.63449 5.82789 6.92332 5.76211 7.10332 5.76211Z" fill="#242424"/>
                        </svg>
                        <span>Присылайте новости по <a>WhatsApp +7(777) 777 77 77</a></span>
                    </div>
                    <div className='container-items'>
                        <button>Рус</button>
                        <svg width="5" height="9" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.613904 0.542791L0 1.07801L2.24998 3.03901L4.49996 5L6.74998 3.03898L9 1.07795L8.38159 0.538984L7.76317 0L6.13157 1.42198L4.49996 2.84396L2.87271 1.42577C1.97772 0.645774 1.24148 0.00758425 1.23663 0.00758425C1.23177 0.00758425 0.951541 0.248429 0.613904 0.542791Z" fill="#B0B7C1"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;