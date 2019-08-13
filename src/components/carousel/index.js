import React from "react"
import maynards from "../../images/maynards/mresize1.jpg"
import maynards2 from "../../images/maynards/mresize2.jpg"
import maynards1 from "../../images/maynards/mresize3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import slideshowstyles from "./slideshow.module.scss"

const SlideShow = () => {
  return (
    <div className={slideshowstyles.container}>
      <Carousel
        showThumbs="false"
        infiniteLoop="true"
        autoPlay="true"
        stopOnHover="false"
        width="100%"
        height="100%"
      >
        <div>
          <img src={maynards} alt="maynards1" />
        </div>
        <div>
          <img src={maynards1} alt="maynards2" />
        </div>
        <div>
          <img src={maynards2} alt="maynards-3" />
        </div>
      </Carousel>
    </div>
  )
}

export default SlideShow
