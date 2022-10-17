import { Container } from "@mui/material";
import { catalogs } from "constants/catalogs";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import ImageCatalog from "./ImageCatalog";
import styles from './style.module.scss';



const CatalogPage = () => {
  const { t } = useTranslation("common");
  const params = useRouter()

  return (
    <div className={styles.catalogPage}>
      <Container>
        <div className={styles.block}>
          <ImageCatalog
            img={catalogs[params.query.id]?.image}
            width="400px"
            height="400px"
          />
          <div className={styles.infoBlock}>
          <div className={styles.productName}>{catalogs[params.query.id]?.name}</div> 
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
      </Container>
    </div>
  );
};

export default CatalogPage;