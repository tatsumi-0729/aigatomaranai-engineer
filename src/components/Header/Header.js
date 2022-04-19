// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Header.module.scss";

import Author from "../Sidebar/Author";
import Contacts from "../Sidebar/Contacts";
import Copyright from "../Sidebar/Copyright";
import { useSiteMetadata } from "../../hooks";

const Header = () => {
  const { author, copyright, category, tag } = useSiteMetadata();

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
              {/* MENU */}
              <div className={styles["hamburger-content-menu"]}>
                <div>MENU</div>
                <div></div>
                <label htmlFor="hamburger-button-check">
                  <div className={styles["hamburger-cross-wrap"]}>
                    <div className={styles["hamburger-cross"]}>×</div>
                  </div>
                </label>
              </div>

              {/* カテゴリ */}
              <div className={styles["hamburger-content-category-wrapper"]}>
                <input
                  type="checkbox"
                  id="hamburger-content-category-button-check"
                  className={styles["hamburger-content-category-button-check"]}
                ></input>
                <label
                  htmlFor="hamburger-content-category-button-check"
                  className={
                    styles["hamburger-content-category-icon-text-wrapper"]
                  }
                >
                  <div className={styles["hamburger-content-category-icon"]}>
                    >
                  </div>
                  <div className={styles["hamburger-content-category-text"]}>
                    カテゴリ
                  </div>
                </label>
                <div
                  className={
                    styles["hamburger-content-category-content-wrapper"]
                  }
                >
                  <div
                    className={
                      styles[
                        "hamburger-content-category-content-text-partition"
                      ]
                    }
                  ></div>
                  {category.map((item) => (
                    <div>
                      <div
                        className={
                          styles[
                            "hamburger-content-category-content-text-partition"
                          ]
                        }
                      ></div>
                      <Link
                        to={item.path}
                        className={
                          styles["hamburger-content-category-content-text"]
                        }
                      >
                        > {item.label}
                      </Link>
                      <div
                        className={
                          styles[
                            "hamburger-content-category-content-text-partition"
                          ]
                        }
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* タグ */}
              <div className={styles["hamburger-content-tag-wrapper"]}>
                <input
                  type="checkbox"
                  id="hamburger-content-tag-button-check"
                  className={styles["hamburger-content-tag-button-check"]}
                ></input>
                <label
                  htmlFor="hamburger-content-tag-button-check"
                  className={styles["hamburger-content-tag-icon-text-wrapper"]}
                >
                  <div className={styles["hamburger-content-tag-icon"]}>></div>
                  <div className={styles["hamburger-content-tag-text"]}>
                    タグ
                  </div>
                </label>
                <div
                  className={styles["hamburger-content-tag-content-wrapper"]}
                >
                  <div
                    className={
                      styles["hamburger-content-tag-content-text-partition"]
                    }
                  ></div>
                  {tag.map((item) => (
                    <div>
                      <div
                        className={
                          styles["hamburger-content-tag-content-text-partition"]
                        }
                      ></div>
                      <Link
                        to={item.path}
                        className={styles["hamburger-content-tag-content-text"]}
                      >
                        > {item.label}
                      </Link>
                      <div
                        className={
                          styles["hamburger-content-tag-content-text-partition"]
                        }
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* トップメニュー */}
              <Link to={"/"} className={styles["hamburger-content-top"]}>
                トップメニュー
              </Link>

              {/* お問い合わせ */}
              <Link
                to={"/inquiry"}
                className={styles["hamburger-content-inquiry"]}
              >
                お問い合わせ
              </Link>

              <div className={styles["hamburger-content-partition"]}></div>
              <div className={styles["author-contacts-copyright-wrapper"]}>
                <Author author={author} />
                <Contacts contacts={author.contacts} />
                <div className={styles["hamburger-content-partition"]}></div>
                <Copyright copyright={copyright} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
