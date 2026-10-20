import useDocumentTitle from "../hooks/useDocumentTitle.ts";
import Calculator from "../components/calculator/Calculator.tsx";

//projects page (shown inside <Main> when the URL is "/projects")
export default function Projects() {
    useDocumentTitle("Projects");

    return (
        <>
            <h2>Projects</h2>
            <p>
                This is my flower calculator. Once you put in 2 numbers and select the operation: the answer as well
                as that many number of flowers (up to 1000) will show up on the screen.
            </p>
            <Calculator />
        </>
    );
}
