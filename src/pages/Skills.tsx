import useDocumentTitle from "../hooks/useDocumentTitle.ts";
import SkillsSection from "../components/skills/SkillsSection.tsx";
import type { SkillGroup } from "../components/skills/SkillsSection.tsx";

//each object becomes one SkillsSection card
const skillGroups: SkillGroup[] = [
    {
        heading: "Technical Skills",
        skills: ["HTML, CSS, JavaScript", "Python", "Research, Data analysis, Microsoft Office"],
    },
    {
        heading: "Lab & Scientific Skills",
        skills: ["NMR analysis", "Gel electrophoresis", "Bacterial culture"],
    },
    {
        heading: "Soft Skills",
        skills: ["Communication", "Teamwork", "Problem Solving"],
    },
];

//skills page (shown inside <Main> when the URL is "/skills")
export default function Skills() {
    useDocumentTitle("Skills");

    return (
        <>
            <h2>Skills</h2>
            {
                skillGroups.map((group: SkillGroup) =>
                    <SkillsSection key={group.heading} heading={group.heading} skills={group.skills} />
                )
            }
        </>
    );
}
