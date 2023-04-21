import React from 'react'
import styles from './Block.module.css'
import Image from 'next/image'
import bradicloudpng from "./public/bradicloudpng.png"

const Block = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.textContainer}>
        <h1 className={styles.mainHeader}>Tüm<br/> Projelerimiz ve<br/> Markalarımız</h1>
        <p className={styles.description} >Bradi.tech olarak yenilikçi <br/>proje ve markalarımızla web'i <br/>geliştirmeye devam ediyoruz.</p>
        <p className={styles.description}>Bu projelerimizi ve kaynak kodlarını<br/>bradi.cloud'da sizler için paylaşıyoruz.</p>
      </div>
      <div className={styles.imageFirst}> <Image src={bradicloudpng} alt='foto' width={400} height={400}/> </div>
    </div>
  )
}

export default Block