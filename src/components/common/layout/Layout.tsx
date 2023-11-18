import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { isProduction } from '../../../utils/environment'
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
    background: ghostwhite;
`

const globalStyles = css`

    body {
        margin: 0;
        font-family: Inter;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "kern";
        line-height: 1.5;
        font-weight: 400;
        font-size: 0.9rem;
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
        font-weight: 400;        
    }

    h4 {
        // font-weight: 300;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
    }    

    h5 {
        // font-weight: 400;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
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

    code {
        background: #e5eff5;
        border-radius: 5px;
        line-height: 1em;
        padding: 0 5px 2px;
        white-space: pre-wrap;
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
            {!isProduction()
                ? <ViewportHelper />
                : null
            }
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
