import { Collapse, Container, Modal } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { catalogs } from "../../../constants/catalogs";
import ImageCatalog from './ImageCatalog';
import styles from './style.module.scss';

export function Catalog() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false)
  const [id, setId] = useState()
  const [showOthers, setShowOthers] = useState(false)

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
            // <Link href={`/catalog/${item.id}`} key={item.id} passHref>
            <motion.div
              variants={variantItem}
              key={item.id}
              className={styles.catalodItem}
              onClick={() => {
                setOpen(true);
                setId(item.id);
              }}
            >
              <ImageCatalog img={item.image} />
              <div className={styles.textBlock}>
                <div className={styles.name}> {item.name} </div>
              </div>
            </motion.div>
            // </Link>
          ))}
        </motion.div>
        <Collapse in={showOthers}>
          <div className={styles.Catalogs}>
            {catalogs?.slice(8, 16).map((item) => (
              <div key={item.id} className={styles.catalodItem}>
                <ImageCatalog img={item.image} />
                <div className={styles.textBlock}>
                  <div className={styles.name}> {item.name} </div>
                </div>
              </div>
            ))}
          </div>
        </Collapse>
        {showOthers ? (
          <Link href="/catalogs" passHref>
            <div className={styles.button}>
              <div
                className={styles.seeMoreButton}
                onClick={() => setShowOthers(true)}
              >
                {/* <a href="#">{t("viewMore")}</a> <div></div> */}
                {t("Посмотреть все каталоги")}
              </div>
            </div>
          </Link>
        ) : (
          <div className={styles.button}>
            <div
              className={styles.seeMoreButton}
              onClick={() => setShowOthers(true)}
            >
              {/* <a href="#">{t("viewMore")}</a> <div></div> */}
             
              {t("viewMore")}
            </div>
          </div>
        )}
      </Container>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.popUpBlock}>
          <div className={styles.ProductInfo}>
            <div className={styles.img}>
              <ImageCatalog
                width="200px"
                height="200px"
                img={catalogs[id]?.image}
              />
            </div>
            <div className={styles.text}>
              <div className={styles.productName}>{catalogs[id]?.name}</div>
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
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
