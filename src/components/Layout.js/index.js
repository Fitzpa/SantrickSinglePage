import React from "react"
import Footer from "../footer.js"
import Header from "../header.js"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>

      <Footer />
    </div>
  )
}

export default Layout
