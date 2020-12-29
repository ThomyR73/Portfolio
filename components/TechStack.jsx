import React from "react";

import styles from "../styles/TechStack.module.scss";

import LazyLoad from "react-lazyload";

const TechStack = () => {
  return (
    <div className={styles.techStack} id="techStack">
      <h3>Tecnologias</h3>
      <div className={styles.icons}>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/html5.svg" width={75} height={75} />
            <span>HTML 5</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/css3.svg" width={75} height={75} />
            <span>CSS 3</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/sass.svg" width={75} height={75} />
            <span>Sass</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/bootstrap.svg" width={75} height={75} />
            <span>Bootstrap</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/js.svg" width={75} height={75} />
            <span>Javascript</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/jquery.svg" width={75} height={75} />
            <span>JQuery</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/react.svg" width={75} height={75} />
            <span>
              React
              <br />
              React Native
            </span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/next.svg" width={75} height={75} />
            <span>Next.js</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/redux.svg" width={75} height={75} />
            <span>
              Redux
              <br />
              Redux Thunk
            </span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/gql.svg" width={75} height={75} />
            <span>Graphql</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/apollo.svg" width={75} height={75} />
            <span>
              Apollo <br /> Client & Server
            </span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/ts.svg" width={75} height={75} />
            <span>Typescript</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/angular.svg" width={75} height={75} />
            <span>Angular</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/node.svg" width={75} height={75} />
            <span>Node.js</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/mongodb.svg" width={75} height={75} />
            <span>MongoDB</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/expo.svg" width={75} height={75} />
            <span>Expo</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/firebase.svg" width={75} height={75} />
            <span>Firebase</span>
          </div>
        </LazyLoad>
        <LazyLoad once>
          <div className={styles.iconContainer}>
            <img src="/icons/vercel.svg" width={75} height={75} />
            <span>Vercel</span>
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default TechStack;
