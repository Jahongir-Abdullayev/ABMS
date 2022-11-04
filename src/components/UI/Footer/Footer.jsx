import { Phone } from '@mui/icons-material';
import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from './style.module.scss';
import blackLogo from '../../../../public/images/black-logo1.png'
import Image from 'next/image';


export function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner} id="contact">
          <div className={styles.box}>
            <Link href="/">
              <a className={styles.logo}>
                <div className={styles.logoName}>
                <Image src={blackLogo} alt="logo" width={100} height={50} />
                </div>
              </a>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>{t("home")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a>{t("about")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="#catalog">
                    <a>{t("catalogs")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a>{t("contacts")}</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.contactNumber}>
            <div>Адрес: </div>
            <div
              className={styles.addressNAme}
            >{`Toshkent shahar, Yashnobod tumani, Uysozlar ko'chasi, 3`}</div>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressText}>
            <div className={styles.phoneIcon}>
              {" "}
              <Phone />{" "}
            </div>
            <div className={styles.title}>+998 71 205 00 35</div>
            <div className={styles.title}>+998 71 205 02 64</div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2140.206362171998!2d69.33344954577038!3d41.261318325113876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9d2a26580415b63!2zNDHCsDE1JzQyLjEiTiA2OcKwMjAnMDIuMCJF!5e0!3m2!1sru!2s!4v1667410381273!5m2!1sru!2s"
              width="100%"
              height="200"
              frameBorder="0"
              title="map"
              style={{ border: "transparent" }}
            />
          </div>
        </div>
      </Container>
      <div className={styles.underFooter}>
        © Lumber Land 2022 All rights reserved
      </div>
    </footer>
  );
}


