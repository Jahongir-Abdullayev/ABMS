import Image from "next/image";
import image from '../../../../public/images/aboutUsWallpaper.png'
import coworking from '../../../../public/images/cspace.png'

import styles from './aboutUs.style.module.scss'
import useTranslation from "next-translate/useTranslation";
import { Container } from "@mui/material";


export function OwnFactory() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div
        id="about"
        style={{ background: "#D9D9D9", paddingTop: "80px", marginTop: "-4px" }}
      >
        <Container>
          <div className={styles.about}>
            <div className={`${styles.aboutBlock}`}>
              <div className={` ${styles.text} `}>
                <div className="header">{t("ownFactory")}</div>

                <div className={styles.contentText}>
                  <div> {t("ownFactoryText")} </div>
                </div>
              </div>
              <div className={` ${styles.image}`}>
                <Image src={coworking} alt="img" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}