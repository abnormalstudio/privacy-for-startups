declare module "@mdx-js/tag";
declare module "gatsby-plugin-mdx/mdx-renderer";
declare module "prism-react-renderer";
declare module "*.svg";

interface IArticle {
  id: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    tags: string;
    banner: any;
  };
}
