import { Container, Grid } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.scss";
import lg from "../../../../public/images/partners/lg.png";
import Image from "next/image";
import { styled } from "@material-ui/styles";


const CustomCarousel = styled(Carousel)({
    "& .carousel-control-prev": {
      top: "41% !important",
      left: "-2% !important",
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
    },
    "& .carousel-control-next":{
        top: "41% !important",
        left: "98% !important",
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
    },
    "& .carousel-inner":{
        overflow: 'inherit'
    }
  });



export function Partners({title, data, background}) {
  const { t } = useTranslation("common");
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div id="partners" style={{ background: background, padding: "80px 0" }}>
      <Container breakPoints={breakPoints}>
        <div>
          <div className="header" style={{marginBottom: '40px'}}> {t(`${title}`)} </div>
          <CustomCarousel indicators={false} interval={null}>
            {data?.map((item) => (
              <CustomCarousel.Item
                key={item.id}
                className={styles.itemP}
                interval={null}
              >
                <Grid container spacing={2}>
                  {item?.content?.map((elm) => (
                    <Grid item xs={3}>
                      <div className={styles.card}>
                        <Image src={elm?.imageUrl} alt="slides" width={'145px'} height={'64px'} />
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </CustomCarousel.Item>
            ))}
          </CustomCarousel>
        </div>
      </Container>
    </div>
  );
}
