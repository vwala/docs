import React from 'react'
import ArticleMetaMD from './ArticleMetaMD'

interface MetaDataProps {
    data: {
        site: {
            siteMetadata: {
                // siteUrl: string
                title: string
                description: string
            }
        }
        markdownRemark?: object
    }
    location: {
        pathname: string
    }
    type: 'website' | 'series' | 'article'
    title?: string
    description?: string
    image?: string | React.ReactElement
    fetchAuthorData?: boolean
    overwriteDefaultImage?: boolean
}

// TODO no idea what this is doing
const MetaData: React.FC<MetaDataProps> = ({
    data,
    type,
    title,
    description,
    image,
    // location,
}) => {
    const { markdownRemark } = data || {}

    // const { siteMetadata } = data.site

    // const canonical = url.resolve(siteMetadata?.siteUrl, location.pathname)

    if (type === 'article') {
        if (markdownRemark) {
            return <ArticleMetaMD
                data={data}
            // canonical={canonical} 
            />
        }
    } else if (type === 'website' || type === 'series') {
        return (
            null
            // <WebsiteMeta
            //     data={data}
            //     // canonical={canonical}
            //     title={title}
            //     description={description}
            //     image={image} // TODO expects a string url
            //     type={type}
            // />
        )
    }

    return null
}

export default MetaData