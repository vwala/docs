import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <meta key="cache-control" httpEquiv="Cache-Control" content="max-age=0, must-revalidate" />,
        <meta key="pragma" httpEquiv="Pragma" content="no-cache" />,
        <meta key="expires" httpEquiv="Expires" content="0" />
    ])
}
