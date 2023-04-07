import { Container, Grid } from "@mui/material";
import Image from "next/image";

import img1 from '../../../../public/images/gallery/img1.png'
import img2 from '../../../../public/images/gallery/img2.png'
import img3 from '../../../../public/images/gallery/img3.png'
import img4 from '../../../../public/images/gallery/img4.png'
import img5 from '../../../../public/images/gallery/img5.png'
import img6 from '../../../../public/images/gallery/img6.png'
import styles from './aboutUs.style.module.scss'




export function Gallery(){



    return (
      <div style={{ padding: "40px 0" }}>
        <Container>
          <div className="header" style={{ marginBottom: "40px" }}>
            
            Gallery
          </div>
          <div className={styles.galleryBlock}>
            

            <div className={styles.firstSection}>
              <div className={styles.firstImage}>
                <Image src={img2} alt="img" />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <Image src={img3} alt="img" width="375px" />
                <Image src={img4} alt="img"  width="375px" />
              </div>
            </div>
            <div className={styles.secondSection}>
                <div> <Image src={img1} /> </div>
                <div> <Image src={img5} /> </div>
                <div> <Image src={img6} /> </div>
            </div>
          </div>
        </Container>
      </div>
    );
}