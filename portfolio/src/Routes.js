import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Certs } from "./pages/Certs";
import { Home } from "./pages/Home";

export const PageRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/certifications" element={<Certs/>}/>
            </Routes>
        </Router>
    );
}