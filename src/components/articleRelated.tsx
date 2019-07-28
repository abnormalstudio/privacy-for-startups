import React from "react";
import { css } from "@emotion/core";
import Link from "gatsby-link";
import { H3Line } from "$components";
import { gradient } from "$lib";

interface Article {
  id: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    tags: string;
  };
}

interface Props {
  articles: Article[];
}

const ArticleRelated = ({ articles }: Props) => (
  <>
    <H3Line>Related Articles</H3Line>
    <ul
      css={css`
        margin-bottom: 2rem;
      `}
    >
      {articles.map(article => (
        <li
          key={article.id}
          css={css`
            display: flex;
            margin-bottom: 1.5rem;
            background-image: ${gradient(article.frontmatter.title)};
            padding: 0.5rem;
            color: white;
            a {
              color: white;
            }
          `}
        >
          <Link
            to={`/${article.frontmatter.slug}`}
            title={article.frontmatter.title}
          >
            <h4
              css={css`
                margin: 0px;
                margin-bottom: 0.25rem;
              `}
            >
              {article.frontmatter.title}
            </h4>
            <div
              css={css`
                text-transform: uppercase;
                font-size: 0.75rem;
              `}
            >
              {article.frontmatter.date}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default ArticleRelated;
