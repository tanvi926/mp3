import styled, { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.tsx";
import Nav from "./components/layout/Nav.tsx";
import Main from "./components/layout/Main.tsx";
import Footer from "./components/layout/Footer.tsx";
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Skills from "./pages/Skills.tsx";
import Experiences from "./pages/Experiences.tsx";
import References from "./pages/References.tsx";
import Projects from "./pages/Projects.tsx";

//global styles for the whole app (replaces the top of MP-1's index.css).
//createGlobalStyle applies these rules to every page, not just one component.
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100%; /* lets the page wrapper stretch to fill the full viewport height */
        font-family: 'Poppins', sans-serif; /* base font for the whole page */
    }
`;

// wraps the whole page so it can be styled as one unit (was #page-wrapper in MP-1)
const PageWrapper = styled.div`
    background-color: lightsteelblue;
    width: 100%;
    margin: 0 auto;
`;

// holds the nav and main side by side (was #container in MP-1)
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row; /* nav and main sit left-to-right by default */
    min-height: 100vh;

    /* nav stacks on top of main on narrow screens */
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

function Root() {
    return (
        <PageWrapper>
            <GlobalStyle />
            <Header />
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/projects" element={<Projects />} />
                        {/* any unknown URL falls back to the Home page */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Main>
            </Container>
            <Footer />
        </PageWrapper>
    );
}

const router = createBrowserRouter([
    { path: "*", Component: Root },
]);


export default function App() {
    return <RouterProvider router={router} />;
}

