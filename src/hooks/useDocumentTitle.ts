import { useEffect } from "react";

// Custom hook: sets the browser-tab title
// so each page calls this hook instead of repeating that logic.
export default function useDocumentTitle(pageName: string) {
    // useEffect runs after the page has rendered and mounted
    useEffect(() => {
        document.title = `${pageName} | Resume`;
    }, [pageName]);
}