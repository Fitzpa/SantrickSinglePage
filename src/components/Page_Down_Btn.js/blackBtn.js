import React from "react"
import chev_dwn_styles from "./pg_dwn_btn.module.scss"
import ChevDown from "../../images/icons/chevron-down.svg"


const Pgdwnbtn = () => {
  return (
<div className={chev_dwn_styles.container}>
  <ChevDown className={chev_dwn_styles.icon} />
</div>
  )
}

export default Pgdwnbtn;