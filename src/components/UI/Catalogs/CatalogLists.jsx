import { Container } from "@mui/material"
import { catalogs } from "constants/catalogs";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import ImageCatalog from "./ImageCatalog"
import styles from './style.module.scss';



const CatalogLists = () => {
    const { t } = useTranslation("common");
  return (
    <div>
      <Container>
        <div className={styles.title} style={{ marginBottom: "25px" }}>
          {" "}
          {t("catalogs")}{" "}
        </div>
        <div className={styles.CatalogsList}>
          {catalogs?.map((item) => (
            <Link href={`/catalog/${item.id}`} key={item.id} passHref>
              <div key={item.id} className={styles.catalodItem}>
                <ImageCatalog img={item.image} />
                <div className={styles.name}> {item.name} </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CatalogLists;