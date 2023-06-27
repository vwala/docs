// import url from 'url'

// // TODO: this should be available as global var without the need to query
// // the siteMetadata.
// const SITEURL = process.env.SITE_URL || `https://docs.vwa.la`

// const imageUrls = {
//     default: url.resolve(SITEURL, `/images/meta/hero.png`),
// }

// export const getMetaImageUrls = (section?: string) => {
//     // Set the default image if no section is passed
//     section = section || `default`
//     return imageUrls[section]
// }

// export default getMetaImageUrls

import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

// const SITEURL = process.env.SITE_URL || 'https://docs.vwa.la'

// const imageUrls = {
//   default: '/images/meta/hero.png', // Update the path to your default image
// }

const getMetaImageUrls = (section?) => {

  section = section || 'default'

  // const imageUrl = imageUrls[section]

  return (
    // TODO will need to get all images then filter result by {section} var
    <StaticQuery
      query={graphql`
        query {
          defaultImage: file(relativePath: { eq: "images/meta/hero.png" }) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 1200, height: 630)
            }
          }
        }
      `}
      render={(data) => {
        const imageData = data[section + 'Image']

        if (imageData && imageData.childImageSharp) {
          const image = getImage(imageData.childImageSharp.gatsbyImageData)
          return (
            <GatsbyImage
              image={image}
              alt="Meta Image"
            // Add any additional props you need for styling or accessibility
            />
          )
        }

        return null
        // return <img src={url.resolve(SITEURL, imageUrl)} alt="Meta Image" />
      }}
    />
  )
}

export default getMetaImageUrls