// @flow strict
import React from "react";
import styles from "./Meta.module.scss";

type Props = {
  date: string,
};

const Meta = ({ date }: Props) => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>
      posted：
      {new Date(date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  </div>
);

export default Meta;
