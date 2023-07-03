import styled from '@emotion/styled'
import React from 'react'
import { cyan2 } from '../../../utils/colour'
import { Link } from '../Link'

interface LinkProps {
    active?: boolean
}

const StyledA = styled.a<LinkProps>`    

    ::before {
        background: #0dd;
        border-radius: 0 2px 2px 0;
        bottom: 0.8rem;
        content: "";
        display: block;
        left: -2.4rem;
        position: absolute;
        top: 0.7rem;
        width: 4px;
    }
`

const StyledLink = styled(Link) <LinkProps>`    

    color: inherit;
    position: relative;

    ${props => props.active
        ? `::before {
            background: ${cyan2};
            // border-radius: 0 2px 2px 0;
            bottom: 0.8rem;
            content: "";
            display: block;
            left: -1.3rem;
            position: absolute;
            // top: 0.7rem;
            top: 0px;
            width: 4px;
            height: 100%;
        }`
        : null
    }
`

interface SidebarLinkProps {
    link: string
    title: string
    active?: boolean
}

const SidebarLink = (props: SidebarLinkProps) => {
    const { link, title, active } = props
    if (link) {
        if (link.match(/^\s?http(s?)/gi)) {
            // use anchor links for external links
            return <StyledA active={active} href={link} target="_blank" rel="noopener noreferrer">{title}</StyledA>
        } else {
            return <StyledLink active={active} to={link}>{title}</StyledLink>
        }
    } else {
        return (
            <>{title}</>
        )
    }
}

export default SidebarLink
