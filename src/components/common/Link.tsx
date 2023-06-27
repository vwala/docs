import styled from "@emotion/styled"
import { Link as InternalLink } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { cyan2, cyan3 } from "../../utils/colour"
import { stripHttp } from "../../utils/string"

export const LinkColour = cyan2

const UntyledLocalLink = styled(InternalLink)`
    color: inherit;
`

const StyledLocalLink = styled(InternalLink)`
    color: ${cyan2};
`

const StyledOutboundLink = styled(OutboundLink)`
    color: ${cyan3};
`

export function Link(props) {
    return <StyledLocalLink {...props} />
}
export function UnstyledLink(props) {
    return <UntyledLocalLink {...props} />
}

// @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-gtag/src/index.js
export function RemoteLink(props) {

    const label = stripHttp(props?.children?.props?.href)

    return <StyledOutboundLink target="blank" href={props.children.props.href}>
        {label}
    </StyledOutboundLink>
}

