import React from "react"
import MissionStatement from "./MissionStatement"
import Expertise from "./Expertise"
import Headshots from "../HeadShots.js/index"

import BrandStyles from "./brandStyles.module.scss"

const BrandStatement = () => {
  return (
    <div className={BrandStyles.BrandStatement}>
      <MissionStatement />
      <Headshots />
      <Expertise />
    </div>
  )
}

export default BrandStatement
