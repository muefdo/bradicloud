import React from "react";
import styles from "./Block.module.css";
import Image from "next/image";

const Block = ({
  headerName,
  description,
  imageSrc,
  themeColor,
  paddingLeft,
  headerColor,
  descriptionColor,
  infoLink,
  condition, // added prop for conditional rendering
}) => {
  let state;
  if (condition === 1) {
    state = <p className={styles.stateActive}>Aktif</p>;
  } else if (condition === 2) {
    state = <p className={styles.stateDeactive}>Deaktif</p>;
  } else if (condition === 3) {
    state = <p className={styles.stateComing}>Geliştiriliyor</p>;
  } else if (condition === 4) {
    state = <p className={styles.stateBasic}>Temel Özellikler Mevcut</p>;
  } else if (condition === 5) {
    state = <p className={styles.stateWait}>Bekliyor</p>;
  }

  return (
    <div className={styles.greatContainer} style={{ paddingLeft: paddingLeft }}>
      <div
        className={styles.Container}
        style={{
          background: `linear-gradient(to right, ${themeColor}, white)`,
        }}
      >
        <div className={styles.textContainer}>
          {state}
          <h1 className={styles.mainHeader} style={{ color: headerColor }}>
            {headerName}
          </h1>
          <p className={styles.description} style={{ color: descriptionColor }}>
            {description}
          </p>
          <a className={styles.blockLink} href={infoLink}>
            Daha Fazla Bilgi Al
          </a>
        </div>
        <div className={styles.imageFirst}>
          <Image className={styles.ımage} src={imageSrc} alt="imageBradi" width={500} height={500}/>
        </div>
      </div>
    </div>
  );
};

export default Block;
