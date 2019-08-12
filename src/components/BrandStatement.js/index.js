import React from "react"
import MissionStatement from "./MissionStatement"
import Expertise from "./Expertise"

import BrandStyles from "./brandStyles.module.scss"

const BrandStatement = () => {
  return (
    <div className={BrandStyles.BrandStatement}>
      <MissionStatement />
      <Expertise />
    </div>
  )
}

export default BrandStatement
