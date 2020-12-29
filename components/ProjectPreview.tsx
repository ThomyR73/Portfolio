import React, { useState } from "react";
import styles from "../styles/projectPreview.module.scss";

import LazyLoad from "react-lazyload";

export interface ProjectPreviewProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  type: "mobile" | "desktop";
  buttons: Array<{ name: string; link: string }>;
}

const ProjectPreview: React.FunctionComponent<ProjectPreviewProps> = ({
  title,
  subtitle,
  thumbnail,
  type,
  children,
  buttons,
}) => {
  const [showData, setShowData] = useState(false);

  const toggleDataHandler = () => {
    setShowData(!showData);
  };

  return (
    <div
      className={`${styles.projectPreview} ${
        showData ? styles.displayProject : ""
      }`}
    >
      <div className={`${showData ? styles.preview : ""}`}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <LazyLoad>
          <img
            src={thumbnail}
            alt={title}
            className={`${styles.imgShadow}  ${
              type === "mobile" ? styles.mobile : styles.desktop
            }`}
          />
        </LazyLoad>
      </div>
      <br />
      {showData ? (
        <div className={styles.data}>
          {children}
          <div className={styles.buttonsContainer}>
            <br />
            {buttons.map((button) => (
              <>
                <a href={button.link} target="_blank" rel="noreferr">
                  {button.name}
                </a>
                <br />
              </>
            ))}
            <a className={styles.button} onClick={toggleDataHandler}>
              Ver Menos
            </a>
          </div>
        </div>
      ) : (
        <a className={styles.button} onClick={toggleDataHandler}>
          Ver Más
        </a>
      )}
    </div>
  );
};

export default ProjectPreview;
