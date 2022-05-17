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
          Hola! Me llamo Thomas, tengo 21 años soy un desarrollador front-end
          autodidacta y con mucha predisposición a seguir aprendiendo y ayudar
          a mis compañeros.
          <br />
          <br />
          Cuento con más de dos años de experiencia en desarrollo de sitios web
          y aplicaciones tanto web como mobile usando React, Next.js, React Native, 
          Redux, Expo, APIS (Rest y GraphQL) y programación funcional. 
          <br />
          <br />
          Actualmente, me estoy formando en back-end con Node, Express, Apollo 
          y MongoDB para alcanzar un perfil FullStack.
          <br />
          Además, estoy desarrollando mis soft skills para posiciones de liderazgo.
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
