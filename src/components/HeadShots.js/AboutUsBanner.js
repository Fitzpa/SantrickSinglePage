import React from "react"
import { Link } from "gatsby"
import HeadShots from "./headShots.module.scss"

const AboutUsBanner = () => {
  return (
    <div className={HeadShots.aboutUsContainer}>
      <div className={HeadShots.abouttextContainer}>
        <Link className={HeadShots.aboutLink} to={"/about"}>
          <h2 className={HeadShots.h2aboutStyle}>Want to know more about</h2>
          <div className={HeadShots.circleFill}>
            <h2 className={HeadShots.h2us}>US?</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AboutUsBanner
