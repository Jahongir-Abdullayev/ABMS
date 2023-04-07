import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import styles from './aboutUs.style.module.scss'
import cer from '../../../../public/images/certificate.png'
import Image from "next/image";



export function Certificate(){


    const { t } = useTranslation("common");

    return(
        <div style={{background: '#D9D9D9', padding : '80px 0'}}>
            <Container>
                <div className="header" style={{marginBottom: '40px'}}> {t("certificates")} </div>
                <div className={styles.certificateBlock}>
                    <div className={styles.block}>
                        <Image src={cer} />
                    </div>
                    <div className={styles.block}>
                       {t("certificates")} 1
                      <div className={styles.text}> {t("certificateText")} </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}