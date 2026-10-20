import styled from "styled-components";
import useCalculator from "../../hooks/useCalculator.ts";
import FlowerGarden from "./FlowerGarden.tsx";
import CalcInput from "./CalcInput.tsx";

const CalculatorBox = styled.div`
    background-color: azure;
    border: 3px solid darkred;
    border-radius: 12px;
    padding: 5%;
    margin-top: 20px;
    width: 100%;
    max-width: 500px;
    text-align: center;
`;

const CalcInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
`;

const CalcButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

    button {
        padding: 10px 15px;
        font-size: calc(12px + 0.5vw);
        background-color: darkred;
        color: azure;
        border: none;
        border-radius: 6px;
        cursor: pointer; /* hand cursor signals it's clickable */
    }

    button:hover {
        background-color: midnightblue; 
    }

    @media screen and (max-width: 750px) {
        button {
            font-size: calc(10px + 1vw);
            padding: 8px 10px;
        }
    }
`;

const Output = styled.h3<{ $negative: boolean }>`
    font-size: calc(20px + 1vw);
    min-height: 40px;
    color: ${(props) => (props.$negative ? "red" : "black")};
`;

//the flower calculator. All state and math come from the useCalculator custom hook,
//so this component only describes what the calculator looks like.
export default function Calculator() {
    const {
        firstNumber, setFirstNumber,
        secondNumber, setSecondNumber,
        result, calculate, clear, operators,
    } = useCalculator();

    return (
        <CalculatorBox>
            {/* one flower per unit of the result, re-drawn automatically whenever result changes */}
            <FlowerGarden result={result} />

            <h2>JS Calculator</h2>

            <CalcInputs>
                <CalcInput id="first-number" label="First Number:" value={firstNumber} changeValue={setFirstNumber} />
                <CalcInput id="second-number" label="Second Number:" value={secondNumber} changeValue={setSecondNumber} />
            </CalcInputs>

            {/* the 5 operation buttons are made by map() over the operators, then Clear is added */}
            <CalcButtons>
                {
                    operators.map((op: string) =>
                        <button key={op} onClick={() => calculate(op)}>{op}</button>
                    )
                }
                <button onClick={clear}>Clear</button>
            </CalcButtons>

            {/* the result shows here; ternaries turn it red when negative and hide it before any calculation */}
            <Output $negative={result !== null && result < 0}>
                {result === null ? "" : String(result)}
            </Output>
        </CalculatorBox>
    );
}
