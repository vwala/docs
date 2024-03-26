import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Box = ({ children, to, href }) => {

    // Make sure the passed values are numbers and fall back to the defaults
    // const elevationNum = parseInt(elevation) || parseInt(Box.defaultProps.elevation)
    // const radiusNum = parseInt(radius) || parseInt(Box.defaultProps.radius)

    // const baseBoxClass = `bg-white`
    // // Shadow classes
    // const shadowClasses = `shadow-${elevationNum} ${(href || to ? `box-shadow-hover shadow-${elevationNum}-hover` : ``)}`
    // // Border radius clss
    // const radiusClasses = `br${radiusNum}`

    if (to) {
        // internal links
        return (
            <Link
                to={to}

            >
                {children}
            </Link>
        )
    } else if (href) {
        // external links
        return (
            <a
                href={href}

                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        )
    } else {
        // non-link boxes
        return (
            <div>
                {children}
            </div>
        )
    }
}

Box.defaultProps = {
    elevation: `2`,
    radius: `3`,
    onWhite: false,
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    elevation: PropTypes.string,
    radius: PropTypes.string,
    onWhite: PropTypes.bool,
    className: PropTypes.string,
}

export default Box
