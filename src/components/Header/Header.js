// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Header.module.scss";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <div className={styles["wrapper"]}>
    <div className={styles["header"]}>
      <Link to="/">
        <div className={styles["header-text"]}>あいとまエンジニア</div>
      </Link>
    </div>
    <div>
      <Navbar
        className={styles["navbar-expand"]}
        collapseOnSelect
        bg="black"
        variant="dark"
      >
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              to={"/"}
              className={styles["navbar-text"]}
              activeClassName={styles["active"]}
            >
              新着
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to={"/category/エンジニア"}
              className={styles["navbar-text"]}
              activeClassName={styles["active"]}
            >
              エンジニア
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to={"/category/その他"}
              className={styles["navbar-text"]}
              activeClassName={styles["active"]}
            >
              その他
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  </div>
);

export default Header;
