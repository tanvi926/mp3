import useDocumentTitle from "../hooks/useDocumentTitle.ts";
import ExperienceEntry from "../components/experiences/ExperienceEntry.tsx";
import type { Experience } from "../components/experiences/ExperienceEntry.tsx";

//each object becomes one ExperienceEntry card
const experiences: Experience[] = [
    {
        role: "Undergraduate Research Assistant",
        company: "Campus Climate Lab",
        location: "Boston, MA",
        date: "Sept 2025 - Feb 2026",
        bullets: [
            "Awarded competitive CCL funding ($4,600) for Laundry Water Treatment for Sustainable Plant Growth.",
        ],
    },
    {
        role: "Intern",
        company: "Premier Research",
        location: "Hybrid",
        date: "June 2025 - Aug 2025",
        bullets: [
            "Assisted in trial design, execution, and data analysis leveraging GCP certification to ensure regulatory compliance, in phase 3 & 4 drug trials for diseases like Ulcerative Colitis and Crohn’s disease.",
        ],
    },
];

//experience page (shown inside <Main> when the URL is "/experiences")
export default function Experiences() {
    useDocumentTitle("Experience");

    return (
        <>
            <h2>Experiences</h2>
            {
                experiences.map((exp: Experience) =>
                    <ExperienceEntry
                        key={exp.company}
                        role={exp.role}
                        company={exp.company}
                        location={exp.location}
                        date={exp.date}
                        bullets={exp.bullets}
                    />
                )
            }
        </>
    );
}
