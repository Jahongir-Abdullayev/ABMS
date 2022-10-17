import styles from './style.module.scss'
import Link from 'next/link'
import { Container } from '@mui/material'
import WeekendIcon from '@mui/icons-material/Weekend';
import useTranslation from 'next-translate/useTranslation';
import { style } from '@mui/system';


export function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner} id='contact'>
          <div className={styles.box}>
            <Link href="/">
              <a className={styles.logo}>
                <WeekendIcon />
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
                  <Link href="/blog">
                    <a>{t("about")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>{t("catalogs")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>{t("contacts")}</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.contactNumber}>
            <div>Адрес: </div>
            <div className={styles.addressNAme}>{`Toshkent shahar, Chilonzor, Gavxar ko'chasi, 1-uy`}</div>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.addressText}>
            <div className={styles.title}>+99890 777-70-07</div>
            
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
