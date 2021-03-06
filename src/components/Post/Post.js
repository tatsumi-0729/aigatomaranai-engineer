// @flow strict
import React from "react";
import Comments from "./Comments";
import Content from "./Content";
import Tags from "./Tags";
import styles from "./Post.module.scss";
import type { Node } from "../../types";

type Props = {
  post: Node,
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles["post"]}>
      <div className={styles["post__content"]}>
        <Content title={title} date={date} body={html} />
      </div>

      <div className={styles["post__footer"]}>
        {/* <Meta date={date} /> */}
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>

      <div className={styles["post__comments"]}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
