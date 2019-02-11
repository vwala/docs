import { Link } from "gatsby";
import PropTypes from 'prop-types';
import React from 'react';
import { Logo } from ".";
import { Spirit } from '../../styles/spirit-styles';
import { SearchModal } from './search';

const NavBar = ({ theme, location }) => {
    // Theme definitions
    const themeClasses = {
        dark: {
            menuItem: `middarkgrey-l1 link hover-blue nowrap`,
            logoTheme: `dark`,
            docsTitleClass: `blue`,
            searchBox: `bg-darkgrey-searchbar middarkgrey dark-placeholder`,
            icon: `fill-midlightgrey`,
        },
        light: {
            menuItem: Spirit.link.white,
            logoTheme: `light`,
            docsTitleClass: `white`,
            searchBox: `bg-white-10 white white-placeholder`,
            icon: `fill-white`,
        },
    }

    return (
        <nav className={`${Spirit.page.xl} flex flex-auto flex-nowrap items-center justify-between pt2 pb2`} data-cy="header-navigation">
            <div className="flex items-center pt3 pb3 nudge-bottom--2 w-sidebar-l pr8">
                <Logo theme={theme} />
                {/* <div>{location ? location.pathname : "no route 2"}</div> */}
                {/* <Link to="/" className={`${themeClasses[theme].docsTitleClass} gh-nav-logo-suffix relative ma0 ml4 pa0 pl4 f6 lh-1-5 fw4 link nudge-top--1`}>Docs</Link> */}
            </div>
            <div className="dn flex-ns flex-auto items-center overflow-x-auto mr12 mr0-l ml5 ml0-l">
                {location && location.pathname && <>
                    <Link to="/merchant" className={`${themeClasses[theme].menuItem} nowrap f8 pa3 mr1 mr3-l nl3`}>Merchant help</Link>
                    <Link to="/influencer" className={`${themeClasses[theme].menuItem} nowrap f8 pa3 mr1 mr3-l nl3`}>Influencer help</Link>
                    <Link to="/user" className={`${themeClasses[theme].menuItem} nowrap f8 pa3 mr1 mr3-l nl3`}>Account help</Link>
                    <Link to="/releases" className={`${themeClasses[theme].menuItem} nowrap f8 pa3 mr1 mr3-l nl3`}>Product releases</Link>
                </>}
            </div>
            <div className="relative pl3">
                <SearchModal theme={themeClasses[theme]} />
            </div>
        </nav>
    )
}

NavBar.defaultProps = {
    theme: `dark`,
}

NavBar.propTypes = {
    theme: PropTypes.oneOf([`dark`, `light`]),
    location: PropTypes.string
}

export default NavBar
