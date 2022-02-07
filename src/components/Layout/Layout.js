// @flow strict
import React from "react";
import Helmet from "react-helmet";
import Header from "../Header";
import type { Node as ReactNode } from "react";
import { useSiteMetadata } from "../../hooks";
import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string,
};

const Layout = ({ children, title, description, socialImage = "" }: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.layout}>
        <Helmet>
          <html lang="jp" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="robots" content="all"></meta>
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={metaImageUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={metaImageUrl} />
        </Helmet>
        {children}
      </div>
    </div>
  );
};

export default Layout;
