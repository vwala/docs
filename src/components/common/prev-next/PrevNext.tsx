import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Link } from 'gatsby'
import React from 'react'
import { trim } from '../../../utils/string'
import HGroup from '../HGroup'
import { MuiIcon } from '../Icon'

interface PrevNextProps {
    link: string
    title: string
    group?: string
    description: string
}

const PrevNext = (props: { prev?: PrevNextProps, next?: PrevNextProps }) => {

    const { prev, next } = props

    return <HGroup style={{ justifyContent: "space-between" }}>
        {
            prev ?
                <Link to={prev.link} >
                    <HGroup>
                        <MuiIcon><KeyboardArrowLeftIcon /></MuiIcon>
                        <strong>{trim(prev.title)}</strong>
                    </HGroup>
                </Link>
                : <div></div>
        }
        {
            next ?
                <Link to={next.link} >
                    <HGroup>
                        <strong>{trim(next.title)}</strong>
                        <MuiIcon><KeyboardArrowRightIcon /></MuiIcon>
                    </HGroup>
                </Link>
                : <div></div>
        }
    </HGroup >
}

export default PrevNext
