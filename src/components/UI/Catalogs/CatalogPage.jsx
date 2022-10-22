import { Container } from "@mui/material";
import { catalogs } from "constants/catalogs";
import { motion, useAnimation } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageCatalog from "./ImageCatalog";
import styles from './style.module.scss';



const CatalogPage = () => {
  const { t } = useTranslation("common");
  const params = useRouter()

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const icon = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  const text = {
    hidden: {
      opacity: 0,
      x: '100px',
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <div className={styles.catalogPage}>
      <Container>
        <div className={styles.block}>
          <motion.div
           variants={icon}
           initial="hidden"
           animate={controls}
           className="col-md-3 col-6"
           transition={{
             duration: 0.4,
             delay: 0.3,
           }}
           ref={ref}
          >
            <ImageCatalog
              img={catalogs[params.query.id]?.image}
              width="400px"
              height="400px"
            />
          </motion.div>

          <motion.div className={styles.infoBlock}
          variants={text}
          initial="hidden"
          animate={controls}
          
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
          ref={ref}>
            <div className={styles.productName}>
              {catalogs[params.query.id]?.name}
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Код товара:</div>
              <div className={styles.desc}>82477Артикул: Vega Bavariya</div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Цвет каркаса: </div>
              <div className={styles.desc}>Орех</div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Материал каркаса:</div>
              <div className={styles.desc}>ДСП</div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Страна производитель:</div>
              <div className={styles.desc}>Россия</div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Материал каркаса:</div>
              <div className={styles.desc}>ДСП</div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Цвет каркаса: </div>
              <div className={styles.desc}>Орех</div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>Страна производитель:</div>
              <div className={styles.desc}>Россия</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;