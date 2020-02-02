import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import SearchIcon from "../images/icons/search.svg";
import LinkedInIcon from "../images/icons/linkedin.svg";
import EmailIcon from "../images/icons/email.svg";

interface Props {
  siteTitle: string;
  onSearchClick: () => void;
}

const Header = ({ siteTitle, onSearchClick }: Props) => (
  <div
    css={css`
      padding: 0.5rem 0;
      display: flex;
      flex-wrap: wrap;
    `}
  >
    <div
      css={css`
        width: 20%;
        @media (max-width: 1024px) {
          display: none;
        }
      `}
    />
    <div
      css={css`
        width: 60%;
        text-align: center;

        @media (max-width: 1024px) {
          width: 100%;
        }
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 2.5rem;
          line-height: 2.5rem;
          font-family: "Zilla Slab", serif;
          color: #006a83;
          text-transform: uppercase;
          display: block;

          @media (max-width: 768px) {
            font-size: 1.75rem;
          }
        `}
      >
        {siteTitle}
      </Link>
    </div>
    <div
      css={css`
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 1024px) {
          width: 100%;
        }
      `}
    >
      <a
        href="mailto:privacyforstartups@gmail.com"
        title="Email"
        target="_blank"
      >
        <img src={EmailIcon} alt="Email" css={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/marian-serna/"
        title="LinkedIn"
        target="_blank"
      >
        <img src={LinkedInIcon} alt="LinkedIn" css={styles.icon} />
      </a>
      <button
        css={css`
          background: none;
          padding: 0px;
          border: none;
          cursor: pointer;
        `}
        onClick={onSearchClick}
        title="Search"
      >
        <img src={SearchIcon} alt="Search" css={styles.icon} />
      </button>
    </div>
  </div>
);

Header.defaultProps = {
  siteTitle: ""
};

const styles = {
  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
    display: inline-block;
  `
};

export default Header;
