import { ArrowBackIosNew, ArrowForwardIos, Preview } from "@mui/icons-material";
import { Container } from "@mui/material"
import { catalogs } from "constants/catalogs";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";
import ImageCatalog from "./ImageCatalog"
import styles from './style.module.scss';



const CatalogLists = () => {

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  let pages = [];

  let arr = catalogs.filter(
    (el, ind) => ind >= 15 * page && ind <= 15 * (page + 1)
  );

  for (let i = 1; i <= Math.floor(catalogs.length / 15); i++) {
    pages.push(i);
  }

  const { t } = useTranslation("common");

  return (
    <div>
      <Container>
        <div className={styles.title} style={{ marginBottom: "25px" }}>
          {" "}
          {t("catalogs")}{" "}
        </div>
        <div className={styles.CatalogsList}>
          {arr?.map((item) => (
            <Link href={`/catalog/${item.id}`} key={item.id} passHref>
              <div key={item.id} className={styles.catalodItem}>
                <ImageCatalog img={item.image} />
                <div className={styles.name}> {item.name} </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.pagination}>
          <div onClick={() => setPage(page !== 1 ? page - 1 : 1)}>
            <ArrowBackIosNew />
          </div>
          {pages?.map((num) => (
            <div
              key={num}
              className={styles.page}
              style={{
                background: num === page ? "orange" : "",
                color: num === page ? "white" : "",
              }}
              onClick={() => setPage(num)}
            >
              {num}
            </div>
          ))}
          <div
            onClick={() =>
              setPage(pages?.length === page ? pages?.length : page + 1)
            }
          >
            <ArrowForwardIos />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CatalogLists;