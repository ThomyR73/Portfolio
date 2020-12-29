import React from "react";

import styles from "../styles/Footer.module.scss";

import LazyLoad from "react-lazyload";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LazyLoad>
        <div>
          <a href="https://www.linkedin.com/in/thomas-romano/" target="_blank">
            <img
              src="/icons/linkedin.svg"
              width="30"
              height="30"
              alt="Linkedin Logo"
            />
          </a>
          <a href="https://github.com/ThomyR73" target="_blank">
            <img
              src="/icons/github.svg"
              width="34"
              height="34"
              alt="Github Logo"
            />
          </a>
          <a href="mailto:jthomasromano@gmail.com" target="_blank">
            <img
              src="/icons/gmail.svg"
              width="34"
              height="34"
              alt="Gmail Logo"
            />
          </a>
        </div>
      </LazyLoad>
      <h6>&copy;Thomas Romano | 2020</h6>
    </footer>
  );
};

export default Footer;
