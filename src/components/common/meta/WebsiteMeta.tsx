import React from 'react'
import Helmet from "react-helmet"
import { SiteMetaProps } from '../../../queries/queries'
import ImageMeta from './ImageMeta'

interface WebsiteMeta {
    site: SiteMetaProps
    // title: string
    // description: string
    type: string
    image: string
    // canonical: string
}

const WebsiteMeta = (props: WebsiteMeta) => {

    const { site, image, type } = props

    return <>
        <Helmet>
            <title>{site.siteMetadata.title}</title>
            <meta name="description" content={site.siteMetadata.description} />
            {/* <link rel="canonical" href={canonical} /> */}
            <meta property="og:site_name" content={site.siteMetadata.title} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={site.siteMetadata.title} />
            <meta property="og:description" content={site.siteMetadata.description} />
            {/* <meta property="og:url" content={canonical} /> */}
            {/* <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:site" content="@vwalamarketing" /> */}
            {/* below was "url": "${canonical}", */}
            <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": ${type && type === `series` ? `"Series"` : `"WebSite"`},
                        "url": "${site.siteMetadata?.siteUrl}",
                        "image": {
                            "@type": "ImageObject",
                            "url": "${image}",
                            "width": 1000,
                            "height": 563
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${site.siteMetadata?.siteUrl}"
                        },
                        "description": "${site.siteMetadata.description}"
                    }
                `}</script>
        </Helmet>
        <ImageMeta image={image} />
    </>
}

// "publisher": {
//     "@type": "Organization",
//         "name": "Ghost",
//             "logo": {
//         "@type": "ImageObject",
//             "url": "https://blog.vwa.la/favicon.png",
//                 "width": 60,
//                     "height": 60
//     }
// },


export default WebsiteMeta
