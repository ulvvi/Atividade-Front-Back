import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Cadastro from "../page/cadastro";
import Login from "../page/Login";
import Home from "../page/Home"
import Error from "../page/error"


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Cadastro />} path="/cadastro" />
                <Route element={<Login />} path="/login" />
                <Route element={<Home />} path="/" />
                <Route element={<Error />} path="*"/>
            </Routes>
        </Router>
    );
}
