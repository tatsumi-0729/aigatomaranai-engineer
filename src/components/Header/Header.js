// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Header.module.scss";
import { Navbar, Nav } from "react-bootstrap";

import Author from "../Sidebar/Author";
import Contacts from "../Sidebar/Contacts";
import Copyright from "../Sidebar/Copyright";
import { useSiteMetadata } from "../../hooks";

const Header = () => {
  const { author, copyright } = useSiteMetadata();

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["header-wrapper-for-pc"]}>
          <Link to="/">
            <div className={styles["header-text"]}>あいとまエンジニア</div>
          </Link>
          <Link to={"/inquiry"} className={styles["header-inquiry"]}>
            お問い合わせ
          </Link>
        </div>

        <div className={styles["header-wrapper-for-sp"]}>
          <div></div>

          <Link to="/">
            <div className={styles["header-text"]}>あいとまエンジニア</div>
          </Link>

          {/* ハンバーガーメニュー */}
          <div className={styles["hamburger"]}>
            <input
              type="checkbox"
              id="hamburger-button-check"
              className={styles["hamburger-button-check"]}
            ></input>
            <label htmlFor="hamburger-button-check">
              <div className={styles["hamburger-border"]}>-</div>
              <div className={styles["hamburger-border"]}>-</div>
              <div className={styles["hamburger-border"]}>-</div>
            </label>
            <label
              htmlFor="hamburger-button-check"
              className={styles["hamburger-background"]}
            ></label>
            <div className={styles["hamburger-content"]}>
              <label htmlFor="hamburger-button-check">
                <div className={styles["hamburger-cross-wrap"]}>
                  <div></div>
                  <div></div>
                  <div className={styles["hamburger-cross"]}>×</div>
                </div>
              </label>
              <Author author={author} />
              <Contacts contacts={author.contacts} />
              <Link
                to={"/inquiry"}
                className={styles["hamburger-content-inquiry"]}
              >
                お問い合わせ
              </Link>
              <Copyright copyright={copyright} />
            </div>
          </div>
        </div>
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
};

export default Header;
