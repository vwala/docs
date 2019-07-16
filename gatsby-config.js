const postcssCustomMedia = require(`postcss-custom-media`)
const autoprefixer = require(`autoprefixer`)
const cssVariables = require(`postcss-css-variables`)
const colorModFunction = require(`postcss-color-mod-function`)
const cssNano = require(`cssnano`)
const customProperties = require(`postcss-custom-properties`)
const easyImport = require(`postcss-easy-import`)
const algoliaQueries = require(`./utils/algolia-queries`)
const path = require(`path`)

require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})


const SERVICE_WORKER_KILL_SWITCH = (process.env.SERVICE_WORKER_KILL_SWITCH === `true`) || false

const plugins = [
    /**
     *  Content Plugins
     */
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: path.join(__dirname, `content`),
            name: `markdown-pages`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: path.join(__dirname, `src`, `images`),
            name: `images`,
        },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
                `gatsby-remark-autolink-headers`,
                `gatsby-remark-code-titles`,
                `gatsby-remark-prismjs`, // TODO: make aliases work!
                `gatsby-remark-external-links`,
            ],
        },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    // {
    //     resolve: 'gatsby-plugin-intercom-spa',
    //     options: {
    //         app_id: 'dmj68kq8',
    //         include_in_development: true,
    //     }
    // },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "91424010-2",
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is optional
            // anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            // exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Enables Google Optimize using your container Id
            // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
            // Enables Google Optimize Experiment ID
            // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
            // Set Variation ID. 0 for original 1,2,3....
            // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
            // Any additional create only fields (optional)
            sampleRate: 5,
            siteSpeedSampleRate: 10,
            // cookieDomain: "docs.vwa.la",
        },
    },
    /**
     *  Utility Plugins
     */
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `vwa.la help`,
            short_name: `vwa.la`,
            start_url: `/`,
            background_color: `#343f44`,
            theme_color: `#343f44`,
            display: `minimal-ui`,
            icon: `static/favicon.png`,
        },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-force-trailing-slashes`,
    /**
     *  Display Plugins
     */
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
            postCssPlugins: [
                autoprefixer({ browsers: [`last 2 versions`] }),
                easyImport(),
                cssVariables(),
                colorModFunction(),
                customProperties({ preserve: false }),
                postcssCustomMedia(),
                cssNano({ zindex: false }),
            ],
        },
    },
    {
        resolve: `gatsby-plugin-react-svg`,
        options: {
            rule: {
                include: /icons/,
            },
        },
    },
]

const runAlgoliaBuild = () => (process.env.INCOMING_HOOK_TITLE && process.env.INCOMING_HOOK_TITLE === `Algolia`) || process.env.ALGOLIA
const hasAlgoliaKey = () => process.env.ALGOLIA_ADMIN_KEY && !process.env.ALGOLIA_ADMIN_KEY.match(/<key>/)

if (runAlgoliaBuild() && hasAlgoliaKey()) {
    console.warn("Doing Algolia", process.env.ALGOLIA_ADMIN_KEY)
    plugins.push({
        resolve: `gatsby-plugin-algolia`,
        options: {
            appId: `GD4R5A2X23`,
            apiKey: `${process.env.ALGOLIA_ADMIN_KEY}`,
            queries: algoliaQueries,
            chunkSize: 10000, // default: 1000
        },
    })
}

// Global switch to either use or remove service worker
if (SERVICE_WORKER_KILL_SWITCH) {
    console.log(`Remove service worker plugin`)
    plugins.push(`gatsby-plugin-remove-serviceworker`)
} else {
    console.log(`Install service worker plugin`)
    plugins.push(`gatsby-plugin-offline`)
}


module.exports = {
    pathPrefix: "/docs",
    siteMetadata: {
        title: `vwa.la help`,
        siteUrl: process.env.SITE_URL || `https://docs.vwa.la`,
        description: `Everything you need to know about the vwa.la influencer marketing platform.`,
    },
    plugins: plugins,
}
