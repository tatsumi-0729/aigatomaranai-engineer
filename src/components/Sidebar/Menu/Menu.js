// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";

type Props = {
  menu: {
    label: string,
    path: string,
  }[],
};

const Menu = ({ menu }: Props) => (
  <nav className={styles["menu"]}>
    {/* カテゴリー */}
    <div className={styles["menu__list"]}>
      <div className={styles["menu__list-item"]}>カテゴリー</div>
    </div>
    {/* カテゴリーリスト */}
    <div className={styles["menu__list"]}>
      {menu.map((item) => (
        <div className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link-article"]}
            activeClassName={styles["menu__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>

    {/* タグ */}
    <div className={styles["menu__list"]}>
      <div className={styles["menu__list-item"]}>タグ</div>
    </div>
    {/* タグリスト */}
    <div className={styles["menu__list"]}>
      {menu.map((item) => (
        <div className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link-article"]}
            activeClassName={styles["menu__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </div>
      ))}
      {menu.map((item) => (
        <div className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link-article"]}
            activeClassName={styles["menu__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>

    {/* Contacts */}
    <div className={styles["menu__list-item"]}>
      <Link
        to={"/inquiry"}
        className={styles["menu__list-item-link-inquiry"]}
        activeClassName={styles["menu__list-item-link--active"]}
      >
        お問い合わせ
      </Link>
    </div>
  </nav>
);

export default Menu;
