import React from "react";
import Image from "gatsby-image";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { Layout, SEO, H1Line, Single } from "$components";

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        file(relativePath: { eq: "marian.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about: mdx(fields: { name: { eq: "about" } }) {
          body
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="About me" />

        <Single>
          <H1Line>About Me</H1Line>
          <div
            css={css`
              margin: 0 auto;
              max-width: 200px;
            `}
          >
            <Image fluid={data.file.childImageSharp.fluid} />
          </div>

          <div
            css={css`
              margin-top: 2rem;
              margin-bottom: 2rem;
            `}
          >
            <MDXRenderer>{data.about.body}</MDXRenderer>
          </div>
        </Single>
      </Layout>
    )}
  />
);

export default About;
