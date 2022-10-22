import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import styles from './style.module.scss'
import img from "../../../../public/images/aboutUs.gif"
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
              <Image src={img} alt="img" width={300} height={300} />
            </motion.div>
          </div>
        </div>
       
      </Container>
    </div>
  );
}
