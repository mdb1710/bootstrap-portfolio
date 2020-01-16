import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MyProjects from "../components/projects"

const Projects = () => (
  <Layout pageInfo={{ pageName: "projects" }}>
    <SEO title="Projects" />
    <MyProjects />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
