import React from 'react';
// import Header from "../components/Header";
import {Link} from "react-router-dom";

function Entries(props) {
    return (
        <div className={"entries wrapper"}>
            <div className={"page_entries"}>
                <div className={"part_entries"}>
                    <div className={"text1_entries"}>
                        <span className={"title1_entries"}>QUISQUE COMMODO QUAM</span>
                        <span>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum. Maecenas rhoncus nibh in mauris lobortis, a maximus diam faucibus. In et eros urna. Suspendisse potenti. Pellentesque commodo, neque nec molestie tempus, purus ante feugiat augue.</span>
                        <Link to={"/work"} className={"read_entries"}>CONTINUE READING</Link>
                    </div>
                    <div className={"pic1_entries"}></div>
                </div>
                <div className={"part_entries"}>
                    <div className={"pic2_entries"}></div>
                    <div className={"text2_entries"}>
                        <span className={"title2_entries"}>MAECENAS EU PURUS EU SAPIEN</span>
                        <span>Sed vitae felis in lorem mollis mollis eget in leo. Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna, sed semper ipsum enim a ipsum. Aenean in ante vel mi molestie bibendum. Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.</span>
                        <Link to={"/work"} className={"read_entries"}>CONTINUE READING</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entries;