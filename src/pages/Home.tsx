import styled from "styled-components";
import useDocumentTitle from "../hooks/useDocumentTitle.ts";
import headshot from "../assets/final-headshot.png";

const Headshot = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: 10px solid darkred;
    margin: 50px;

    @media screen and (max-width: 1000px) {
        width: 200px;
        height: 200px;
        margin: 20px auto;
    }
`;

//home page (shown inside <Main> when the URL is "/")
export default function Home() {
    useDocumentTitle("Home");

    return (
        <>
            <h2>Home</h2>
            <Headshot src={headshot} alt="Tanvi Khandelwal" />
            <p>
                Biology student with a minor in Computer Science, interested in combining scientific thinking with
                technology and problem-solving. I enjoy learning new skills, working on collaborative projects, and
                applying programming to real-world challenges. I am a curious and motivated learner who enjoys tackling
                problems creatively and developing practical solutions. Through my coursework and projects, I continue
                to strengthen my technical, analytical, and teamwork skills.
            </p>
        </>
    );
}
