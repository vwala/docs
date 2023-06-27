import styled from '@emotion/styled'
import React from 'react'
import VGroup from '../VGroup'

const Root = styled.div`
    margin-top: 50px;
    padding: 1.5rem;
`

const Footer = () => (
    <Root>
        <VGroup>
            <div style={{ marginBottom: 10, fontWeight: 600 }}>Support</div>
            <div style={{ marginBottom: 10 }}>Existing users: <a href="https://www.vwa.la/#/dashboard" >Log in</a> and use our in-app chat</div>
            <div style={{ marginBottom: 10 }}>New users: <a href="mailto:support@vwa.la" >support@vwa.la</a></div>
        </VGroup>
    </Root>
)

export default Footer
