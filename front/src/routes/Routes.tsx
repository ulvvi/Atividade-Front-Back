import react from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Cadastro from "../page/cadastro";
import Login from "../page/Login";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Cadastro />} path="/cadastro" />
                <Route element={<Login />} path="/" />
                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    );
}
