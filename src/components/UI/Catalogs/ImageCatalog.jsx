import Image from "next/image";
import React from "react";
import cls from "./style.module.scss";

const ImageCatalog = ({ img, width="250px", height= '250px' }) => {
  return (
    <div className={cls.image}>
      <img src={img} width={width} height={height} alt="img" />
    </div>
  );
};

export default ImageCatalog;