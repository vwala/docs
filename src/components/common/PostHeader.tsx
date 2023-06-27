import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { getPostHeaderConfig } from '../../utils/getPostHeaderConfig'

const PostHeader = ({ location }) => {
    const { title, subtitle, bgClass, mainLink, subLink } = getPostHeaderConfig(location)

    if (title) {
        return (
            <div>
                <div>
                    <h1>
                        <Link to={mainLink} >{title}</Link>
                        {subtitle ? <Link to={subLink} >{subtitle}</Link> : null}
                    </h1>
                </div>
            </div>
        )
    } else {
        return null
    }
}

PostHeader.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default PostHeader
