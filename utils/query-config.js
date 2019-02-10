const ghostQueryConfig = [
    // {
    //     tag: `hash-faq`,
    //     section: `faq`,
    //     niceName: `FAQ`,
    //     template: `./src/templates/ghost/faq.js`,
    //     tagsTemplate: `./src/templates/ghost/faq-archive.js`,
    //     indexName: `faq`,
    // },
    // {
    //     tag: `hash-tutorial`,
    //     section: `tutorials`,
    //     niceName: `Tutorials`,
    //     template: `./src/templates/ghost/tutorial.js`,
    //     tagsTemplate: `./src/templates/ghost/tutorial-archive.js`,
    //     indexName: `tutorial`,
    // },
    // {
    //     tag: `hash-integration`,
    //     section: `integrations`,
    //     niceName: `Integrations`,
    //     template: `./src/templates/ghost/integration.js`,
    //     tagsTemplate: `./src/templates/ghost/integration-archive.js`,
    //     indexName: `integration`,
    // },
]

const markdownQueryConfig = [
    // {
    //     section: `concepts`,
    //     indexName: `concept`,
    //     niceName: `Concepts`,
    // },
    // {
    //     section: `setup`,
    //     indexName: `setup`,
    //     niceName: `Setup Guide X`,
    // },
    // {
    //     section: `api`,
    //     indexName: `api`,
    //     niceName: `API Reference`,
    // },
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
    // {
    //     section: `user`,
    //     indexName: `user`,
    //     niceName: `User account help`,
    // }
]

module.exports = {
    defaultMarkdownSection: `merchant`,
    markdownQueryConfig,
    ghostQueryConfig,
    searchConfig: markdownQueryConfig
        .concat(ghostQueryConfig)
        .reduce((acc, { indexName, niceName }) => {
            acc[indexName] = niceName
            return acc
        }, {}),
}
