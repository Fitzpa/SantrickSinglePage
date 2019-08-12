import React from "react"
import boxStyles from "./box.module.scss"
import photo_1 from "../../images/maynards/maynards_3.jpg"
import burrow from "../../videos/burrow/burrow_compressed.mp4"

const Box = () => {
  return (
    <div className={boxStyles.box_container}>
      <div className={boxStyles.tile}>
        <video src={burrow} type="video/mp4" loop="true" autoplay="true" className={boxStyles.player_styles}>
          Your Browser Does Not Support This Video
        </video>
        <div className={boxStyles.details}>
          <span className={boxStyles.tileTitle}>The Burrow</span>
          <span className={boxStyles.tileInfo}>Lets throw some axes!</span>
        </div>
      </div>
      <div className={boxStyles.tile}>
        <img src={photo_1} alt="one" className={boxStyles.box_img_sm} />
        <div className={boxStyles.details}>
          <span className={boxStyles.tileTitle}>Maynards</span>
          <span className={boxStyles.tileInfo}>Out on the Warf</span>
        </div>
      </div>
    </div>
  )
}

export default Box
