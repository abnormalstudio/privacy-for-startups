import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";

const Navigation = () => (
  <nav
    css={css`
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 200px;
      background-color: #252c41;

      @media (max-width: 900px) {
        position: static;
        width: 100%;
      }
    `}
  >
    <ul
      css={css`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: absolute;
        bottom: 20vh;
        padding-left: 10%;

        @media (max-width: 900px) {
          position: static;
          padding-left: 0px;
        }

        li {
          padding: 0px 1rem;
          width: 100%;

          @media (max-width: 900px) {
            padding: 0px 0.25rem;
            width: auto;
          }
        }

        a {
          color: #fff;
          padding: 0.25rem;
          font-size: 1.25rem;
          transition: 0.5s ease-in-out all;
          font-family: "Suranna", "serif";

          &:hover {
            color: #ffc952;
          }
        }
      `}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
