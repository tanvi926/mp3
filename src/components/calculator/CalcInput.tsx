import styled from "styled-components";
import type { ChangeEvent } from "react";

//props for one labelled input box (declared here, in the only file that uses it)
interface CalcInputProps {
    id: string;
    label: string;
    value: string;
    //the parent's useState setter is passed down so the child can update the parent's state
    changeValue: (newValue: string) => void;
}

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;

    label {
        font-size: calc(8px + 0.5vw);
    }

    input {
        padding: 8px;
        font-size: calc(10px + 0.5vw);
        border-radius: 6px;
        border: 1px solid darkred;
    }
`;

//one labelled input box, used twice (First Number / Second Number) instead of repeating the markup.
//its value comes from the parent's state, and typing sends the new text back up through props.changeValue.
export default function CalcInput(props: CalcInputProps) {
    return (
        <InputGroup>
            {/* htmlFor matches the input's id so the label is linked to it (accessibility) */}
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="text"
                id={props.id}
                placeholder="Enter a number"
                value={props.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => props.changeValue(e.target.value)}
            />
        </InputGroup>
    );
}