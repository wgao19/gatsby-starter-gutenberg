import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import config from "../../../data/SiteConfig";
import "../b16-tomorrow-dark.css";
import "./index.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Header
            imageURL={post.cover ? post.cover.publicURL : config.siteBanner}
            title={post.title}
            text={post.author}
          />
          <article>
            <h1>{post.title}</h1>
            <div className="attention-grabber">{post.description}</div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            {/* TODO: style this <div className="post-meta">
              <PostTags tags={post.tags} />
            </div> */}
            <p>
              <small>
                <Link to="/">go back home</Link>
              </small>
            </p>
          </article>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          publicURL
        }
        date
        category
        tags
        description
        author
      }
      fields {
        slug
        date
      }
    }
  }
`;
