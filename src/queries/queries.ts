import { graphql } from 'gatsby'

// export const PostIndexFragment = graphql`
//     fragment PostIndexFields on Mdx {
//         id
//         frontmatter {
//             date(formatString: "Do MMMM YYYY")
//             title
//             slug
//             tags
//             rank
//             description
//         }
//     }
// `

// export const PostFragment = graphql`
//     fragment PostFields on Mdx {
//         id
//         body
//         tableOfContents
//         frontmatter {
//             date(formatString: "Do MMMM YYYY")
//             title
//             slug
//             tags
//             rank
//             description
//         }
//     }
// `

export interface MdxProps {
    id: string
    body: string
    tableOfContents
    frontmatter: {
        rank: number
        title: string
        sidebar: string
        keywords: string[]
        meta_description: string
        meta_title: string
    }
}

export interface MxdFrontmatterImageBytes {
    frontmatter: {
        image: {
            childImageSharp: {
                gatsbyImageData
            }
        }
    }
}

export interface MxdFrontmatterImagePath {
    image: string
}


export interface PostsIndexQueryResult {
    allMdx: {
        edges: {
            node: Omit<MdxProps, "body"> & MxdFrontmatterImageBytes
        }[]
    }
}

export interface PostsQueryResult {
    allMdx: {
        edges: {
            node: MdxProps
        }[]
    }
}

///////////////// TODO from query file 

// Query to read all markdown files
export const siteMetaFields = graphql`
    fragment SiteMetaFields on Site {
        siteMetadata {
            title
            description
        }
    }
`

// export const markdownFields = graphql`
//     fragment MarkdownFields on Mdx {
//         frontmatter {
//             title
//             date
//             date_pretty: date(formatString: "DD MMMM, YYYY")
//             path
//             meta_title
//             meta_description
//             image
//             next {
//                 url
//                 title
//                 description
//             }
//             sidebar
//             toc
//             keywords
//         }
//         html
//         fields {
//             slug
//         }
//         timeToRead
//         excerpt
//     }
// `

export const markdownFields = graphql`
    fragment MarkdownFields on Mdx {
        id
        tableOfContents
        frontmatter {
            keywords
            meta_description
            meta_title
            rank
            sidebar
            title
        }
    }
`

