import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ViewportHelper } from '../../debug'
import { Link, RemoteLink } from '../Link'
import VGroup from '../VGroup'
import { SearchWrapper } from '../search'
import Footer from './Footer'


const markdownRenderers = {
    table: (props: any) => (
        <div style={{ width: "100%", overflowX: "auto" }} {...props}>
            {props.children}
        </div>
    ),
    a: Link,
    OutboundLink: RemoteLink
}


const Root = styled("div")`

`

const globalStyles = css`

    body {
        margin: 0;
        font-family: Inter;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "kern";
        line-height: 1.5;
        font-weight: 400;
        font-size: 0.95rem;
        color: #00001E;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @media screen and (min-width: 1024px) {
        // font-size: 1.125rem;
        line-height: 1.7777778;
    }

    @media screen and (min-width: 640px) {
        // font-size: 1rem;
        line-height: 1.75;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Poppins";
        // font-weight: 600;
    }

    h1 {
        // font-size: 2.5rem;
        font-weight: 600;
    }

    h2 {
        // font-size: 2.1rem;
        font-weight: 500;
    }

    h3 {
        // font-size: 1.8rem;
        font-weight: 400;
    }

    h3 {
        // font-size: 1.8rem;
        font-weight: 300;
    }

    summary {
        text-transform: uppercase;
        font-weight: bold;
    }

    ol, ul {
        padding-inline-start: 20px;
    }

    table {
        border-collapse: collapse;
        text-indent: initial;
        border-spacing: 2px;
        width: 100%;
    }

    thead tr {
        border-top: none;
        border-bottom: none !important;
    }

    thead th {
        border-top: none;
        border-bottom: none !important;
    }

    th {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        text-align: left;
    }

    td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    img {
        width: 100%;
        height: auto;
    }
`

interface DefaultLayoutProps {
    location?: Location
    children
    style?: React.CSSProperties
    bodyClass?: string
    mainClass?: string
    header?: React.ReactElement
    headerDividerStyle?: 'hairline' | 'shadow'
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
    children,
    style
}) => (
    <>
        <Root style={style}>
            <Global styles={globalStyles} />
            <ViewportHelper />
            {/* <Helmet>
                <html lang="en"  />
                <body />
            </Helmet> */}

            <SearchWrapper>
                {/* {header || <Header location={location} />} */}
                <VGroup>
                    <MDXProvider components={markdownRenderers}>{children}</MDXProvider>
                </VGroup>
                <Footer />
            </SearchWrapper>
        </Root>
    </>
)


export default DefaultLayout
