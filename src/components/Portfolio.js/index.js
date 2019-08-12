import React from "react"
import Box from "../Box.js"
import portfolioStyles from "./portfolio.module.scss"
import WhtPgdwnbtn from "../Page_Down_Btn.js/whtBtn"

const Portfolio = () => {
  return (
    <section id="portfolio" className={portfolioStyles.container}>
      <div
        id="portfolioContainer"
        className={portfolioStyles.portfolio_container}
      >
        <Box />
        <a href="#contact" className={portfolioStyles.dwnBtn_container}>
          <WhtPgdwnbtn className={portfolioStyles.dwnBtn} />
        </a>
      </div>
    </section>
  )
}

export default Portfolio
