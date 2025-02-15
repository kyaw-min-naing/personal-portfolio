import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Service from "./components/services/Service";
import MyWork from "./components/myWork/MyWork";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutrRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <BrowserRouter>
      {/* <div className="app-container"> */}
      <Header
        onNavigate={(section: string) => {
          let ref;
          switch (section) {
            case "home":
              ref = homeRef;
              break;
            case "about":
              ref = aboutrRef;
              break;
            case "services":
              ref = serviceRef;
              break;
            case "work":
              ref = workRef;
              break;
            case "contact":
              ref = contactRef;
              break;
            default:
              ref = null;
          }
          if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutrRef}>
        <About />
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={workRef}>
        <MyWork />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
