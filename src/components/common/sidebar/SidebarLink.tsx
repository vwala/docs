import styled from '@emotion/styled'
import React from 'react'
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

    position: relative;

    ${props => props.active
        ? `::before {
            background: #ccc;
            border-radius: 0 2px 2px 0;
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

const SidebarLink = ({ link, title, active }) => {
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
