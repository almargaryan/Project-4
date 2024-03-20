import React from 'react';
import Header from "../components/Header";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div className={"home wrapper"}>
            {/*<Header/>*/}
            <div className={"page_home"}>
                <div className={"pic_home"}></div>
                <div className={"text_home"}>
                    <span className={"title_home"}>MINGALAR PAR</span>
                    <span>PLEASE TAKE A LOOK AT <Link to={"https://templatemo.com/live/templatemo_512_moonlight"} style={{color:"#337AB7", fontWeight:"bold", textDecoration:"none"}}>TOO CSS</Link> TO SEE FREE TEMPLATE COLLECTIONS FOR YOU. LOREM IPSUM <b>DOLOR SIT AMET</b>, CONSECTETUR ADIPISCING ELIT. <b>SED VEHICULA BLANDIT AUGUE</b>, EU MAXIMUS ODIO TEMPUS VITAE.</span>
                    <div className={"buts_home"}>
                        <Link to={"/about"} className={"read_home"}>READ MORE</Link>
                        <Link to={"https://www.facebook.com/"} className={"fb_home"}>OUR FB PAGE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;