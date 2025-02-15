import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-page">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="./images/underline-8.png" alt="Under line" />
      </div>
      <div className="about-section">
        <div className="about-para">
          <p>
            Hi, I'm Kyaw Min Naing. I am a frontend web developer with skills in
            JavaScript, React, TypeScript, HTML, CSS, and some necessary
            labiraries.
          </p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>Html & CSS</p>
            <hr style={{ width: "90%" }} />
          </div>
          <div className="about-skill">
            <p>TypeScript</p>
            <hr style={{ width: "75%" }} />
          </div>
          <div className="about-skill">
            <p>React</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "60%" }} />
          </div>
        </div>

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3 +</h1>
            <p>MONTHS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>7 +</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
