import { graphql } from "gatsby";
import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/react";
import { Layout, SEO, ArticleRow, H1Line, Single } from "$components";

interface IArticleNode {
  node: IArticle;
}

interface Props {
  data: {
    allMdx: {
      edges: IArticleNode[];
    };
  };
  pageContext: {
    page: number;
    tag: string;
    prevUrl: null | string;
    nextUrl: null | string;
  };
}

const Articles = ({ data, pageContext: { page, prevUrl, nextUrl } }: Props) => {
  return (
    <Layout>
      <SEO title={`Articles page ${page}`} />

      <H1Line>Articles {page > 1 && <span>page {page}</span>}</H1Line>

      <ArticleRow articles={data.allMdx.edges.map((edge) => edge.node)} />

      {prevUrl || nextUrl ? (
        <div
          css={css`
            text-align: center;
          `}
        >
          {prevUrl && <Link to={prevUrl}>Prev</Link>}
          {prevUrl && nextUrl && " "}
          {nextUrl && <Link to={nextUrl}>Next</Link>}
        </div>
      ) : null}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "articles" } } }
      limit: $limit
      skip: $skip
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
            date(formatString: "MMMM D, YYYY", locale: "en")
            updated(formatString: "MMMM D, YYYY", locale: "en")
            thumb {
              childImageSharp {
                fixed(width: 600, quality: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Articles;
