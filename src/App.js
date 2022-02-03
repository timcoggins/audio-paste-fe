import { useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Track from "./pages/Track";
import Upload from "./pages/Upload";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import 'bulma/css/bulma.min.css';
import Footer from "./components/Footer";

/**
 * Main component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {

    /**
     * Gets the track id from the query params
     * @returns {URLSearchParams}
     */
    function useQuery() {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();

    // JSX
    return (
        <main className="container">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/track" element={<Track id = {query.get("track")} />} />
                <Route path="upload" element={<Upload />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App;