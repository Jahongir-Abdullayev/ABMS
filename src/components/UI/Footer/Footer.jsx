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
          <div className={styles.address}>
          <div className={styles.addressText}>
            <div className={styles.phoneIcon}>
              
              <Phone />
            </div>
            <div className={styles.title}>+998 71 205 00 35</div>
           
          </div>
          
        </div>
        </div>
       
      </Container>
      {/* <div className={styles.underFooter}>
        © Lumber Land 2022 All rights reserved
      </div> */}
    </footer>
  );
}


