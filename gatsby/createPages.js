const Promise = require(`bluebird`)
const path = require(`path`)
const _ = require(`lodash`)
const { allMarkdownPosts } = require(`../utils/node-queries`)
// const urlUtils = require(`../utils/urls`)
// const getRelatedPosts = require(`../utils/getRelatedPosts`)

module.exports = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { createRedirect } = actions
    const queryPromises = []

    // Redirects to ensure first article selected by default
    createRedirect({
        fromPath: `/merchant`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/merchant/welcome/`,
    })

    createRedirect({
        fromPath: `/influencer`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/influencer/getting-started/`,
    })

    createRedirect({
        fromPath: `/releases`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/releases/2023-05-16/`
    })

    createRedirect({
        fromPath: `/user`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/user/i-cant-log-in/`,
    })

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(allMarkdownPosts())
            .then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    const DocTemplate = path.resolve(`./src/templates/markdown/post.js`)

                    createPage({
                        path: node.fields.slug,
                        component: DocTemplate,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                            section: node.fields.section,
                        },
                    })
                    return resolve()
                })
            })
    }))

    return Promise.all(queryPromises)
}
