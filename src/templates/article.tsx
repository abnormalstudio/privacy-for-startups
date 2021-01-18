import { graphql } from "gatsby";
import Helmet from "react-helmet";
import React from "react";
import Link from "gatsby-link";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { css } from "@emotion/react";

import { Layout, Tags, SEO, ArticleAside, H1Line } from "$components";
import { splitTags } from "$lib";

interface IArticle {
  id: string;
  timeToRead: number;
  excerpt: string;
  body: any;
  frontmatter: {
    slug: string;
    title: string;
    tags: string;
    date: string;
    updated: string;
  };
}

interface INode {
  node: IArticle;
}

interface Props {
  data: {
    article: IArticle;
    relatedArticles: {
      edges: INode[];
    };
    otherArticles: {
      edges: INode[];
    };
  };
}

const buildURL = (url: string, obj: object) => {
  const query = Object.entries(obj)
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&");

  return `${url}?${query}`;
};

const Article = ({ data }: Props) => {
  const { excerpt, frontmatter, body } = data.article;
  const { title, tags, date, updated } = frontmatter;

  const ogImageUrl = buildURL(
    "https://leighhalliday-og-image-git-master.leighhalliday.now.sh/og.jpg",
    {
      author: "Marian Serna",
      website: "marianserna.com",
      title,
      image: "https://abnormalstudio.s3.amazonaws.com/marian-social.jpg",
    }
  );

  const asideArticles =
    data.relatedArticles.edges.length > 0
      ? data.relatedArticles
      : data.otherArticles;

  return (
    <Layout isArticlePage={true}>
      <SEO keywords={splitTags(tags)} title={title} description={excerpt} />
      <Helmet encodeSpecialCharacters={false}>
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:image:src" content={ogImageUrl} />
      </Helmet>
      <Link
        to="/"
        css={css`
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;

          @media (max-width: 900px) {
            display: none;
          }
        `}
      ></Link>
      <main
        css={css`
          background: #fff;
          display: flex;
          flex-wrap: wrap;
          padding: 2rem;
          z-index: 10;
          position: absolute;
          top: 50px;
          right: 10%;
          left: 10%;
          margin-bottom: 50px;

          @media (max-width: 900px) {
            position: static;
            padding: 0.5rem;
          }
        `}
      >
        <article
          css={css`
            width: 75%;
            padding-right: 2rem;

            @media (max-width: 768px) {
              width: 100%;
              padding: 0px 0.5rem;
            }

            img {
              max-width: 100%;
            }
          `}
        >
          <H1Line
            css={css`
              margin-top: 0px;
            `}
          >
            {title}
          </H1Line>

          <div
            css={css`
              text-transform: uppercase;
              font-size: 0.75rem;
            `}
          >
            published {date}
            {updated && date !== updated && <span>, updated {updated}</span>}
          </div>

          <Tags tags={tags} />

          <p
            css={css`
              line-height: 1.25rem;
              margin: 0.5rem 0px;
            `}
          >
            <small>
              <em>
                Nothing in this article is intended to be considered legal
                advice. All contents and opinions belong exclusively to the
                author and do not reflect the opinions of her employer(s).
              </em>
            </small>
          </p>

          <div
            css={css`
              margin-top: 1rem;
              margin-bottom: 2rem;

              ol {
                margin: 2rem 0px;
                margin-left: 1.25rem;
                list-style-type: decimal;
              }

              ol ol {
                list-style-type: lower-alpha;
              }

              ol ol ol {
                list-style-type: lower-roman;
              }

              ul {
                list-style-type: circle;
                margin: 2rem 0px;
                margin-left: 1.25rem;

                li {
                  margin: 0.5rem 0px;
                }
              }
            `}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </article>

        <ArticleAside articles={asideArticles.edges.map((edge) => edge.node)} />
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $tagRegex: String!) {
    article: mdx(id: { eq: $id }) {
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
      body
    }
    relatedArticles: allMdx(
      filter: {
        id: { ne: $id }
        frontmatter: { tags: { regex: $tagRegex } }
        fields: { sourceInstanceName: { eq: "articles" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
            thumb {
              childImageSharp {
                fixed(width: 600, quality: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          body
        }
      }
    }
    otherArticles: allMdx(
      filter: {
        id: { ne: $id }
        fields: { sourceInstanceName: { eq: "articles" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
            thumb {
              childImageSharp {
                fixed(width: 600, quality: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          body
        }
      }
    }
  }
`;

export default Article;
