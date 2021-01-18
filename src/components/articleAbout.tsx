import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Link from "gatsby-link";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { H3Line } from "$components";

const ArticleAbout = () => (
  <StaticQuery
    query={graphql`
      query ArticleAboutQuery {
        file(relativePath: { eq: "marian.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aside: mdx(fields: { name: { eq: "aside" } }) {
          body
        }
      }
    `}
    render={(data) => (
      <div>
        <H3Line>About Me</H3Line>
        <Image fluid={data.file.childImageSharp.fluid} alt="Marian Serna" />
        <div>
          <MDXRenderer>{data.aside.body}</MDXRenderer>
        </div>
        <p>
          <Link to="/about">Read more</Link>
        </p>
      </div>
    )}
  />
);

export default ArticleAbout;
