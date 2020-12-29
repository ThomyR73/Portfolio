import React, { useState, useEffect } from "react";

import styles from "../styles/Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export interface HeaderProps {
  activeDrawer: {
    active: Boolean;
    touched: Boolean;
  };
  handleDrawerState: Function;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  activeDrawer,
  handleDrawerState,
}) => {
  const router = useRouter();
  const path = router.pathname;
  const [coloredHeader, setColoredHeader] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > window.innerHeight / 4) {
        setColoredHeader(true);
      } else {
        setColoredHeader(false);
      }
    };
  }, []);
  return (
    <header
      className={`${styles.header} ${
        coloredHeader ? styles.coloredHeader : ""
      } ${path !== "/" ? styles.coloredHeader : ""}`}
    >
      <div>
        <h1>Thomas Romano</h1>

        {path === "/" ? (
          <div
            onClick={() => handleDrawerState()}
            className={`${activeDrawer.active ? "hide" : ""} ${styles.drawer}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#eeeeee"
              height={30}
              width={30}
              onClick={() => handleDrawerState()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        ) : (
          <div className={styles.drawer}>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#eeeeee"
                height={30}
                width={30}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
