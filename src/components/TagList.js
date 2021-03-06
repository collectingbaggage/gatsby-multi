import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../tokens'

const ListContainer = styled.div`
  display: inline;
  color: ${colors.postMetadata};
`

const TagListItemLink = styled(Link)`
  text-transform: lowercase;
  color: ${colors.postMetadata};

  &:not(:first-child) {
    margin-left: 0.3rem;
  }

  &:hover {
    border-bottom: 1px dotted ${colors.textLight};
  }
  &:before {
    content: '#';
  }
`

const TagListItem = styled.span`
  text-transform: lowercase;
  color: ${colors.postMetadata};
  &:not(:first-child) {
    margin-left: 0.3rem;
  }
  &:before {
    content: '#';
  }
`

class TagList extends React.Component {
  render() {
    const { tags, noLink } = this.props

    return (
      <ListContainer>
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              {!noLink && (
                <TagListItemLink to={`/tags/${tag}`}>{tag}</TagListItemLink>
              )}
              {noLink && <TagListItem to={`/tags/${tag}`}>{tag}</TagListItem>}
              {i < tags.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TagList
