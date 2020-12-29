import React from "react";
import styles from "../styles/Menu.module.scss";

import { Link } from "react-scroll";

export interface MenuProps {
  activeDrawer: {
    active: Boolean;
    touched: Boolean;
  };
  handleDrawerState: Function;
}

const Menu: React.FunctionComponent<MenuProps> = ({
  activeDrawer,
  handleDrawerState,
}) => {
  return (
    <nav
      className={`${styles.nav} ${activeDrawer.active ? styles.showNav : ""} ${
        !activeDrawer.active && activeDrawer.touched ? styles.hideNav : ""
      }
        ${!activeDrawer.active && !activeDrawer.touched ? styles.hide : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fbfbfb"
        height={30}
        width={30}
        onClick={() => handleDrawerState()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div>
        <ul>
          <li>
            <Link
              to="intro"
              smooth={true}
              offset={-80}
              onClick={() => handleDrawerState()}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="proyects"
              smooth={true}
              offset={-80}
              onClick={() => handleDrawerState()}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="aboutMe"
              smooth={true}
              offset={-80}
              onClick={() => handleDrawerState()}
            >
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link
              to="techStack"
              smooth={true}
              offset={-80}
              onClick={() => handleDrawerState()}
            >
              Tecnologias
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              onClick={() => handleDrawerState()}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
