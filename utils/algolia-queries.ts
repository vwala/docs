import { fragmentTransformer } from "./algolia-transforms"

export const markdownQueryConfig = [
    {
        section: `merchant`,
        indexName: `merchant`,
        niceName: `Merchant help`,
    },
    {
        section: `influencer`,
        indexName: `influencer`,
        niceName: `Influencer help`,
    }
]

export const SearchConfig = {
    defaultMarkdownSection: `merchant`,
    markdownQueryConfig,
    searchConfig: markdownQueryConfig
        .reduce((acc, { indexName, niceName }) => {
            acc[indexName] = niceName
            return acc
        }, {}),
}


///////////////

const defaultMarkdownFields = `
    fields {
        slug
    }
`

// function allMarkdownPosts(section, fields = defaultMarkdownFields) {
//     // {order: ASC, fields: [frontmatter___date]},
//     let regex = `/^(?!/data-schema\/).*(?<!README\/)$/` // eslint-disable-line no-useless-escape
//     let sectionFilter = `section: {eq: "${section}"},`
//     let query = `
//         {
//             allMdx(
//                 sort: {frontmatter: {rank: ASC}},
//                 filter: {fields: {
//                     slug: {regex: "${regex}"},
//                     ${section ? sectionFilter : ``}
//                 }}
//             ) {
//                 edges {
//                     node {
//                         ${fields}
//                     }
//                 }
//             }
//         }
//     `

//     return query
// }

function allMarkdownPosts(section, fields = defaultMarkdownFields) {
    // {order: ASC, fields: [frontmatter___date]},
    let regex = `/^(?!/data-schema\/).*(?<!README\/)$/` // eslint-disable-line no-useless-escape
    let sectionFilter = `section: {eq: "${section}"},`
    let query = `
        {
            allMdx(
                sort: {frontmatter: {rank: ASC}},
                filter: {fields: {
                    slug: {regex: "${regex}"},
                    ${section ? sectionFilter : ``}
                }}
            ) {
                edges {
                    node {
                        ${fields}
                    }
                }
            }
        }
    `

    return query
}

const algoliaMarkdownFields = `
    objectID:id
    fields {
        slug
        section
    }
    frontmatter {
        title
        image
    }
    html
`

const mdNodeMap = ({ node }) => {

    // Flatten fields
    node.slug = node.fields.slug
    node.section = node.fields.section
    node.title = node.frontmatter.title
    // @TODO make this consistent?!
    node.url = node.slug

    delete node.frontmatter
    delete node.fields

    return node
}


const mdQueries = markdownQueryConfig.map(({ section, indexName }) => {
    return {
        query: allMarkdownPosts(section, algoliaMarkdownFields),
        indexName,
        transformer: ({ data }) => {
            console.log({ data })
            return data.allMarkdownRemark.edges.map(mdNodeMap).reduce(fragmentTransformer, [])
        },

    }
})

export default mdQueries
