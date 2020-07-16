import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'

function BlogPage() {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)

    return (
        <Layout>
            <h1>BLOG</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2></Link>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;