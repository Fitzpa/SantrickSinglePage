import React from "react"
import videoStyles from "./videoStyles.module.scss"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <div className={videoStyles.video}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        height="100%"
        className={videoStyles.youtubeVideo}
      />
    </div>
  )
}

export default Video
