import React from "react"
import Louie from "../../images/LouieSm.jpg"
import Pgdwnbtn from "../Page_Down_Btn.js/blackBtn"
import headShotStyles from "./headShots.module.scss"

const HeadShots = () => {
  return (
    <section id="headshots">
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
        <p
          style={{
            margin: "0 auto",
            width: "68%",
            textAlign: "center",
            height: "20vh",
          }}
        >
          Our primary focus is giving businesses and people a platform to tell
          their story to the individuals they want to connect with; helping to
          inspire the actions and create the change they desire.
        </p>
        <a href="#expertise" className={headShotStyles.dwnBtn_container}>
          <Pgdwnbtn className={headShotStyles.dwnBtn} />
        </a>
      </div>
    </section>
  )
}

export default HeadShots
