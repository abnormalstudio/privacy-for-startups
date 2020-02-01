import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import { splitTags, gradient } from "$lib";

interface Props {
  title: string;
  slug: string;
  tags: string;
  date: string;
  timeToRead: number;
}

const ArticleTile = ({ title, slug, tags }: Props) => {
  return (
    <div css={styles.outer}>
      <div css={styles.image} style={{ backgroundImage: gradient(title) }} />
      <div css={styles.content}>
        {/* <div
          css={css`
            font-size: 0.75rem;
          `}
        >
          {splitTags(tags)
            .slice(0, 3)
            .map(tag => (
              <span key={tag}>
                <Link to={`/tags/${tag}`}>#{tag}</Link>{" "}
              </span>
            ))}
        </div> */}
        <Link
          to={`/${slug}`}
          css={css`
            display: block;
            text-align: left;
            margin-left: 15%;
            margin-right: -5%;
          `}
        >
          <h3
            css={css`
              padding: 0.5rem;
              background: #000;
              display: inline;
              box-decoration-break: clone;
              -webkit-box-decoration-break: clone;
              line-height: 2.8rem;

              /* @media (max-width: 1024px) {
                font-size: 1rem;
                line-height: 1.25rem;
                padding-bottom: 0.5rem;
                margin: 0.5rem 0px;
              } */
            `}
          >
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  outer: css`
    position: relative;
    width: calc(30% - 2rem);
    height: 250px;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);

    ::before {
      background-color: rgba(0, 0, 0, 0.25);
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    @media (max-width: 1100px) {
      width: calc(45% - 2rem);
    }

    @media (max-width: 768px) {
      width: calc(90% - 2rem);
    }

    a {
      color: rgba(255, 255, 255, 0.9);
    }
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  content: css`
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    z-index: 2;
    text-align: center;
  `
};

export default ArticleTile;
