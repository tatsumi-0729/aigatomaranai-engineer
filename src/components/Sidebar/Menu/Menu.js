// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Menu.module.scss";

type Props = {
  category: {
    label: string,
    path: string,
  },
  tag: {
    label: string,
    path: string,
  },
};

const Menu = ({ category, tag }: Props) => (
  <nav className={styles["menu"]}>
    {/* カテゴリー */}
    <div className={styles["menu__category-title"]}>カテゴリー</div>
    <hr />
    {/* カテゴリーリスト */}
    <div className={styles["menu__list"]}>
      {category.map((item) => (
        <div className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link"]}
            activeClassName={styles["menu__list-item-link--active"]}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>

    {/* タグ */}
    <div className={styles["menu__tag-title"]}>タグ</div>
    <hr />
    {/* タグリスト */}
    <div className={styles["menu__list"]}>
      {tag.map((item) => (
        <div className={styles["menu__list-item"]} key={item.path}>
          <Link
            to={item.path}
            className={styles["menu__list-item-link"]}
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
