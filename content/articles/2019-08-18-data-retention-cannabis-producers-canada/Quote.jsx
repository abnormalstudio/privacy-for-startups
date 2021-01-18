import React from "react";
import { css } from "@emotion/react";

export default function Quote({ children }) {
  return (
    <blockquote
      css={css`
        padding-top: 0px;
        padding-bottom: 0px;

        > p {
          margin: 1rem 0px;
        }
      `}
    >
      {children}
    </blockquote>
  );
}
