import styled from "styled-components";

// dark red bar holding the name + tagline
const StyledHeader = styled.header`
    background-color: darkred;
    padding: 4% 5%; 
    
    h1, h3 {
        color: azure;
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

// Header component: written once, rendered on every page from App.tsx
export default function Header() {
    return (
        <StyledHeader>
            <h1>Tanvi Khandelwal</h1>
            <h3>My Online Resume</h3>
        </StyledHeader>
    );
}
