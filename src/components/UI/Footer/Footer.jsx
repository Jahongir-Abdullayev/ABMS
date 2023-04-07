import { Phone } from '@mui/icons-material';
import { Container } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import styles from './style.module.scss';
import blackLogo from '../../../../public/images/black-logo1.png'
import Image from 'next/image';
import logo from '../../../../public/images/logo.png'


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
                <Image src={logo} alt="logo" width={102} height={36} />
                </div>
              </a>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>{t("Main")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a>{t("About us")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="#catalog">
                    <a>{t("Partners")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a>{t("Contacts")}</a>
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
            <div className={styles.title}>+998 12 345 67 89</div>
           
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


