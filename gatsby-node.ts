import { GatsbyNode } from "gatsby"
import { createFilePath } from 'gatsby-source-filesystem'
import path from "path"
import { CurrentRelease } from "./src/constants"

// Set up types for our GraphQL queries
interface MdxNode {
    node: {
        id: string
        internal: {
            contentFilePath: string
        }
    }
    previous: {
        id: string
        frontmatter: {
            title: string
        }
    }
    next: {
        id: string
        frontmatter: {
            title: string
        }
    }
}

interface AllMdx {
    allMdx: {
        edges: MdxNode[]
    }
}

// Define createPages function
export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
}) => {
    const { createPage, createRedirect } = actions

    const redirects = [
        { from: "merchant", to: "/merchant/welcome/" },
        { from: "influencer", to: "/influencer/getting-started/" },
        { from: "releases", to: `/releases/${CurrentRelease}/` },
        { from: "user", to: "/user/i-cant-log-in/" }
    ]

    for (var redirect of redirects) {
        createRedirect({
            fromPath: `/${redirect.from}`,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: redirect.to
        })

        createRedirect({
            fromPath: `/${redirect.from}/`,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: redirect.to
        })
    }

    // Query for all Markdown "nodes" and for the slug we added.
    const result = await graphql<AllMdx>(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        internal {
                            contentFilePath
                        }
                    }
                    previous {
                        id
                        frontmatter {
                          title
                        }
                    }
                    next {
                        id
                        frontmatter {
                          title
                        }
                    }
                }
            }
        }
  `)

    if (result.errors) {
        throw result.errors
    }

    const postTemplate = path.resolve(`./src/templates/markdown/post.tsx`)

    const getSlug = (contentFilePath: string): string | null => {
        const regex = /\/([\w-]+)\.mdx$/
        const matches = contentFilePath.match(regex)
        return matches ? matches[1] : null
    }

    const getSection = (contentFilePath: string): string | null => {
        const lastSlashIndex = contentFilePath.lastIndexOf("/")
        const secondLastSlashIndex = contentFilePath.lastIndexOf("/", lastSlashIndex - 1)

        if (lastSlashIndex !== -1 && secondLastSlashIndex !== -1) {
            return contentFilePath.substring(secondLastSlashIndex + 1, lastSlashIndex)
        }

        return null
    }

    result.data?.allMdx.edges.forEach(({ node, previous, next }) => {

        const slug = getSlug(node.internal.contentFilePath)
        const section = getSection(node.internal.contentFilePath)

        createPage({
            path: `/${section}/${slug}`,

            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,

            // Data passed to context is available in page queries as GraphQL variables.
            context: {
                id: node.id,
                slug,
                section,
                previous,
                next
            },
        })
    })
}

export const onCreateNode: GatsbyNode["onCreateNode"] = (props) => {

    const {
        node,
        actions,
        getNode,
    } = props

    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {

        const value = createFilePath({ node, getNode })

        createNodeField({
            node,
            name: `slug`,
            value,
        })

        // Example of derived field passed into page
        createNodeField({
            node,
            name: `timeToRead`,
            value: readingTime(node.body)
        })
    }
}

function readingTime(node: any) {
    return 10
}