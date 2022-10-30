import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from './style.module.scss';


export function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner} id='contact'>
          <div className={styles.box}>
            <Link href="/">
              <a className={styles.logo}>
              <div className={styles.logoName}>
                <div>Lumber</div>
                <div>Land</div>
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
            <div className={styles.addressNAme}>{`Toshkent shahar, Yashnobod tumani, Uysozlar ko'chasi, 3`}</div>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressText}>
            <div className={styles.title}>+998 71 205 00 35</div>
            <div className={styles.title}>+998 71 205 02 64</div>
            
          </div>
          <div className={styles.map}>
            <iframe
              src="https://maps.google.com/maps?q=41.256205,69.208997&z=16&output=embed"
              width="100%"
              height="200"
              frameBorder="0"
              title="map"
              style={{ border: "transparent" }}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
