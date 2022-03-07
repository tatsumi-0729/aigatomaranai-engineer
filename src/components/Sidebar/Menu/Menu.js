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
    {/* Article */}
    <ul className={styles["menu__list"]}>
      <li className={styles["menu__list-item"]}>記事</li>
    </ul>
    {/* カテゴリーリスト */}
    <ul className={styles["menu__list"]}>
      {menu.map((item) => (
        <li className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link-article"]}
            activeClassName={styles["menu__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </li>
      ))}
      {/* Contacts */}
      <li className={styles["menu__list-item"]}>
        <Link
          to={"/inquiry"}
          className={styles["menu__list-item-link-inquiry"]}
          activeClassName={styles["menu__list-item-link--active"]}
        >
          お問い合わせ
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
