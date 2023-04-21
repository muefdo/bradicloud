import React from 'react'
import styles from './Block.module.css'
import Image from 'next/image'
import mockup from "./public/mockup.png"




const Block = ({
  headerName,
  description,
  imageSrc,
  theme,
  bottom,

}) => {
  return (
    <div className={styles.Container} style={{backgroundColor: theme}} >
      <div className={styles.textContainer}>
        <h1 className={styles.mainHeader}>{headerName}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageFirst} style={{paddingBottom: bottom}}> <Image src={imageSrc} alt='foto' width={500} height={500}/> </div>
    </div>
  )
}

export default Block