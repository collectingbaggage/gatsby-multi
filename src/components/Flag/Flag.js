import React from 'react'
import styled from 'styled-components'
import ukFlag from './uk-flag.png'
import deFlag from './de-flag.png'
import nlFlag from './nl-flag.png'

const FlagImage = styled.img`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
`

class Flag extends React.Component {
  render() {
    const { language } = this.props
    let img = null; 
    let alt = null;
    switch (language) {
      case 'en': 
        img = ukFlag;
        alt = 'english post';
        break;
      case 'de':
        img = deFlag;
        alt = 'deutscher Eintrag';
        break;
      case 'nl':
        img = nlFlag;
        alt = "nederlands blog";
        break;
      default:
        img = nlFlag;
        alt = "nederlands blog";
        break;
    }

    return <FlagImage src={img} alt={alt} className="flag" />
  }
}

export default Flag
