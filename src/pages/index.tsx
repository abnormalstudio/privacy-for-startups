import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Layout, SEO, ArticleRow } from "$components";

interface IArticleNode {
  node: IArticle;
}

interface IndexPageProps {
  allMdx: {
    edges: IArticleNode[];
  };
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexArticlesQuery {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { sourceInstanceName: { eq: "articles" } } }
          limit: 13
        ) {
          edges {
            node {
              id
              timeToRead
              excerpt
              frontmatter {
                slug
                title
                tags
                date(formatString: "MMM D, YYYY", locale: "en")
                updated(formatString: "MMM D, YYYY", locale: "en")
              }
            }
          }
        }
      }
    `}
    render={(data: IndexPageProps) => {
      const articles = data.allMdx.edges.map(edge => edge.node);

      return (
        <Layout>
          <SEO title="" />
          <ArticleRow articles={articles} />
        </Layout>
      );
    }}
  />
);

export default IndexPage;
