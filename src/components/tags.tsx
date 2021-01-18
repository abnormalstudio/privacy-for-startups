import React from "react";
import styled from "@emotion/styled";
import Link from "gatsby-link";
import { css } from "@emotion/react";
import { splitTags } from "$lib";

interface Props {
  tags: string;
}

const Tags = ({ tags }: Props) => (
  <TagList>
    {splitTags(tags)
      .sort()
      .map((tag) => (
        <TagItem key={tag}>
          <Link
            to={`/tags/${tag}`}
            css={css`
              font-size: 0.85rem;
              font-weight: bold;
            `}
          >
            #{tag}
          </Link>
        </TagItem>
      ))}
  </TagList>
);

const TagList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
`;
const TagItem = styled("li")`
  padding-right: 5px;
  margin: 0.5rem 0px;
`;

export default Tags;
