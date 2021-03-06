"use strict";

module.exports = {
  url: "https://aitoma-engineer.com/",
  pathPrefix: "/",
  title: "Aitoma Engineer",
  subtitle:
    "愛がとまらないエンジニアです。主に技術、技術に付随したお役立ち情報などを提供するブログです。",
  copyright: "Aitoma Engineer © All rights reserved.",
  disqusShortname: "aitoma-engineer",
  postsPerPage: 10,
  // googleAnalyticsId: "UA-73379983-2",
  googleAnalyticsId: "",
  useKatex: false,
  category: [
    {
      label: "新着順",
      path: "/",
    },
    {
      label: "読書感想文",
      path: "/category/読書感想文/",
    },
    {
      label: "その他",
      path: "/category/その他/",
    },
  ],
  tag: [
    {
      label: "Java",
      path: "/tag/java/",
    },
    {
      label: "Effective Java",
      path: "/tag/effective-java/",
    },
    {
      label: "その他",
      path: "/tag/その他/",
    },
  ],
  author: {
    name: "Tatsumi",
    photo: "/65117837.png",
    bio:
      "愛がとまらないエンジニアです。主に技術、技術に付随したお役立ち情報などを提供するブログです。",
    contacts: {
      twitter: "rata_engineer",
    },
  },
  notFound: {
    name: "404",
    photo: "/notFound.png",
  },
};
