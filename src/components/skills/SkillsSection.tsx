import styled from "styled-components";
import Card from "../shared/Card.tsx";

//shape of the props for one skills card (a heading + a list of skills).
//exported so the Skills page can use the same shape for its data array.
export interface SkillGroup {
    heading: string;
    skills: string[];
}

const SkillsList = styled.ul`
    padding-left: 20px; /* brings the bullets back inside the card */
`;

// a heading plus a list of skills
export default function SkillsSection(props: SkillGroup) {
    return (
        <Card>
            <h3>{props.heading}</h3>
            <SkillsList>
                {
                    props.skills.map((skill: string) =>
                        <li key={skill}>{skill}</li>
                    )
                }
            </SkillsList>
        </Card>
    );
}
