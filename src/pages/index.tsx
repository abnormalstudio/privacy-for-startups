import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import { Layout, SEO, ArticleTile, ArticleGrid, Single } from "$components";

interface IArticle {
  id: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    tags: string;
    banner: any;
  };
}

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

interface ArticleRowProps {
  articles: IArticle[];
}

const ArticleRow = ({ articles }: ArticleRowProps) => (
  <div
    css={css`
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    `}
  >
    {articles.map(({ id, timeToRead, frontmatter }) => (
      <ArticleTile
        key={id}
        timeToRead={timeToRead}
        title={frontmatter.title}
        slug={frontmatter.slug}
        tags={frontmatter.tags}
        date={frontmatter.date}
      />
    ))}
  </div>
);

export default IndexPage;
