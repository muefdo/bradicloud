import React from "react";
import styles from "./Block.module.css";
import Image from "next/image";
import bradicloudpng from "./public/bradicloudpng.png";
import braditech from "./public/braditech.png";
import Link from "next/link";
import headerImage from "./public/header.png";

const Block = () => {
  return (
    <div className={styles.Container}>

      <div className={styles.textContainer}>
        
     
        <h1 className={styles.mainHeader}>
          Tüm
          <br /> Projelerimiz ve
          <br /> Markalarımız
        </h1>
        <p className={styles.description}>
          Bradi.tech olarak yenilikçi <br />
          proje ve markalarımızla web&apos;i <br />
          geliştirmeye devam ediyoruz.
        </p>
        <p className={styles.description}>
          Bu projelerimizi ve kaynak kodlarını
          <br />
          bradi.cloud&apos;da sizler için paylaşıyoruz.
        </p>
       
      </div>
      <div className={styles.imageFirst}>
        {" "}
        <Image className={styles.imageCloud} src={bradicloudpng} alt="foto" />
      </div>
      <div className={styles.braditechContainer}>
        <Link href="https://my.bradi.tech/">
          {" "}
          <Image className={styles.imageTech} src={braditech} alt="foto" />
        </Link>
      </div>
    </div>
  );
};

export default Block;
