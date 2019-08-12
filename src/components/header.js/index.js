import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container_effect}>
        <Link className={headerStyles.title} to="/">
          <h1 className={headerStyles.title_h1}>
            {data.site.siteMetadata.title}
          </h1>
          <h2 className={headerStyles.title_h2}>
            {data.site.siteMetadata.subtitle}
          </h2>
        </Link>
      </div>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
