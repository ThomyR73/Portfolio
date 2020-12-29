import React from "react";

import styles from "../styles/AboutMe.module.scss";

import Image from "next/image";
import LazyLoad from "react-lazyload";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe} id="aboutMe">
      <h3>Sobre mi</h3>
      <div className={styles.data}>
        <Image
          src="/yo(1).jpg"
          height={200}
          width={200}
          className={styles.image}
          loading="lazy"
        />
        <p>
          Hola! Me llamo Thomas, tengo 19 años y soy un joven desarrollador web
          autodidacta y apasionado por la programación y el desarrollo de
          software.
          <br />
          <br />
          Comencé aprendiendo a programar en Python de forma autodidacta por
          ocio, y así desperté mi enorme pasión por la programación, actualmente
          programo aplicaciones web y móviles con Javascript y Typescript usando
          los Frameworks React y React Native, y estudio Ciencias de la
          Computación en la UBA.
        </p>
      </div>
      <div className={styles.lazy}>
        <LazyLoad once offset={0}>
          <div className={`${styles.fromLeft} ${styles.react}`}>
            <img src="/icons/react.svg" />
          </div>
          <div className={`${styles.fromLeft} ${styles.ts}`}>
            <img src="/icons/ts.svg" />
          </div>
          <div className={`${styles.fromRight} ${styles.js}`}>
            <img src="/icons/js.svg" />
          </div>
          <div className={`${styles.fromRight} ${styles.gql}`}>
            <img src="/icons/gql.svg" />
          </div>
          <div className={`${styles.fromRight} ${styles.css3}`}>
            <img src="/icons/css3.svg" />
          </div>
          <div className={`${styles.fromLeft} ${styles.html5}`}>
            <img src="/icons/html5.svg" />
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default AboutMe;
