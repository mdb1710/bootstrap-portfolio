import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <h1>
            Hi. I'm Michael Bonner, your friendly neighborhood code composer.
            This site serves as a glimpse into my world of music and tech.
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item action href="/about">
              About Me
            </ListGroup.Item>
            <ListGroup.Item action href="/extra">
              Extra
            </ListGroup.Item>
            <ListGroup.Item action href="/projects">
              Projects
            </ListGroup.Item>
            <ListGroup.Item action href="/contact">
              Contact
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
          <p>
            For more documentation on these packages and how they work, please
            refer to the pages linked in the list above.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
