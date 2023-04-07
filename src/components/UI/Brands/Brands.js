import { Container, Grid } from "@mui/material";
import meydan from '../../../../public/images/meydan.png'
import Image from "next/image";
import rulls from '../../../../public/images/brands/rulls.png'
import immer from '../../../../public/images/brands/immer.png'
import moonx from '../../../../public/images/brands/moonx.png'
import ziffler from '../../../../public/images/brands/ziffler.png'
import beston from '../../../../public/images/brands/beston.png'
import everel from '../../../../public/images/brands/everel.png'
import style from './brands.module.scss'
import useTranslation from "next-translate/useTranslation";

export function Brands(){
  const { t } = useTranslation('common')
    const imgArr = [
        rulls, immer, moonx, ziffler, beston, everel
    ]

    return (
      <>
        <div style={{paddingBottom: '80px'}}>
          <Container>
            <div className="header" style={{ margin: "80px 0 40px 0" }}>
              {t("companyOwnBrands")}
            </div>
            <Grid container spacing={2} style={{paddingBottom: '5px'}}>
              <Grid item xs={5}>
                <Image src={meydan} />
              </Grid>
              <Grid item xs={6}>
                <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>

                <div style={{ marginBottom: "24px" }}>
                 {t("ownBrandsText1")}
                </div>
                <div>
                 {t("ownBrandsText2")}
                </div>
                    </div>
                <Grid container spacing={2}>
                  {imgArr?.map((item) => (
                    <Grid item xs={6}>
                      <div className={style.logoBlock}>
                        <Image src={item} />
                      </div>
                    </Grid>
                  ))}
                </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
}