
import styled from "@emotion/styled"
import React from "react"

const VGroupStyle = styled("div")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export interface VGroupProps {
  style?: React.CSSProperties
  children
}

export default function VGroup(props: VGroupProps) {
  return <VGroupStyle style={props.style}>{props.children}</VGroupStyle>
}