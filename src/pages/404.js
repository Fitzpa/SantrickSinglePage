import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout.js"
import Head from "../components/head"


const NotFound = () => {
  return (
    <Layout>
        <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head back to the homepage</Link>
      </p>
    </Layout>
  )
}

export default NotFound
