import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../styles/services.css'
export default function services({data}) {
    return (
        <Layout>
            <div className="services-wrapper">
            <div>Services</div>
            <div >
             
              hel
          
            </div>
            </div>
        </Layout>
    )
}


/*
export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          description
          title
          url
        }
      }
    }
    
  }
`


{
          data.allMarkdownRemark.nodes.map((item, i) => (
            item.frontmatter.title ? (
              <div>
              <h3 class="product" key={i}>
                  {item.frontmatter.title}
              </h3>
              {item.html}
              </div>
            
            ) : (<div></div>)
          ))
        }




allMarkdownRemark {
      nodes {
        html
        frontmatter {
          description
          title
          url
        }
      }
    }
query MyQuery {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        description
        title
        url
      }
    }
  }
}

allFile(filter: {dir: {eq: "D:/Github/Penthara/Penthara/src/content/services"}}) {
        nodes {
          name
          childMarkdownRemark {
            frontmatter {
              description
              title
              url
            }
          }
        }
      } 
      
      
      
      
      
      {
                    data.allMarkdownRemark.nodes.map(node => (
                        <div key={node.name} classname="services-list">
                            hi
                          {node.html}
                        </div>
                      ))
                }*/