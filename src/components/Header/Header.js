// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles["header"]}>
    <Link to="/">
      <div className={styles["header-text"]}>あいとまエンジニア</div>
    </Link>
  </div>
);

export default Header;
