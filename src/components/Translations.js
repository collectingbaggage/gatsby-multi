import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../tokens'
import Flag from './Flag/Flag'

const TranslationContainer = styled.div`
  padding: 0px;
  display: inline;
`

const InfoText = styled.span`
  color: ${colors.grey900};
`

const TranslationLink = styled.a`
  color: ${colors.grey900};
  text-decoration: underline;
`

class Translations extends React.Component {
  render() {
    const { translations } = this.props

    return (
      <TranslationContainer>
        {translations.map((translation, i) => {
          return (
            <Fragment key={`translation-${i}`}>
              <TranslationLink href={withPrefix(translation.link)}>
                <Flag language={translation.hreflang} />
              </TranslationLink>
            </Fragment>
          )
        })}
      </TranslationContainer>
    )
  }
}
export default Translations
