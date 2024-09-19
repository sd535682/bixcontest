import { useState, useEffect, useRef } from "react";
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
  const sectionRefs = useRef(
    ["landing", "first", "second", "third", "fourth", "fifth"].reduce(
      (acc, id) => ({ ...acc, [id]: null }),
      {}
    )
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            scroller.scrollTo(entry.target.id, {
              smooth: "easeInOutCubic",
              duration: 1000,
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(
      (ref) => ref && observer.observe(ref)
    );
    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: "landing", Component: LandingPage },
    { id: "first", Component: FirstPage },
    { id: "second", Component: SecondPage },
    { id: "third", Component: ThirdPage },
    { id: "fourth", Component: FourthPage },
    { id: "fifth", Component: NewsLetter },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 will-change-transform">
        <Cursor />
        <Header buttonText="About us">
          {sections.map(({ id }) => (
            <Link key={id} to={id} smooth={true} duration={1000}>
              {id.charAt(0).toUpperCase() + id.slice(1)} Page
            </Link>
          ))}
        </Header>
      </div>
      <main className="will-change-transform">
        {sections.map(({ id, Component }, index) => (
          <div
            key={index}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            className="will-change-transform"
          >
            <Component />
          </div>
        ))}
      </main>
    </div>
  );
}
