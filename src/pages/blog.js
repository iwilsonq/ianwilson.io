import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import { MediumPost } from '../components'

const BlogPage = ({ data }) => {
  const mediumPosts = data.allMediumPost.edges.map(edge => edge.node)
  return (
    <Layout>
      <h1>Blog</h1>
      <p>
        I keep my blog posts on other platforms, like{' '}
        <a href="https://medium.com/@iwilsonq">Medium</a> and{' '}
        <a href="https://dev.to/iwilsonq">dev.to</a>. This helps me keep my engagement in
        as few places as possible.
      </p>

      {mediumPosts.map(node => (
        <MediumPost key={node.id} {...node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MediumQuery {
    allMediumPost {
      edges {
        node {
          id
          title
          uniqueSlug
          previewContent {
            subtitle
            bodyModel {
              paragraphs {
                type
                metadata {
                  id
                }
              }
            }
          }
        }
      }
    }
    allMediumCollection {
      edges {
        node {
          domain
          name
        }
      }
    }
  }
`

export default BlogPage
