import React from 'react'
import styles from './nav.module.scss';
import { SiReactivex } from 'react-icons/si'
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { FcCloseUpMode } from 'react-icons/fc'
function NavBar({ air_quality, isLoading, status_code }) {
  const quality = Object.entries(air_quality)
  return (

    <div className={styles.navMain}>

      {
        !isLoading ?
          <>
            <div className={styles.navHead}>
              <SiReactivex className={styles.icons} />
              <h2>weatherCast</h2>
            </div>
            {status_code ==200 ?
            <div className={styles.airQuality}>
              <h3>"Air Quality (μg/m3)</h3>
              {
                quality.map((data, index) => {
                  return (
                    <div className={styles.airContent} key={index}>
                      <p className={styles.name}>{data[0]}</p>
                      <p className={styles.value}>{parseInt(data[1])}</p>
                    </div>
                  )
                })
              }
            </div>
              : "" }
            <div className={styles.link}>
              <a href='https://www.linkedin.com/in/yash-purohit-a135321b1/'><IoLogoLinkedin className={styles.icons} /></a>
              <a href='https://github.com/yashPurohit01'><IoLogoGithub className={styles.icons} /></a>
              <a href='https://www.instagram.com/phonography360/'><IoLogoInstagram className={styles.icons} /></a>

              <p >built with <FcCloseUpMode /> Yash Purohit </p>
            </div>
          </>
          : ""}

    </div>
  )
}

export default NavBar