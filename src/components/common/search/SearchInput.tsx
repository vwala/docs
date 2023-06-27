import styled from '@emotion/styled'
import React from 'react'
import Icon from '../Icon'

interface RootProps {
    isHome?: boolean
}

const Root = styled.div<RootProps>`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin-bottom: 0;
    max-width: 48rem;
    box-shadow: 0 0 1px rgba(0,0,0,.03), 0 10px 32px -5px rgba(0,0,0,.1); 
    background-color: hsla(0,0%,100%,.2);
    border-radius: 9999px;    

    svg {
        stroke: #FFFFFF;
        padding-left: 10px;
        width: ${props => props.isHome ? "2rem" : "1rem"};

        media screen and (min-width: 44rem) {
            width: ${props => props.isHome ? "2.4rem" : "1.4rem"};
        }
    }

    label {
        clip: rect(1px,1px,1px,1px);
        position: fixed;
        font-size: ${props => props.isHome ? "1.3rem" : "1rem"};
        color: #FFF;
    }

    input {
        background-color: transparent;
        border-color: transparent;
        outline: none;
        transition: border-color .15s linear;
        font-size: ${props => props.isHome ? "1.3rem" : "1rem"};
        font-weight: 300;
        margin-left: 0.8rem;
        color: #FFF;

        ::placeholder {
            font-size: ${props => props.isHome ? "1.1rem" : "0.9rem"};
            color: #FFF;
            font-weight: 300;
        }
    }
`

export const SearchInput = ({ isHome, onClick }) => {
    if (isHome) {
        return (
            <Root isHome={true}>
                <Icon name="Search" />
                <label htmlFor="homesearch">Search</label>
                <input
                    id="homesearch"
                    name="homesearch"
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                    onFocus={onClick}
                    onClick={onClick}
                />
            </Root>
        )
    } else {
        return (
            <Root>
                <Icon name="Search" />
                <label htmlFor="headersearch">Search</label>
                <input
                    id="headersearch"
                    name="headersearch"
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                    onFocus={onClick}
                    onClick={onClick}
                />
            </Root>
        )
    }

    return null
}

export default SearchInput
