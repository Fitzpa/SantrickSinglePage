import React from "react"
import ExpertiseStyle from "./expertiseStyle.module.scss"

import Pgdwnbtn from "../Page_Down_Btn.js/blackBtn"

const Expertise = () => {
  return (
    <section id="expertise" className={ExpertiseStyle.container}>
      <div className={ExpertiseStyle.container_columns}>
        <h2 className={ExpertiseStyle.title}>What We Offer</h2>
        <div className={ExpertiseStyle.container_content}>
          <div className={ExpertiseStyle.column_1}>
            <h2 className={ExpertiseStyle.column_items}>
              Web Design & Development
            </h2>
            <h2 className={ExpertiseStyle.column_items}>
              Technology Advisement
            </h2>
            <h2 className={ExpertiseStyle.column_items}>Brand Strategy</h2>
          </div>
          <div className={ExpertiseStyle.column_2}>
            <h2 className={ExpertiseStyle.column_items}>
              Digital & Social Marketing
            </h2>
            <h2 className={ExpertiseStyle.column_items}>Lead Generation</h2>
            <h2 className={ExpertiseStyle.column_items}>Process Improvement</h2>
          </div>
        </div>
      </div>
      <a href="#portfolio" className={ExpertiseStyle.dwnBtn_container}>
        <Pgdwnbtn className={ExpertiseStyle.dwnBtn} />
      </a>
    </section>
  )
}

export default Expertise
