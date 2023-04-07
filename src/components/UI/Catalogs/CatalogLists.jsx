import { ArrowBackIosNew, ArrowForwardIos, Preview } from "@mui/icons-material";
import { Container, Modal } from "@mui/material"
import { catalogs } from "constants/partners";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";
import ImageCatalog from "./ImageCatalog"
import styles from './style.module.scss';

const CatalogLists = () => {

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [open, setOpen] = useState(false)
  const [id, setId] = useState()
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
        <div className={styles.Catalogs}>
          {arr?.map((item) => (
            <div
              onClick={() => {
                setOpen(true);
                setId(item.id);
              }}
              key={item.id}
              className={styles.catalodItem}
            >
              <ImageCatalog img={item.image} />
              <div className={styles.textBlock}>
                <div className={styles.name}> {item.name} </div>
              </div>
            </div>
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.popUpBlock}>
          <div className={styles.ProductInfo}>
            <div className={styles.text}>
              <div className={styles.productName}>{catalogs[id]?.name}</div>
            </div>
            <div className={styles.img}>
              <ImageCatalog
                width="600px"
                height="600px"
                img={catalogs[id]?.image}
              />
            </div>
          </div>
          <div className={styles.closeButton} onClick={() => setOpen(false)}>
            x
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CatalogLists;