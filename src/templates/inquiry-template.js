// @flow strict
import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Inquiry from "../components/Inquiry";
import { useSiteMetadata } from "../hooks";

const InquiryTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Inquiry />
      <Sidebar />
    </Layout>
  );
};

export default InquiryTemplate;
