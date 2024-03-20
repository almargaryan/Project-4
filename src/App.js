import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navigate from "./Navigate";
import Header from "./components/Header";

function App(props) {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
            <BrowserRouter>
                <Navigate/>
                <Header/>
            </BrowserRouter>
        </div>
    );
}

export default App;