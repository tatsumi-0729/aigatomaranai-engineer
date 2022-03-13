// @flow strict
import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import NotFound from "../components/NotFound";
import { useSiteMetadata } from "../hooks";

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Page>
        <NotFound />
      </Page>
      <Sidebar />
    </Layout>
  );
};

export default NotFoundTemplate;
