import { useState, useEffect, useRef, useMemo } from "react";
import { scroller, Link } from "react-scroll";
import Header from "./components/header";
import LandingPage from "./sections/landingpage";
import FirstPage from "./sections/firstpage";
import SecondPage from "./sections/secondpage";
import ThirdPage from "./sections/thirdpage";
import Cursor from "./components/customcursor";
import FourthPage from "./sections/fourthpage";
import NewsLetter from "./sections/newsletter";

export default function App() {
  const [currentSection, setCurrentSection] = useState("landing");
  const sectionRefs = {
    landing: useRef(null),
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
    fourth: useRef(null),
    fifth: useRef(null),
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
    const isSecondOrFourthSection = ["second", "fourth"].includes(
      currentSection
    );
    return {
      logoColor: isSecondOrFourthSection ? "black" : "white",
      buttonColor: isSecondOrFourthSection ? "white" : "black",
      buttonTextColor: isSecondOrFourthSection ? "black" : "white",
    };
  }, [currentSection]);

  const buttonText = "About us";

  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 will-change-transform">
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
          <Link to="fourth" smooth={true} duration={1000}>
            Fourth Page
          </Link>
          <Link to="fifth" smooth={true} duration={1000}>
            NewsLetter
          </Link>
        </Header>
      </div>
      <main className="will-change-transform">
        <div
          id="landing"
          ref={sectionRefs.landing}
          className="will-change-transform"
        >
          <LandingPage />
        </div>
        <div
          id="first"
          ref={sectionRefs.first}
          className="will-change-transform"
        >
          <FirstPage />
        </div>
        <div
          id="second"
          ref={sectionRefs.second}
          className="will-change-transform"
        >
          <SecondPage />
        </div>
        <div
          id="third"
          ref={sectionRefs.third}
          className="will-change-transform"
        >
          <ThirdPage />
        </div>
        <div
          id="fourth"
          ref={sectionRefs.fourth}
          className="will-change-transform"
        >
          <FourthPage />
        </div>
        <div
          id="fifth"
          ref={sectionRefs.fifth}
          className="will-change-transform"
        >
          <NewsLetter />
        </div>
      </main>
    </div>
  );
}
