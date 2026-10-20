import Card from "../shared/Card.tsx";

//shape of the props for one education card
interface EducationProps {
    title: string;
    school: string;
    location?: string;
    date: string;
    note?: string;
}

//one education card. The same markup is reused for every school, only the props change.
export default function EducationEntry(props: EducationProps) {
    return (
        <Card>
            <h3>{props.title}</h3>
            <p>
                <em>{props.school}</em>
                {/* ternary: only show [location] when one was passed in */}
                {props.location ? `  [${props.location}]` : ""}
            </p>
            <p>{props.date}</p>
            {props.note ? <p>{props.note}</p> : null}
        </Card>
    );
}
