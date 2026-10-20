import Card from "../shared/Card.tsx";

//shape of the props for one experience card.
//it is exported so the Experiences page can use the same shape for its data array.
export interface Experience {
    role: string;
    company: string;
    location: string;
    date: string;
    bullets: string[]; // any number of bullet points
}

//one experience card. bullets is an array so a job can have any number of bullet points.
export default function ExperienceEntry(props: Experience) {
    return (
        <Card>
            <h3>{props.role}</h3>
            <p>
                <em>{props.company}</em> &ndash; {props.location}
            </p>
            <p>{props.date}</p>
            <ul>
                {
                    props.bullets.map((bullet: string) =>
                        <li key={bullet}>{bullet}</li>
                    )
                }
            </ul>
        </Card>
    );
}
