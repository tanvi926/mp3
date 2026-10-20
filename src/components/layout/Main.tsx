import styled from "styled-components";
import type { ReactNode } from "react";

//main content column
const StyledMain = styled.main`
    width: 70%;
    font-size: calc(5px + 1vw);
    text-align: center;
    padding: 2%;
    display: flex;
    flex-direction: column; 
    gap: 20px;
    align-items: center;

    /* main switches to full width below 1000px */
    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 750px) {
        gap: 15px;
    }
`;

//Main component: the only part of the layout whose content changes.
export default function Main(props: { children: ReactNode }) {
    return <StyledMain>{props.children}</StyledMain>;
}
