import { Button, Container, TextField } from "@mui/material";
import styles from './contact.module.scss'
import useTranslation from "next-translate/useTranslation";
import { styled } from "@material-ui/styles";

const CustomTextfield = styled(TextField)({
    "& .MuiInputBase-input": {
     padding: '10px 12px'
    },
  });

export function Contact(){

    const { t } = useTranslation("common");

    return(
        <>
        <div className={styles.background}>
            <Container>
                <div className={styles.form}>
                    <div className={styles.header}> {t("contactUs")} </div>
                    <div className={styles.formSection}>
                        <CustomTextfield placeholder="Phone number" className={styles.inputField} />
                        <CustomTextfield placeholder="Company name" className={styles.inputField} />
                        <CustomTextfield placeholder="Email" className={styles.inputField} />
                        <textarea placeholder="Message" />
                        <div className={styles.button}>
                            <Button> Send </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}