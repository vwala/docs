import React, { FC } from 'react'


import ArrowLeft from '../../images/icons/arrow-left.svg'
import ArrowRight from '../../images/icons/arrow-right.svg'
import Blocks from '../../images/icons/blocks.svg'
import Close from '../../images/icons/close.svg'
import Rocket from '../../images/icons/rocket.svg'
import Sdks from '../../images/icons/sdks.svg'
import Search from '../../images/icons/search.svg'

export const SvgIconMap = {
    Rocket,
    Blocks,
    Sdks,
    ArrowLeft,
    ArrowRight,
    Search,
    Close
}

interface IconProps {
    name: keyof typeof SvgIconMap
    className?: string
    style?: React.CSSProperties
}

const Icon: FC<IconProps> = ({ name, style }) => {
    const SvgIcon = SvgIconMap[name]
    return SvgIcon ? <SvgIcon style={style} /> : null
}


export const MuiIcon = ({ children }) => {
    return <div style={{ display: "flex", flexShrink: 1, alignItems: "center" }} >
        {children}
    </div>
}

export default Icon
