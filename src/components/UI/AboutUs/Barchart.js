import { Container } from "@mui/material";
import Image from "next/image";
import graph from '../../../../public/images/barchart.png'
import useTranslation from "next-translate/useTranslation";





export function BarChart(){

    const { t } = useTranslation("common");

    return(
        <div style={{padding: '80px 0'}}>
        <Container>
            <div className="header" style={{marginBottom: '40px'}}> {t("shopCoveregeInformation")} </div>
            <Image src={graph} />
        </Container>
        </div>
    )
}