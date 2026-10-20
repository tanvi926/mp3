import styled from "styled-components";

//shared card box
//it is written once here and reused by EducationEntry, ExperienceEntry and SkillsSection.
const Card = styled.div`
    width: 100%;
    max-width: 600px;
    text-align: left;
    background-color: azure;
    border: 2px solid darkred;
    border-radius: 8px;
    padding: 3%;
`;

export default Card;
