import styled from "styled-components";

const FlowerBox = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`;

const Petal = styled.div`
    position: absolute; /* taken out of normal flow so it can be rotated around the center */
    width: 14px;
    height: 20px;
    top: 10px;
    left: 13px;
    background-color: darkred;
    border-radius: 50%; /* oval petal instead of a rectangle */
    transform-origin: 7px 10px;
`;

const Center = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 15px;
    background-color: gold;
    border-radius: 50%;
`;

// 6 petals, 60 degrees apart
const petalAngles: number[] = [0, 60, 120, 180, 240, 300];

//one mini flower
//in React we describe it once and map() over the angles.
export default function Flower() {
    return (
        <FlowerBox>
            {
                petalAngles.map((angle: number) =>
                    <Petal key={angle} style={{ transform: `rotate(${angle}deg) translateY(-12px)` }} />
                )
            }
            <Center />
        </FlowerBox>
    );
}
