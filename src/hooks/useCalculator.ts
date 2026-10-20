import { useState } from "react";

// Every operation the calculator supports, keyed by its button symbol.
const operations: Record<string, (a: number, b: number) => number> = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => a ** b,
};

// Custom hook that holds all of the calculator's state and logic.
// The Calculator component calls it and only has to render what it returns.
export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    // ONE function replaces the five repeated operation functions
    function calculate(operator: string) {
        const num1 = Number(firstNumber);  // convert first input's text to a number
        const num2 = Number(secondNumber); // convert second input's text to a number
        setResult(operations[operator](num1, num2)); // new state -> React re-renders the output and flowers
    }

    // resets both inputs and the result (flowers disappear because result goes back to null)
    function clear() {
        setFirstNumber("");
        setSecondNumber("");
        setResult(null);
    }

    // consistent return value: everything the Calculator component needs
    return {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        result,
        calculate,
        clear,
        operators: Object.keys(operations), // ["+", "-", "*", "/", "**"] used to build the buttons
    };
}
