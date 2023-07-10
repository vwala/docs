import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'
import SidebarLink from './SidebarLink'

const StyledList = styled.ul`    

    position: relative;
    list-style-type: none;
    margin: 0;

    ::before {
        background: #e5eff5;
        bottom: 7px;
        content: "";
        display: block;
        left: 0;
        position: absolute;
        top: 7px;
        width: 1px;
    }
`

const StyledListItem = styled.li`    
    // position: relative;
    padding-bottom: 6px;
    padding-top: 6px;
}
`

const SidebarList = ({ items, location }) => {

    return (
        <StyledList>
            {items.map((item, j) => (
                <StyledListItem key={j}>
                    <SidebarLink
                        link={item.link}
                        title={item.title}
                        active={(item.link == location.pathname)}
                    />
                    {/* <div>{(item.link === location.pathname).toString()}</div> */}
                </StyledListItem>
            ))}
        </StyledList>
    )
}

SidebarList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default SidebarList
