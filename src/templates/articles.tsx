import { graphql } from "gatsby";
import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import { Layout, SEO, ArticleGrid, H1Line, Single } from "$components";

interface ArticleNode {
  node: {
    id: string;
    timeToRead: number;
    excerpt: string;
    frontmatter: {
      slug: string;
      title: string;
      tags: string;
      date: string;
      updated: string;
    };
  };
}

interface Props {
  data: {
    allMdx: {
      edges: ArticleNode[];
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

      <Single>
        <H1Line>Articles {page > 1 && <span>page {page}</span>}</H1Line>

        <ArticleGrid articles={data.allMdx.edges.map(edge => edge.node)} />

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
      </Single>
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
          }
        }
      }
    }
  }
`;

export default Articles;
