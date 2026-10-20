import styled from "styled-components";
import useDocumentTitle from "../hooks/useDocumentTitle.ts";

//shape of one row in the references table
interface Reference {
    name: string;
    role: string;
    contact: string;
}

const StyledTable = styled.table`
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    background-color: azure;

    th, td {
        border: 1px solid darkred;
        padding: 8px 12px;
        text-align: left;
        font-size: calc(8px + 0.5vw);
    }

    th {
        background-color: darkred;
        color: azure;
    }
`;

//add more objects here to add more rows to the table
const professionalReferences: Reference[] = [
    { name: "Tanvi Khandelwal", role: "Intern", contact: "8577537408 / tanvikh@bu.edu" },
];

// references page (shown inside <Main> when the URL is "/references")
export default function References() {
    useDocumentTitle("References");

    return (
        <>
            <h2>References</h2>
            <h3>Professional</h3>
            <StyledTable>
                <tbody>
                {/* each object in the array becomes one table row */}
                {
                    professionalReferences.map((ref: Reference) =>
                        <tr key={ref.name}>
                            <td>{ref.name}</td>
                            <td>{ref.role}</td>
                            <td>{ref.contact}</td>
                        </tr>
                    )
                }
                </tbody>
            </StyledTable>
        </>
    );
}