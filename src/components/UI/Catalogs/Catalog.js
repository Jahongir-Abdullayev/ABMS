import { Container } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { catalogs } from "../../../constants/catalogs";
import ImageCatalog from './ImageCatalog';
import styles from './style.module.scss';

export function Catalog() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const container = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  const variantItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div id="catalog">
      <Container>
        <div className={styles.title}> {t("catalogs")} </div>
        <motion.div
          className={styles.Catalogs}
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {catalogs?.slice(0, 8).map((item) => (
            <Link href={`/catalog/${item.id}`} key={item.id} passHref>
              <motion.div
                variants={variantItem}
                key={item.id}
                className={styles.catalodItem}
              >
                <ImageCatalog img={item.image} />
                <div className={styles.textBlock}>
                  <div className={styles.name}> {item.name} </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <Link href="/catalogs" passHref>
          <div className={styles.button}>
            <div className={styles.seeMoreButton}>
              <a href="#">{t("viewMore")}</a> <div></div>
            </div>
          </div>
        </Link>
      </Container>
    
    </div>
  );
}
