import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: darkred;
    padding: 3% 5%;
    text-align: center;
    color: azure;

    a {
        color: gold; 
    }
`;

//Footer component: written once, rendered on every page from App.tsx
export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Tanvi Khandelwal <a href="#">Credits</a> &#169;</p>
        </StyledFooter>
    );
}
