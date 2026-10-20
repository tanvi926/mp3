import useDocumentTitle from "../hooks/useDocumentTitle.ts";
import EducationEntry from "../components/education/EducationEntry.tsx";

//education page (shown inside <Main> when the URL is "/education")
export default function Education() {
    useDocumentTitle("Education");

    return (
        <>
            <h2>Education</h2>

            <EducationEntry
                title="BA, Biology"
                school="Boston University"
                location="Boston, MA"
                date="Expected May 2027"
                note="Computer Science minor"
            />

            <EducationEntry
                title="Jayshree Periwal International School"
                school="Jaipur, India"
                date="May 2023"
            />
        </>
    );
}
