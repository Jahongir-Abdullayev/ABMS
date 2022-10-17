import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import styles from './style.module.scss'
import img from "../../../../public/images/aboutUs.gif"
import 'animate.css'


export function About() {
  const { t } = useTranslation('common')
  return (
    <div id="about" style={{ background: "#F1EFEF" }}>
      <Container>
        <div className={styles.about}>
          <div className={` ${styles.title}`}>{t("about")}</div>
          <div className={`${styles.aboutBlock}`}>
          <div className={`animate__animated animate__fadeInLeft ${styles.text} `}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className={`animate__animated animate__fadeInRight ${styles.image}`}>
            <Image src={img} alt='img' width={300} height={300} />
          </div>
          </div>
         
        </div>
      </Container>
    </div>
  );
}
