import styled from '@emotion/styled'
import React from 'react'
import { Link } from './Link'

const Root = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    text-shadow: 0 5px 18px rgba(0,0,0,0.1);
    text-rendering: optimizeLegibility;
    color: #FFFFFF;
`

const Logo = () => {
    return <Root>
        <Link to="/" style={{ textDecoration: 'none', color: "#FFFFFF" }}>
            vwa.la
        </Link>
    </Root>
}

export default Logo
