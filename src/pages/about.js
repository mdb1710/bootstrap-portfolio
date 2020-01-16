import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/about"

const SecondPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="About" />
    <AboutMe />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
