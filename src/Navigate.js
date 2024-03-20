import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Entries from "./pages/Entries";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function Navigate(props) {
    const location = useLocation()
    console.log(location)
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} timeout={700} classNames={"wrapper"}>
                <Routes location={location}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/entries"} element={<Entries/>}/>
                    <Route path={"/work"} element={<Work/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default Navigate;