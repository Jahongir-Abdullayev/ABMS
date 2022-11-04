import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import styles from './style.module.scss'
import img from "../../../../public/images/about_us.jpg"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export function About() {
  const { t } = useTranslation('common')
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const text = {
    hidden: {
      opacity: 0,
      x: '-150px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .3,
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
    
  }

  const image = {
    hidden: {
      opacity: 0,
      x: '150px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .3,
        delay: 0.6,
        staggerChildren: 0.4,
      },
    }, 
  }


  return (
    <div id="about" style={{ background: "#F1EFEF" }}>
      <Container>
        <div className={styles.about}>
          <div className={` ${styles.title}`}>{t("about")}</div>
          <div className={`${styles.aboutBlock}`}>
            <motion.div
              variants={text}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              className={` ${styles.text} `}
            >
            Наша компания была основана в 2019 году при партнерстве с ведущими европейскими компаниями, проявившая себя благодаря своему качеству. Он уже стал одним из ведущих производителей ЛДСП и МДФ в Узбекистане. Производство МДФ схоже с технологией производства ДСП и ДВП, хотя по своей прочности этот материал превышает прочность древесно-стружечных плит почти в 2 раза. Также МДФ является экологически чистым материалом, не причиняющим вреда здоровью человека. Чтобы понять, как удалось достичь таких замечательных показателей позвоните нам, мы будем рады поделиться своим опытом!
            </motion.div>
            <motion.div
              variants={image}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              ref={ref}
              className={` ${styles.image}`}
            >
              <Image src={img} alt="img" width={400} height={300} />
            </motion.div>
          </div>
        </div>
       
      </Container>
    </div>
  );
}
