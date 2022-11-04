import { AccessTime, DoneOutline, ElectricBolt, Handshake } from "@mui/icons-material";
import { Container } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./style.module.scss"


export function OurBenefits(){

    const { t } = useTranslation('common')

    const controls = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
        if (inView) {
          controls.start('visible')
        }
      }, [controls, inView])
  
    // const container = {
    //   hidden: { opacity: 1, y: 20 },
    //   visible: {
    //     opacity: 1,
    //     y: 0,
    //     transition: {
    //       delayChildren: 0.2,
    //       staggerChildren: 0.2,
    //     },
    //   },
    // }
  
    const itemVariant = {
        hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.2,
            },
          },
    }
    
    const data = [
      {
        id: 1,
        title: "НАДЁЖНО",
        icon:  <DoneOutline />,
        text: "Достойно оцениваем товары, подлежащие к продаже, и обеспечиваем моментальное прибытие",
      },
      {
        id: 2,
        title: "МГНОВЕННО",
        icon:  <ElectricBolt />,
        text: "При удовлетворении обеих сторон по цене, гарантируем безотлагательное выполнение разбора и вывоза товара в договоренный же день",
      },
      {
        id: 3,
        title: "КАЧЕСТВЕННО",
        icon: <Handshake />,
        text: "Вы можете оценить качество наших работ с первого взгляда",
      },
      {
        id: 4,
        title: "ВЫИГРЫШНО",
        icon: <AccessTime />,
        text: "Есть шанс за кратчайший срок избавиться от старого и надежда на приобретение нового",
      },
    ];


    return (
      <div>
        <Container>
          <div className={styles.ourBenefits}>
            <div className={styles.title}> {t("ourBenefits")} </div>
            <motion.div
              className={styles.benefits}
              ref={ref}
            >
              {data?.map((item) => (
                <motion.div
                  variants={itemVariant}
                  className={styles.benefitCard}
                  key={item.id}
                  animate={controls}
                  initial="hidden"
                  ref={ref}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardTitle}> {item.title} </div>
                    {item.icon}
                  </div>
                  <div> {item.text} </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    );
}