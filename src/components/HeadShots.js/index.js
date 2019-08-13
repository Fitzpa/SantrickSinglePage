import React from "react"
import Louie from "../../images/LouieSm.jpg"
import headShotStyles from "./headShots.module.scss"

const HeadShots = () => {
  return (
    <div>
      <div className={headShotStyles.thumbnails}>
        <div className={headShotStyles.thumbscontainer}>
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
        <p style={{ margin: "0 auto", width: "68%", textAlign: "center" }}>
          Our primary focus is giving businesses and people a platform to tell
          their story to the individuals they want to connect with; helping to
          inspire the actions and create the change they desire.
        </p>
      </div>
    </div>
  )
}

export default HeadShots
