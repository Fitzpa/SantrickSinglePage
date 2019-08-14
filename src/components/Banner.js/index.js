import React, { useEffect } from "react"
import bannerStyles from "./banner.module.scss"
import logo from "../../images/spinner_logo.png"
import Pgdwnbtn from "../Page_Down_Btn.js/blackBtn"

const Banner = ({ title }) => {
  useEffect(() => {
    // This added the spinning effect on scroll
    window.addEventListener("scroll", function() {
      const leftgear = document.getElementById("spinner")
      try {
        leftgear.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)"
        console.log(window.pageYOffset)
      } catch (err) {
        console.log(err)
      }
    })
  })

  return (
    <section id="mainBanner" className={bannerStyles.Banner_bg}>
      <div className={bannerStyles.Banner}>
        <div className={bannerStyles.Banner_container}>
          <div className={bannerStyles.spinner_container}>
            <img
              id="spinner"
              className={bannerStyles.spinner}
              src={logo}
              alt=""
            />
          </div>
          <div className={bannerStyles.container_left}>
            <h1 className={bannerStyles.h1_title}>Santrick Digital</h1>
          </div>
        </div>
        <div className={bannerStyles.h2container}>
          <h2 className={bannerStyles.h2_title_caption}>
            Creating websites and social media strategies that work together as
            one.
          </h2>
        </div>
        <a href="#missionStatement" className={bannerStyles.dwnBtn_container}>
          <Pgdwnbtn className={bannerStyles.dwnBtn} />
        </a>
      </div>
    </section>
  )
}

export default Banner
