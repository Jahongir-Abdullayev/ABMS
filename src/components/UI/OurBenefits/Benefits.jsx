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
        title: "benefitTitle1",
        icon:  <DoneOutline />,
        text: "benefitText1",
      },
      {
        id: 2,
        title: "benefitTitle2",
        icon:  <ElectricBolt />,
        text: "benefitText2",
      },
      {
        id: 3,
        title: "benefitTitle3",
        icon: <Handshake />,
        text: "benefitText3",
      },
      {
        id: 4,
        title: "benefitTitle4",
        icon: <AccessTime />,
        text: "benefitText4",
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
                    <div className={styles.cardTitle}> {t(`${item.title}`)} </div>
                    {item.icon}
                  </div>
                  <div> {t(`${item.text}`)} </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    );
}