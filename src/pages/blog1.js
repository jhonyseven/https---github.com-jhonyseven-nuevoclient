import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/Layout'

function BlogPage() {

    const data = useStaticQuery(graphql`
    # query {
    #     allMongodbTestdbMessages {
    #         edges {
    #             node{
    #                 # author
    #                 # title
    #                 # content
    #             }
    #         }
    #     }
    # }
    query {
  allMongodbTestdbMessages {
    edges{
      node{
        id
        blocks{
          key
          text
          type
          depth
          entityRanges {
            offset
            length
            key
          }
          inlineStyleRanges {
            offset
            length
            style
          }    
        }  
        entityMap{
          _0 {
            type
            mutability
          }
          _1 {
            type
            mutability
          }
        }
      }
    }
  }
}
    `)


    return (

        <Layout>
            <div>
                <h1>Blog</h1>
                <ul>
                    {/* {data.allMongodbTestdbMessages.edges.map((edge) => { */}
                    {data.allMongodbTestdbMessages.edges.map((edge) => {
                        console.log(edge)
                        return (
                            <div>
                                <h1>Esto es una entrada</h1>
                                <p>
                                    {/* <Link to={`/blog/${edge.node.fields.slug}`}> */}
                                    {/* <h2>{edge.node.title}</h2>
                            {/* </Link> */}
                                    {/* <p>{edge.node.author}</p> */}
                                    {/* <p>{edge.node.content}</p> */}
                                    {edge.node.blocks ?
                                        edge.node.blocks.map((block) => {
                                            return <p>{block.text}</p>
                                        })
                                        : null}

                                </p>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </Layout>

    )
}

export default BlogPage;