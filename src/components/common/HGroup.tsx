
import styled from "@emotion/styled"
import React from "react"

const HGroupStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`
export interface HGroupProps {
  style?: React.CSSProperties
  onClick?
  children
}

export default function HGroup(props: HGroupProps) {
  return <HGroupStyle onClick={props.onClick} style={props.style}>{props.children}</HGroupStyle>
}