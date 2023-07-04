import styled from '@emotion/styled'
import React from 'react'
import { Link } from '../Link'
import VGroup from '../VGroup'

const Root = styled.div`
    margin-top: 50px;
    padding: 2rem;
    border-top: 2px dotted #e7e7e7;
`

const Footer = () => (
    <Root>
        <VGroup style={{ alignItems: "center" }}>
            <div style={{ marginBottom: 10, fontWeight: 600 }}>Support</div>
            <div style={{ marginBottom: 10 }}>Existing users: <Link href="https://www.vwa.la/#/dashboard">Log in</Link> &amp; use our in-app chat</div>
            <div style={{ marginBottom: 10 }}>New users: <Link href="mailto:support@vwa.la">support@vwa.la</Link></div>
        </VGroup>
    </Root>
)

export default Footer
