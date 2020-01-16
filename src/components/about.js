import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const AboutMe = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <h2>About Me</h2>
        </Row>
        <Row>
          <p>
            After a career of promoting other people's creations I am branching
            out as a web developer to create and promote some of my own. I am
            currently in the Thinkful Engineering Immersion Bootcamp to help
            fulfill this goal. I've always been too curious for my own good and
            now I'm using my skills for four main purposes:
          </p>
        </Row>
        <Row>
          <Col>Compose code and apps to make new things work.</Col>
          <Col>Optimize current apps to make good things work better.</Col>
          <Col>Develop new 'toys' to help accomplish the first two goals</Col>
          <Col>Experience the world inside & outside of the screen.</Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutMe
