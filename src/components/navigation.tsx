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
      background-color: #000;

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
        bottom: 0;

        @media (max-width: 900px) {
          position: static;
        }

        li {
          padding: 0px 1rem;

          @media (max-width: 768px) {
            padding: 0px 0.25rem;
          }
        }

        a {
          color: #fff;
          text-transform: uppercase;
          padding: 0.25rem;
          transition: 0.5s ease-in-out all;

          &:hover {
            background-color: #8ae1fc;
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
