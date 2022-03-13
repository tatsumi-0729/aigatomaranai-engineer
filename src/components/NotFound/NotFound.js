// @flow strict
import React from "react";
import { withPrefix, Link } from "gatsby";
import styles from "./NotFound.module.scss";
import { useSiteMetadata } from "../../hooks";

const NotFound = () => {
  const { notFound } = useSiteMetadata();

  return (
    <div className={styles["notFound"]}>
      <h1 className={styles["notFound__title"]}>
        ページが見つかりませんでした。
      </h1>
      <div className={styles["notFound__body"]}>
        <img
          src={withPrefix(notFound.photo)}
          className={styles["notFound__photo"]}
          alt={notFound.name}
        />
        <div className={styles["notFound__toTop-wrapper"]}>
          <Link to="/" className={styles["notFound__toTop"]}>
            TOPページへ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
