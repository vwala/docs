import React from 'react'
import { SiteMetaProps } from '../../../queries/queries'
import WebsiteMeta from './WebsiteMeta'

interface MetaDataProps {
    data: {
        site: SiteMetaProps
        // markdownRemark?: object
    }
    location: {
        pathname: string
    }
    type: 'website' | 'series' | 'article'
    title?: string
    description?: string
    image?: string// | React.ReactElement
    fetchAuthorData?: boolean
    overwriteDefaultImage?: boolean
}

const MetaData = (props: MetaDataProps) => {

    const { type, data, image } = props

    console.log(props)

    // const { markdownRemark } = data || {}

    // const { siteMetadata } = data.site

    // const canonical = url.resolve(siteMetadata?.siteUrl, location.pathname)

    if (type === "article") {
        // TODO replace with page/post specific metadata
        <WebsiteMeta
            site={data.site}
            image={image} // TODO expects a string url
            type={type}
        />
        // return <ArticleMetaMD
        //     data={data}
        // />
    } else {
        return <WebsiteMeta
            site={data.site}
            image={image} // TODO expects a string url
            type={type}
        />
    }

    return null
}

export default MetaData