import React from "react";

import Intro from "../components/Intro";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <>
      <Intro />
      <Projects />
      <AboutMe />
      <TechStack />
      <Contact />
    </>
  );
};

export default Index;
