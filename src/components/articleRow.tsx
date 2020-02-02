import React from "react";
import { css } from "@emotion/core";
import { ArticleTile } from "$components";

interface ArticleRowProps {
  articles: IArticle[];
}

const ArticleRow = ({ articles }: ArticleRowProps) => (
  <div
    css={css`
      display: flex;
      justify-content: flex-start;
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

export default ArticleRow;
