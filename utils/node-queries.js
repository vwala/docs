const defaultMarkdownFields = `
fields {
    slug
}
`


const allMarkdownPosts = function allMarkdownposts(section, fields = defaultMarkdownFields) {
    let regex = `/^(?!/data-schema\/).*(?<!README\/)$/` // eslint-disable-line no-useless-escape
    let sectionFilter = `section: {eq: "${section}"},`
    let query = `
        {
            allMarkdownRemark(
                sort: {order: ASC, fields: [frontmatter___date]},
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

module.exports = {
    allMarkdownPosts: allMarkdownPosts,
}
