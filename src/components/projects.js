import React from "react"

const MyProjects = () => {
  return (
    <div class="project-data">
      <h2>Past/Ongoing Projects</h2>
      <section id="project-five" class="project-info">
        <h3>Project: TuneChain</h3>
        <div class="container">
          <img
            class="app-photo"
            src="images/petfulimage.png"
            alt="second project"
          />
        </div>

        <p>
          Project Description: A full-stack app that helps people find playlists
          by mood and genre.
        </p>
        <p>
          Project Tech: Full-Stack with React, HTML, CSS, NodeJs, Express, &
          PostgreSQL
        </p>
        <p>
          Project Demo: &nbsp;
          <a href="http://tunechain-app.mdb1710.now.sh">Try It Out</a>
        </p>
        <p>
          Project Repo: &nbsp;
          <a href="https://github.com/mdb1710/tunechainclient_final">
            See The Front-End Code Here
          </a>
          &
          <a href="https://github.com/mdb1710/tunechainserver_final">
            See the API here
          </a>
        </p>
      </section>
      <section id="project-one" class="project-info">
        <h3>Project 1: Spendful</h3>
        <div class="container">
          <img
            class="app-photo"
            src="../images/spendfuldashboard.png"
            alt="Spendful project"
          />
        </div>

        <p>
          Project Description: With four other collaborators I was able to
          tackle the ever enduring problem of saving money. This is a full-stack
          app that allows you to track incomes and expenses
        </p>
        <p>
          Project Tech: Front-End: ReactJS, HTML, CSS, ChartJS, Moment -
          Back-End: Node, Express, Joi - Database - PostgreSQL
        </p>
        <p>
          Project Demo: &nbsp; <a href="http://spendful.now.sh">Try It Out</a>
        </p>
        <p>
          Project Repo: &nbsp;
          <a href="https://github.com/mdb1710/spendful-client">
            See The Front-End Code Here
          </a>
          &nbsp; & &nbsp;
          <a href="https://github.com/mdb1710/spendful-server">
            see the API here
          </a>
        </p>
      </section>
      <section id="project-two" class="project-info">
        <h3>Project 2: A 90's R&B Quiz App</h3>
        <div class="container">
          <img
            class="app-photo"
            src="images/90sappphoto1.png"
            alt="first project"
          />
        </div>

        <p>
          Project Description: I've always wanted to show the world how
          influential this era of music has been even to this day. So with a
          partner I created a Buzzfeed-like quiz app for other to test their own
          knowledge of 90's R&B music.
        </p>
        <p>
          Project Tech: We used Javascript and HTML to build the app with images
          and GIFs to give a Buzzfeed like feel.
        </p>
        <p>
          Project Demo: &nbsp;
          <a href="https://thinkful-ei-armadillo.github.io/Jake-Michael-Quiz/">
            Try It Out
          </a>
        </p>
        <p>
          Project Repo: &nbsp;
          <a href="https://github.com/thinkful-ei-armadillo/Jake-Michael-Quiz">
            See The Code Here
          </a>
        </p>
      </section>

      <section id="project-three" class="project-info">
        <h3>Project 3: PetFul</h3>
        <div class="container">
          <img
            class="app-photo"
            src="images/petfulimage.png"
            alt="second project"
          />
        </div>

        <p>
          Project Description: This is another "collab" production in building
          an online pet adoption agency app
        </p>
        <p>
          Project Tech: Full-Stack with React, HTML, CSS, NodeJs, Express, &
          PostgreSQL
        </p>
        <p>
          Project Demo: &nbsp;
          <a href="http://matt-michael-petful.matth3wn.now.sh">Try It Out</a>
        </p>
        <p>
          Project Repo: &nbsp;
          <a href="https://github.com/mdb1710/petful-client">
            See The Front-End Code Here
          </a>
          &
          <a href="https://github.com/mdb1710/petful-server">
            See the API here
          </a>
        </p>
      </section>
    </div>
  )
}

export default MyProjects
