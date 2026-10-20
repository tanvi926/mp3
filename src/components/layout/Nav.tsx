import styled from "styled-components";
import { Link } from "react-router-dom";

//takes 30% of the row on wide screens, full width on narrow ones
const StyledNav = styled.nav`
    width: 30%;
    background-color: darkred;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const NavList = styled.ul`
    list-style: none; /* removes the bullet points */
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* nav links go horizontal instead of vertical on narrow screens */
    @media screen and (max-width: 750px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

// each nav "button"
const NavItem = styled.li`
    border: solid azure 3px;
    text-align: center;
    margin: 1% 1% 10% 1%;
    padding: 15px;
    background-color: azure;

    @media screen and (max-width: 750px) {
        margin: 0; /* removes the vertical spacing used in the column layout */
        padding: 8px 10px;
    }
`;

//keeps React Router's Link behaviour
const StyledLink = styled(Link)`
    text-decoration: none; /* removes the default underline */
    font-size: calc(8px + 1vw);
    color: midnightblue;
    display: block; /* makes the whole tile clickable */

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1vw); 
    }
`;

// Nav component: written once, rendered on every page from App.tsx.
// <Link to=""> replaces <a href="">, so pages switch without reloading.
export default function Nav() {
    return (
        <StyledNav>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="/skills">Skills</StyledLink></NavItem>
                <NavItem><StyledLink to="/experiences">Experience</StyledLink></NavItem>
                <NavItem><StyledLink to="/references">References</StyledLink></NavItem>
                <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
            </NavList>
        </StyledNav>
    );
}