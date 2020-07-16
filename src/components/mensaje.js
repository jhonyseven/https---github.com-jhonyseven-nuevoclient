import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { stateToHTML } from 'draft-js-export-html'
import { convertFromRaw } from 'draft-js'

function Mensaje() {

    const data = useStaticQuery(graphql`

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
            data{
              src
              alignment
              alt
            }
          }
          _1 {
            type
            mutability
            data{
              src
              alignment
              alt
            }
          }
        }
      }
    }
  }
}
    `)

    return (
        <ul>
            {data.allMongodbTestdbMessages.edges.map((edge) => {
                let x = {
                    blocks: edge.node.blocks,
                    entityMap: {}
                };
                if (edge.node.entityMap._0 !== null) {
                    x.entityMap["0"] = edge.node.entityMap._0;
                }
                if (edge.node.entityMap._1 !== null) {
                    x.entityMap["1"] = edge.node.entityMap._1;
                }

                console.log('****************************', x)
                const contentState = convertFromRaw(x)
                let html = stateToHTML(contentState);
                return (
                    <div>
                        <h1>Esto es una entrada</h1>
                        {html}
                    </div>
                )
            })}
        </ul>
    )

}

export default Mensaje;