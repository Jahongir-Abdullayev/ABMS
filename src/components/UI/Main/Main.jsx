import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getPosts } from 'services'
import styles from './style.module.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from 'react-bootstrap'
import banner1 from "../../../../public/images/banner1.png"
import banner2 from "../../../../public/images/banner2.png"
import banner3 from "../../../../public/images/banner3.png"
import { items } from './data.json'
import { styled } from '@material-ui/styles'

const CustomCarousel = styled(Carousel)({
  "& .Carousel-root-6, .carousel-indicators .active": {
    
    width: '14px !important',
  //   height: '6px',
  //   borderRadius: '50px !important'
  },
  "& .carousel-indicators [data-bs-target]":{
    width : '10px'
    // width: '6px', 
    // height: '6px',
    // borderRadius: '50%'
  }
  // "& .carousel-control-next":{
  //     top: "41% !important",
  //     left: "98% !important",
  //     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
  // },
  // "& .carousel-inner":{
  //     overflow: 'inherit'
  // }
});

// .carousel-indicators .active
export function Main() {
  const { t } = useTranslation('common')
 

  const data = [
    {
      id: 1,
      title: "Photography",
      body: "Bootstrap Carousel Example",
      imageUrl: banner1,
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 2,
      title: "City Views",
      body: "Bootstrap Carousel Example",
      imageUrl: banner2,
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 3,
      title: "Wild Life",
      body: "Bootstrap Carousel Example",
      imageUrl: banner3,
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
   
  ];

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className={styles.text}>
        <div className={styles.title}>ABMS FZE</div>
        <div className={styles.desc}> {t("internationalCompany")} </div>
      </div>
      <CustomCarousel interval={null} activeIndex={index} onSelect={handleSelect}>
        {data.map((item) => (
          <CustomCarousel.Item key={item.id} className={styles.itemP} >
            <Image src={item?.imageUrl} alt="slides" />
            <CustomCarousel.Caption className={styles.caption}>
              {/* <h3>{item.title}</h3>
          <p>{item.body}</p>
          <button className="btn btn-danger">Visit Docs</button> */}
            </CustomCarousel.Caption>
          </CustomCarousel.Item>
        ))}
      </CustomCarousel>
    </>
  );
}


