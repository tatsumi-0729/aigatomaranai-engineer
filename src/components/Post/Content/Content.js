// @flow strict
import React from "react";
import Meta from "../Meta";
import styles from "./Content.module.scss";

type Props = {
  title: string,
  date: date,
  body: string,
};

const Content = ({ title, date, body }: Props) => (
  <div className={styles["content"]}>
    <div className={styles["content__title-date-wrapper"]}>
      <h1 className={styles["content__title"]}>{title}</h1>
      <div className={styles["content__date"]}>
        <Meta date={date} />
      </div>
    </div>
    <div
      className={styles["content__body"]}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
