import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';
import styles from './style.module.scss'
import img from "../../../../public/images/about_us.png"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export function Network() {
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
        delay: 0.8,
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
        delay: 0.8,
        staggerChildren: 0.4,
      },
    }, 
  }


  return (
    <div id="about" style={{ background: "#D9D9D9", paddingTop: '80px' }}>
      <Container>
        <div className={styles.about}>
         
        
          <div className={`${styles.aboutBlock}`}>
            
            <motion.div
              variants={image}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              className={` ${styles.text} `}
            >
               <div className='header'>{t("ownChainStore")}</div>
               <div className={styles.contentText}>  {t("networkText")}</div>
          
            </motion.div>
            <motion.div
              variants={text}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              ref={ref}
              className={` ${styles.image}`}
            >
              <Image src={img} alt="img" width={400} height={380} />
            </motion.div>
          </div>
        </div>
       
      </Container>
    </div>
  );
}
