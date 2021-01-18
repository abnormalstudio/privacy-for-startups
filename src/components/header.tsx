import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/react";
import SearchIcon from "../images/icons/search.svg";
import LinkedInIcon from "../images/icons/linkedin.svg";
// import EmailIcon from "../images/icons/email.svg";

interface Props {
  siteTitle: string;
  onSearchClick: () => void;
}

const Header = ({ siteTitle, onSearchClick }: Props) => (
  <div
    css={css`
      padding: 0.5rem 0;
      padding-left: 200px;
      display: flex;
      flex-wrap: wrap;
      border-bottom: 2px solid grey;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.15);

      @media (max-width: 900px) {
        box-shadow: none;
        border-bottom: none;
        padding-left: 0px;
      }
    `}
  >
    <div
      css={css`
        width: 20%;
        @media (max-width: 900px) {
          display: none;
        }
      `}
    />
    <div
      css={css`
        width: 60%;
        text-align: center;

        @media (max-width: 900px) {
          width: 100%;
        }
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 2.8rem;
          line-height: 2.5rem;
          color: #3d3d3b;
          font-family: "Suranna", serif;
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

        @media (max-width: 900px) {
          width: 100%;
        }
      `}
    >
      {/* <a
        href="mailto:privacyforstartups@gmail.com"
        title="Email"
        target="_blank"
      >
        <img src={EmailIcon} alt="Email" css={styles.icon} />
      </a> */}
      <a
        href="https://www.linkedin.com/in/marian-serna/"
        title="LinkedIn"
        target="_blank"
        rel="noreferrer"
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
  siteTitle: "",
};

const styles = {
  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
    display: inline-block;
  `,
};

export default Header;
