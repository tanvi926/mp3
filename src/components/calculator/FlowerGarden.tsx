import styled from "styled-components";
import Flower from "./Flower.tsx";

const Garden = styled.div`
    display: flex;
    flex-wrap: wrap; /* lets flowers wrap to new rows instead of overflowing the calculator */
    justify-content: center;
    align-content: flex-start; /* keeps rows packed at the top */
    gap: 8px;
    min-height: 40px;
    margin-bottom: 10px;
`;

//shows one flower per whole number in the result (always positive at most 1000).
export default function FlowerGarden(props: { result: number | null }) {
    // null = nothing calculated yet, NaN = invalid input -> no flowers either way
    let flowerCount = 0;
    if (props.result !== null && !Number.isNaN(props.result)) {
        flowerCount = Math.floor(Math.abs(props.result)); //whole-number, always-positive count
    }
    if (flowerCount > 1000) {
        flowerCount = 1000; //so huge results don't try to render too many elements
    }

    // collects <Flower/> components instead of creating DOM elements
    const flowers = [];
    for (let f = 0; f < flowerCount; f = f + 1) {
        flowers.push(<Flower key={f} />);
    }

    return <Garden aria-hidden="true">{flowers}</Garden>;
}