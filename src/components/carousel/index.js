import React from "react"
import maynards from "../../images/maynards/maynards_3.jpg"
import maynards2 from "../../images/maynards/maynards_2.jpg"
import maynards1 from "../../images/maynards/maynards_1.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const SlideShow = () => {
  return (
    <div style={{ width: "50%", margin: "auto 0", display: "inline-block" }}>
      <Carousel
        showThumbs="false"
        infiniteLoop="true"
        autoPlay="true"
        stopOnHover="false"
        width="100%"
        height="auto"
      >
        <div>
          <img src={maynards} />
          <p className="legend">Maynards</p>
        </div>
        <div>
          <img src={maynards1} />
          <p className="legend">Maynards</p>
        </div>
        <div>
          <img src={maynards2} />
          <p className="legend">Maynards</p>
        </div>
      </Carousel>
    </div>
  )
}

export default SlideShow
