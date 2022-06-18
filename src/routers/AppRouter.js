import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NavbarComponent from "../components/Navbar";
import Soporte from "../components/soporte";
import Explorar from "../components/Explorar";
import CrearEquipo from "../components/CrearEquipo"

import VerTorneos from "../components/VerTorneos"

export const AppRouter  = () => {
    return (
        <BrowserRouter>
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path ="about" element={<About/>}/>
                <Route path ="soporte" element={<Soporte/>}/>
                <Route path ="explorar" element={<Explorar/>}/>
                <Route path ="equipos" element={<CrearEquipo/>}/>
                <Route path ="upload" element={<VerTorneos/>}/>
                <Route exact path='/crearEquipos/:idtorneo' element={<CrearEquipo/>}/>
            </Routes>
        </BrowserRouter>
    )
}