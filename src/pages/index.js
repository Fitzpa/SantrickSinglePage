import React from "react"
import Layout from "../components/Layout.js"
import Head from "../components/head"
import Banner from "../components/Banner.js"
import Portfolio from "../components/Portfolio.js/index.js"
import BrandStatement from "../components/BrandStatement.js/index.js"
import ContactPage from "../components/Contact.js/contact"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Banner />
      <BrandStatement />
      <Portfolio />
      <ContactPage />
    </Layout>
  )
}

export default IndexPage
