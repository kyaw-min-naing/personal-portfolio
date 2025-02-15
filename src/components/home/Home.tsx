import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I am <span className="heilight-name">Kyaw Min Naing</span>
          </h1>
          <p className="hero-subtitle">
            A frontend web developer passionate about building web apps.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="cta-button">
              View My Work
            </Link>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="img-section">
          <img src="./images/profile.png" alt="Profile Picture" />
        </div>
      </section>
    </main>
  );
};

export default Home;
