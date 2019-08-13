import React from "react"
import SlideShow from "../carousel/index"
import ReactPlayer from "react-player"
import portfolioStyles from "./portfolio.module.scss"

const Portfolio = () => {
  return (
    <section id="portfolio" className={portfolioStyles.container}>
      <SlideShow />
      <ReactPlayer
        url="https://youtu.be/MFzCkIsnxVU"
        playing="false"
        loop="true"
        controls="true"
        volume="0"
        muted="true"
        className={portfolioStyles.videocontainer}
      />
    </section>
  )
}

export default Portfolio
