// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            category {
              label
              path
            }
            tag {
              label
              path
            }
            author {
              name
              bio
              photo
              contacts {
                twitter
              }
            }
            notFound {
              name
              photo
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
