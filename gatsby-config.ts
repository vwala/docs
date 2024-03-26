import { GatsbyConfig } from "gatsby"
import algoliaQueries from "./utils/algolia-queries"

declare var process: {
  env: any
}

const config: GatsbyConfig = {
  // pathPrefix: "/",
  siteMetadata: {
    title: `vwa.la help`,
    siteUrl: `https://help.vwa.la`,
    description: `Everything you need to know about the vwa.la influencer marketing platform.`,
    // image: `/gatsby-icon.png`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            // @see https://fonts.google.com/specimen/Inter
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap`,
          },
          {
            // @see https://fonts.google.com/specimen/Poppins
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["91424010-2"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          // anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/.*\.svg/,
        }
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            require(`remark-gfm`)
            //wrapESMPlugin(`remark-gfm`), TODO
          ],
          rehypePlugins: [
            // @see https://nickymeuleman.netlify.app/blog/table-of-contents#add-css-ids-to-all-headings
            // @see https://paulie.dev/posts/2022/08/mdx-esm-rehype-packages/
            require('rehype-slug'),
            [require('rehype-autolink-headings'), {
              behavior: 'wrap',
              properties: {
                class: 'autolinked-header',
                style: {
                  color: "inherit"
                }
              },
            }]
          ]
        }
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./src/content/"
      },
      __key: "content"
    }
  ]
}


// @see https://www.gatsbyjs.com/plugins/gatsby-plugin-algolia/
// @see https://www.gatsbyjs.com/docs/adding-search-with-algolia/
const runAlgoliaBuild = () => (process.env.INCOMING_HOOK_TITLE && process.env.INCOMING_HOOK_TITLE === `Algolia`) || process.env.ALGOLIA
const hasAlgoliaKey = () => process.env.ALGOLIA_ADMIN_KEY && !process.env.ALGOLIA_ADMIN_KEY.match(/<key>/)

if (runAlgoliaBuild() && hasAlgoliaKey() && false) {
  console.warn("Doing Algolia", process.env.ALGOLIA_ADMIN_KEY)
  config.plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: `GD4R5A2X23`,
      apiKey: `${process.env.ALGOLIA_ADMIN_KEY}`,
      queries: algoliaQueries,
      chunkSize: 10000, // default: 1000
    }
  })
}


export default config
