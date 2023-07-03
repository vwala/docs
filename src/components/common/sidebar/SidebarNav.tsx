import styled from '@emotion/styled'
import React from 'react'
import SidebarLink from './SidebarLink'
import SidebarList from './SidebarList'
import { getSidebarFile } from './getSidebarFile'

interface SidebarNavProps {
    sidebar
    location
    style?: React.CSSProperties
}

const Root = styled.nav`
  margin: 0;
`

const SidebarNav = (props: SidebarNavProps) => {

    const { sidebar, location, style } = props

    let pathname = location?.pathname || "/"

    const sidebarfile = getSidebarFile(sidebar)

    if (!sidebar || !sidebarfile || !sidebarfile.groups) {
        return null
    }

    return (
        <Root style={style}>
            {sidebarfile.groups.map((group, i) => (
                <div key={i} >
                    {group.items.some(item => (item.link === pathname)) ?
                        // Render a sidebar list with children, if any of the nested elements
                        // matches our current location, so the group needs to
                        <>
                            {/* <h4>
                                {group.items[0].link ?
                                    <SidebarLink link={group.items[0].link} title={group.group} /> //linkClasses="midgrey link" 
                                    : group.group
                                }
                            </h4> */}
                            <SidebarList
                                key={i}
                                items={group.items}
                                location={location}
                            />
                        </>
                        : <h4>
                            {(group.items[0].link
                                ? <SidebarLink link={group.items[0].link} title={group.group} /> //linkClasses="midgrey hover-blue-l2 link" 
                                : null // group.group
                            )}
                        </h4>}
                </div>
            ))}
        </Root>
    )
}

export default SidebarNav
