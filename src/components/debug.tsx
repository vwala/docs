import styled from "@emotion/styled"

export const ViewportHelper = styled("div")`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    background: red;

    @media (min-width: 768px) { /* Tablet and up */
        background: pink;
    }

    @media (min-width: 1024px) { /* Large devices and up */
        background: blue;
    }
`
