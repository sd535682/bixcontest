import { useState, useEffect, useRef, useMemo } from "react";
import { scroller, Link } from "react-scroll";
import Header from "./components/header";
import LandingPage from "./sections/landingpage";
import FirstPage from "./sections/firstpage";
import SecondPage from "./sections/secondpage";
import ThirdPage from "./sections/thirdpage";
import Cursor from "./components/customcursor";

export default function App() {
  const [currentSection, setCurrentSection] = useState("landing");
  const sectionRefs = {
    landing: useRef(null),
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            scroller.scrollTo(entry.target.id, {
              smooth: true,
              duration: 1000,
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const { logoColor, buttonColor, buttonTextColor } = useMemo(() => {
    const isSecondSection = currentSection === "second";
    return {
      logoColor: isSecondSection ? "black" : "white",
      buttonColor: isSecondSection ? "white" : "black",
      buttonTextColor: isSecondSection ? "black" : "white",
    };
  }, [currentSection]);

  const buttonText = "Request a Project";

  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Cursor />
        <Header
          logoColor={logoColor}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          buttonText={buttonText}
        >
          <Link to="landing" smooth={true} duration={1000}>
            Landing
          </Link>
          <Link to="first" smooth={true} duration={1000}>
            First Page
          </Link>
          <Link to="second" smooth={true} duration={1000}>
            Second Page
          </Link>
          <Link to="third" smooth={true} duration={1000}>
            Third Page
          </Link>
        </Header>
      </div>
      <main>
        <div id="landing" ref={sectionRefs.landing}>
          <LandingPage />
        </div>
        <div id="first" ref={sectionRefs.first}>
          <FirstPage />
        </div>
        <div id="second" ref={sectionRefs.second}>
          <SecondPage />
        </div>
        <div id="third" ref={sectionRefs.third}>
          <ThirdPage />
        </div>
      </main>
    </div>
  );
}
