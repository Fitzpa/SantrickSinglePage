import React from "react"
import SlideShow from "../carousel/index"
import YouTubePlayer from "react-player"
import portfolioStyles from "./portfolio.module.scss"

const Portfolio = () => {
  return (
    <section id="portfolio" className={portfolioStyles.container}>
      <SlideShow />
      <div className={portfolioStyles.video_container}>
        <YouTubePlayer
          className={portfolioStyles.videocontent}
          url="https://www.youtube.com/embed/MFzCkIsnxVU"
          playing="false"
          loop="true"
          controls
        />
      </div>
    </section>
  )
}

export default Portfolio
