import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ExtraStuff from "../components/extrastuff"

const Extra = () => (
  <Layout pageInfo={{ pageName: "extra" }}>
    <SEO title="Extra" />
    <ExtraStuff />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Extra
