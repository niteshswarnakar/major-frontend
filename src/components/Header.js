import { Link } from "react-router-dom";
import React from "react";
import styles from "../styles/home.module.css";
function Header() {
  return (
    <div className={styles.header_nav}>
      <nav className={styles.container}>
        <ul className={styles.navigation}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Link2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
