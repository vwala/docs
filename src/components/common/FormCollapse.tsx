import styled from '@emotion/styled'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import React, { ReactElement, useState } from 'react'
import HGroup from './HGroup'

interface IconProps {
    rotate: boolean
}

interface ContentProps {
    expanded: boolean
}

const Icon = styled.div<IconProps>`
    display: flex;
    flex-shrink: 1;
    transition: transform 0.5s;
    transform: rotate(${props => props.rotate ? '180deg' : '0deg'});

`

const Content = styled.div<ContentProps>`
    overflow: hidden;
    max-height: ${props => props.expanded ? '1000px' : '0px'};
    transition: max-height 0.5s ease-in-out;
`

interface FormCollapseProps {
    open?: boolean
    header?: ReactElement | string
    children
}

const FormCollapse = (props: FormCollapseProps) => {

    const { children, header, open } = props

    const [isExpanded, setIsExpanded] = useState(open)

    return (
        <div>
            <HGroup onClick={() => setIsExpanded(!isExpanded)}>
                <div style={{ pointerEvents: "none", cursor: "pointer" }}>{header}</div>
                <Icon rotate={isExpanded} >
                    {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </Icon>
            </HGroup>
            <Content expanded={isExpanded}>
                {children}
            </Content>
        </div>
    )
}

export default FormCollapse
