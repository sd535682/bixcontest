import { useState, useEffect, useRef, useMemo } from "react";
import Header from "./components/header";
import LandingPage from "./sections/landingpage";
import FirstPage from "./sections/firstpage";
import SecondPage from "./sections/secondpage";
import ThirdPage from "./sections/thirdpage";

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
            setCurrentSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = id;
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
        <Header
          logoColor={logoColor}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          buttonText={buttonText}
        />
      </div>
      <main>
        <div ref={sectionRefs.landing}>
          <LandingPage />
        </div>
        <div ref={sectionRefs.first}>
          <FirstPage />
        </div>
        <div ref={sectionRefs.second}>
          <SecondPage />
        </div>
        <div ref={sectionRefs.third}>
          <ThirdPage />
        </div>
      </main>
    </div>
  );
}
