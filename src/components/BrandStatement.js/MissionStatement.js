import React from "react"
import BrandStyles from "./brandStyles.module.scss"

import WhtPgdwnbtn from "../Page_Down_Btn.js/whtBtn"

const MissionStatement = () => {
  return (
    <section id="missionStatement" className={BrandStyles.container}>
      <div className={BrandStyles.statementContainer}>
        <div className={BrandStyles.statementContent}>
          <div className={BrandStyles.titleContainer}>
            <h2 className={BrandStyles.title}>What We Do</h2>
          </div>

          <div className={BrandStyles.items_container}>
            <p>
              <strong>Guiding </strong>
              your business through the physical and technological world with
              effective digital advertising.
            </p>
            <p>
              <strong>Producing </strong> user-friendly, fast, efficient web
              services that will grow with your business.
            </p>
            <p>
              <strong>Connecting </strong>
              clients to your business, focusing on the future while maximizing
              your company’s potential.
            </p>
          </div>
        </div>
        
      <a href="#expertise" className={BrandStyles.dwnBtn_container}><WhtPgdwnbtn className={BrandStyles.dwnBtn} /></a>
      </div>
    </section>
  )
}

export default MissionStatement
