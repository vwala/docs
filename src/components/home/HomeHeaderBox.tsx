import styled from '@emotion/styled'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Link } from 'gatsby'
import React from 'react'
import HGroup from '../common/HGroup'
import Icon, { MuiIcon, SvgIconMap } from '../common/Icon'

interface RootProps {
    colour: string
}

const Root = styled.div<RootProps>`

    // Grid child sizing
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 30%;
    }

    @media screen and (min-width: 1024px) {
        width: 25%;
    }

    display: flex;
    flex-direction: column;
    background-color: #FFF;
    padding: 2rem;
    box-shadow: 0 0 5px rgba(0,0,0,.02), 0 5px 22px -6px rgba(0,0,0,.1), 0 -12px 35px -19px rgba(0,0,0,.2);
    transition: all .8s ease;
    border-radius: 0.8rem;
    text-decoration: none;
    // font-size: 1.35rem;

    @media screen and (min-width: 44rem) {
        padding: 3rem;
    }

    // First child level svg tags only
    > a > svg {
        stroke-width: 1.35px;
        stroke: ${props => props.colour};
        width: 2.5rem;

        @media screen and (min-width: 44rem) {
         width: 3.5rem;        
        }
    }
`

const Heading = styled.h3`
    font-weight: 600;
`

const SubHeading = styled.h4`
    
    color: #738a94;
    font-weight: normal;
`

interface HomeHeaderBoxProps {
    to
    title: string
    colour?: string
    icon: keyof typeof SvgIconMap
    children
}

const HomeHeaderBox = (props: HomeHeaderBoxProps) => {

    const { to, title, colour, icon, children } = props

    return <Root colour={colour ?? "inherit"}>
        <Link to={to} >
            <Icon name={icon} />
            <Heading>{title}</Heading>
            <SubHeading>{children}</SubHeading>
            <HGroup>
                <div>Learn more&nbsp;</div>
                <MuiIcon>
                    <KeyboardArrowRightIcon style={{ color: "black", stroke: "black" }} />
                </MuiIcon>
            </HGroup>
        </Link>
    </Root>
}


export default HomeHeaderBox
