import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactMe from "../components/contactme"

const Contact = () => (
  <Layout pageInfo={{ pageName: "projects" }}>
    <SEO title="Projects" />
    <ContactMe />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
