import React, { useState, useEffect } from "react";
import styles from "../styles/Intro.module.scss";

const texts = [
  "Web",
  "Front-end",
  "Javascript",
  "Typescript",
  "React",
  "React Native",
];

const Intro = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (texts[currentText] === undefined) {
        setCurrentText(0);
      } else {
        setCurrentText(currentText + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [currentText]);

  return (
    <div className={styles.intro} id="intro">
      <h2>
        Desarrollador <br />
        {texts.map((text, index) => (
          <span
            key={text}
            className={`${index === currentText ? styles.visibleText : ""}`}
          >
            {text}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Intro;
