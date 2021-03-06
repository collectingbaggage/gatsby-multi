import React, { Fragment } from 'react'

import PostsListItem from './PostsListItem'
import useSiteMetadata from '../hooks/use-site-config'

const PostsList = ({ posts }) => {
  const { defaultLang } = useSiteMetadata()

  return (
    <Fragment>
      {posts.map(post => {
        const props = {
          title: post.node.frontmatter.title,
          date: post.node.frontmatter.date,
          excerpt: post.node.excerpt,
          slug: post.node.frontmatter.slug,
          language: post.node.frontmatter.language || defaultLang,
          tags: post.node.frontmatter.tags || [],
        }
        return <PostsListItem key={props.slug} {...props} />
      })}
    </Fragment>
  )
}
export default PostsList
