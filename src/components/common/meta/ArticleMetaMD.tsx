import React from 'react'
import Helmet from 'react-helmet'
import { MdxProps, SiteMetaProps } from '../../../queries/queries'

interface ArticleMetaProps {
    data: {
        site: SiteMetaProps
        mdx: MdxProps
    }
    // canonical
    image: string
}

const ArticleMetaMD = (props: ArticleMetaProps) => {

    const { data, image } = props
    const post = data.mdx
    const fm = post.frontmatter
    const { siteMetadata } = data.site

    // Convert the frontmatter date into ISO String but, and use a fixed
    // date, if no date is set. The published date should not change once set.
    // const publishedAtISODate = fm.date ? new Date(fm.date).toISOString() : new Date(`2018-10-15`).toISOString()
    // const primaryTag = fm.keywords && fm.keywords.length ? fm.keywords[0] : null
    // const seoImage = getMetaImageUrls()


    // TODO from insdie <script type="application/ld+json">{`
    // ${fm.keywords && fm.keywords.length ? `"keywords": "${_.join(fm.keywords, `, `)}",` : ``}
    // // "datePublished": "${publishedAtISODate}",
    // "url": "${canonical}",

    return (
        <>
            <Helmet>
                <title>{fm.meta_title || fm.title || siteMetadata.title}</title>
                <meta name="description" content={fm.meta_description || siteMetadata.title} />
                {/* <link rel="canonical" href={canonical} /> */}

                <meta property="og:site_name" content={siteMetadata.title} />
                <meta name="og:type" content="article" />
                <meta name="og:title" content={fm.meta_title || fm.title} />
                <meta name="og:description" content={fm.meta_description || siteMetadata.description} />
                {/* <meta property="og:url" content={canonical} /> */}
                {/* <meta property="article:published_time" content={publishedAtISODate} /> */}
                {fm.keywords && fm.keywords.length ? fm.keywords.map((keyword, i) => (<meta property="article:tag" content={keyword} key={i} />)) : null}
                <meta property="article:author" content="https://www.facebook.com/ghost/" />

                <meta name="twitter:title" content={fm.meta_title || fm.title} />
                <meta name="twitter:description" content={fm.meta_description || siteMetadata.description} />
                {/* <meta name="twitter:url" content={canonical} /> */}
                <meta name="twitter.label1" content="Reading time" />
                {/* <meta name="twitter:data1" content={`${post.timeToRead} min read`} /> */}
                {/* {primaryTag ? <meta name="twitter:label2" content="Filed under" /> : null}
                {primaryTag ? <meta name="twitter:data2" content={primaryTag} /> : null} */}
                <meta name="twitter:site" content="@vwalamarketing" />
                <meta name="twitter:creator" content="@vwalamarketing" />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "Article",
                        "author": {
                            "@type": "Person",
                            "name": "Ghost",
                            "sameAs": [
                                "https://vwa.la/",
                                "https://twitter.com/vwalamarketing/"
                            ]
                        },
                        "headline": "${fm.meta_title || fm.title}",
                        "image": {
                            "@type": "ImageObject",
                            "url": "${image}",
                            "width": 1000,
                            "height": 563
                        },
                        "description": "${fm.meta_description || siteMetadata.description}",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${siteMetadata.siteUrl}"
                        }
                    }
                `}</script>
            </Helmet>
            {/* <ImageMeta image={image} /> */}
        </>
    )
}

export default ArticleMetaMD
