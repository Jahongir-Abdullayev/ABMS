import Image from "next/image";
import image from '../../../../public/images/aboutUsWallpaper.png'
import coworking from '../../../../public/images/cspace.png'

import styles from './aboutUs.style.module.scss'
import useTranslation from "next-translate/useTranslation";
import { Container } from "@mui/material";

const desc = [
    {
        text : 'aboutUsText1'
    },
    {
        text : 'aboutUsText2'
    }, 
    {
        text : 'aboutUsText3'
    },
    {
        text : 'aboutUsText4'
    },
    {
        text : 'aboutUsText5'
    },
    {
        text : 'aboutUsText6'
    },
]


export function AboutUsBlock() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div>
        <Image src={image} alt="img" />
      </div>
      <div
        id="about"
        style={{ background: "#D9D9D9", paddingTop: "80px", marginTop: "-4px" }}
      >
        <Container>
          <div className={styles.about}>
            <div className={`${styles.aboutBlock}`}>
              <div className={` ${styles.text} `}>
                <div className="header">{t("aboutUs")}</div>
                {desc?.map((item) => (
                  <div className={styles.contentText}>
                    {" "}
                    <div className={styles.dot} />{" "}
                    <div style={{ width: "95%" }}> {t(`${item?.text}`)} </div>{" "}
                  </div>
                ))}
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