import { useStaticQuery, graphql } from 'gatsby'

const useSiteImages = imageName => {
  const result = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(quality: 90, width: 200, height: 200, cropFocus: NORTH) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
              fluid(quality: 90, maxWidth: 590, traceSVG: { color: "#D2E1FA" }) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  `)
  const items = result.allFile.edges
  const image = items.find(edge => edge.node.relativePath === imageName)
  if (image === undefined) {
    throw new Error(`Unable to find image: ${imageName} (in content/images)`)
  }

  return image.node.childImageSharp
}

export default useSiteImages
