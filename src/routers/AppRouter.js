import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NavbarComponent from "../components/Navbar";

import Explorar from "../components/Explorar";
import CrearEquipo from "../components/CrearEquipo"
import Soporte from "../components/soporte";
import VerTorneos from "../components/VerTorneos"
import CrearTorneo from "../components/CrearTorneo";
import Navbar2 from "../components/navbars/Navbar2";
import RenderBracket from "../components/Brackets";
import Example from "../components/TournamentDetails";

export const AppRouter  = () => {
    return (
        <BrowserRouter>
            <Navbar2/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path ="about" element={<About/>}/>
                <Route path ="soporte" element={<Soporte/>}/>
                <Route path ="explorar" element={<Explorar/>}/>
                <Route path ="torneo" element={<CrearTorneo/>}/>
                <Route path ="equipos" element={<CrearEquipo/>}/>
                <Route path ="vertorneo" element={<VerTorneos/>}/>
                <Route path ="brackets" element={<RenderBracket/>}/>
                <Route path ="Example" element={<Example/>}/>
                <Route exact path='/crearEquipos/:idtorneo' element={<CrearEquipo/>}/>
            </Routes>
        </BrowserRouter>
    )
}