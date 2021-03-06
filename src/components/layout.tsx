import React, { useState, useEffect } from "react";
import { StaticQuery, graphql, navigate } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";
import { Global, css } from "@emotion/react";
import Helmet from "react-helmet";
import "prismjs/themes/prism-okaidia.css";

import Header from "./header";
import Navigation from "./navigation";
import Reset from "./reset";
import mdxComponents from "./mdx";
import Search from "./search";

interface Props {
  children: any;
  isArticlePage?: boolean;
}

const Layout = ({ children, isArticlePage }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showSearch) {
          setShowSearch(false);
        } else if (isArticlePage) {
          navigate("/");
        }
      }
    };

    document.body.addEventListener("keyup", onKeyUp);

    return () => {
      document.body.removeEventListener("keyup", onKeyUp);
    };
  }, [showSearch]);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Reset />
          <Global styles={styles.global} />
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|Cabin|Suranna&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Header
            siteTitle={data.site.siteMetadata.title}
            onSearchClick={() => {
              setShowSearch(!showSearch);
            }}
          />
          <Navigation />
          <Search
            showSearch={showSearch}
            onCloseClick={() => {
              setShowSearch(false);
            }}
          />
          <div
            css={css`
              padding: 2rem 1rem;
              padding-left: 200px;

              @media (max-width: 900px) {
                padding-left: 1rem;
              }
            `}
          >
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
        </>
      )}
    />
  );
};

const styles = {
  global: css`
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      font-family: "Noto Serif TC", serif;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.75);
    }

    a {
      text-decoration: none;
      color: rgb(102, 51, 204);
    }

    pre {
      font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Cabin", sans-serif;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      margin: 1.25rem 0;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      line-height: 2.5rem;
      margin: 1.25rem 0 1.25rem 0;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0.75rem 0 1rem 0;
    }
    h4 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin: 0.5rem 0 0.75rem 0;
    }

    blockquote {
      margin: 1rem 0;
      padding: 0.5rem 0 0.5rem 1.5rem;
      border-left: 2px solid rgba(0, 0, 0, 0.75);
      font-style: italic;
      font-size: 1.5rem;

      > p {
        margin: 0px;
      }
    }

    p,
    li {
      margin: 1rem 0px;
      font-size: 1rem;
      line-height: 1.75rem;
    }

    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
    small {
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      body {
        font-size: 16px;
      }

      h1 {
        font-size: 1.75rem;
        line-height: 2.25rem;
      }
      h2 {
        font-size: 1.5rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: bold;
      }
    }

    .token.comment {
      color: #879aae;
    }
  `,
};

export default Layout;
