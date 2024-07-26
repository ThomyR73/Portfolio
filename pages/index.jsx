import React from "react";

import Intro from "../components/Intro";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Background from "../components/UiComponents/Background";

const Index = () => {
  return (
    <Background>
      <Intro />
      <Projects />
      <AboutMe />
      <TechStack />
      <Contact />
    </Background>
  );
};

export default Index;
