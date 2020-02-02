import React from "react";
import { css } from "@emotion/core";
import Link from "gatsby-link";
import { H3Line } from "$components";

interface Props {
  articles: IArticle[];
}

const ArticleRelated = ({ articles }: Props) => (
  <>
    <H3Line>Related Articles</H3Line>
    <ul
      css={css`
        margin-bottom: 2rem;
      `}
    >
      {articles.map(article => {
        const thumbUrl = article.frontmatter.thumb.childImageSharp.fixed.srcSet
          .split("\n")[2]
          .split(" ")[0];

        return (
          <li
            key={article.id}
            css={css`
              display: flex;
              margin-bottom: 1.5rem;
              background-size: cover;
              background-position: center center;
              padding: 1rem;
              color: white;
              a {
                color: white;
              }
            `}
            style={{ backgroundImage: `url(${thumbUrl})` }}
          >
            <Link
              to={`/${article.frontmatter.slug}`}
              title={article.frontmatter.title}
            >
              <h4
                css={css`
                  background: #000;
                  display: inline;
                  box-decoration-break: clone;
                  -webkit-box-decoration-break: clone;
                  line-height: 2rem;
                  padding: 0.25rem;

                  @media (max-width: 768px) {
                    line-height: 2rem;
                    padding: 0.5rem;
                  }
                `}
              >
                {article.frontmatter.title}
              </h4>
              <div
                css={css`
                  margin-top: 0.5rem;
                `}
              >
                <span
                  css={css`
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    background: #000;
                    padding: 0.25rem;
                  `}
                >
                  {article.frontmatter.date}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);

export default ArticleRelated;
