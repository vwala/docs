import styled from '@emotion/styled'
import React from 'react'
import { isProduction } from '../../../utils/environment'
import HGroup from '../HGroup'
import { Link } from '../Link'
import Logo from '../Logo'
import { SearchModal } from '../search'


const Root = styled.div`
    padding: 10px 10px 10px 20px;
`

const Header = ({ location }) => {
    return (
        <Root>
            <HGroup style={{ justifyContent: "space-between" }}>
                <Logo />
                {false
                    ? <div>
                        {location?.pathname != "/" && <>
                            <Link to="/merchant">Merchant help</Link>
                            <Link to="/influencer">Influencer help</Link>
                            <Link to="/user">Account help</Link>
                            <Link to="/releases">Product releases</Link>
                        </>}
                    </div>
                    : null
                }
                {!isProduction()
                    ? <div>
                        <SearchModal />
                    </div>
                    : null
                }
            </HGroup>
        </Root>
    )
}

export default Header
