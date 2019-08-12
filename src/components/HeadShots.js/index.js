import React from "react"
import Louie from "../../images/LouieSm.jpg"
import AboutUsBanner from "./AboutUsBanner"
import headShotStyles from "./headShots.module.scss"

const HeadShots = () => {
  return (
    <div>
      <div className={headShotStyles.thumbnails}>
        <div className={headShotStyles.thumbnail}>
          {/* <img className={headShotStyles.headshot} src={Abe} alt="Abe Sanchez"/> */}
          <div className={headShotStyles.headshot_abe} alt="Abe Sanchez" />
          <h3 className={headShotStyles.name_title}>Abe Sanchez</h3>
        </div>
        <div className={headShotStyles.thumbnail}>
          <img
            className={headShotStyles.headshot}
            src={Louie}
            alt="Louie Fitzpatrick"
          />
          <h3 className={headShotStyles.name_title}>Louie Fitzpatrick</h3>
        </div>
      </div>

      <AboutUsBanner />
    </div>
  )
}

export default HeadShots
