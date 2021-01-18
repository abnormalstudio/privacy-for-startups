import React from "react";
import { css } from "@emotion/react";
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
        thumbUrl={
          frontmatter.thumb.childImageSharp.fixed.srcSet
            .split("\n")[2]
            .split(" ")[0]
        }
      />
    ))}
  </div>
);

export default ArticleRow;
