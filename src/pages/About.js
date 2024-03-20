import React from 'react';
import {Link} from "react-router-dom";

function About(props) {
    return (
        <div className={"about wrapper"}>
            <div className={"page_about"}>
                <div className={"text_about"}>
                    <span className={"title_about"}>ABOUT US</span>
                    <span>
                        Please tell your friends about templatemo website. A variety of free CSS templates are available for immediate downloads.
                        <br/>
                        <br/>
                        Phasellus vitae faucibus orci. Etiam eleifend orci sed faucibus semper. Cras varius dolor et augue fringilla, eu commodo sapien iaculis. Donec eget dictum tellus. Curabitur a interdum diam. Nulla vestibulum porttitor porta.
                        <br/>
                        <br/>
                        Nulla vitae interdum libero, vel posuere ipsum. Phasellus interdum est et dapibus tempus. Vestibulum malesuada lorem condimentum mauris ornare dapibus. Curabitur tempor ligula et placerat molestie.
                        <br/>
                        <br/>
                        Aliquam efficitur eu purus in interdum. Etiam tincidunt magna ex, sit amet lobortis felis bibendum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <Link to={"/entries"} className={"read_home"}>READ MORE</Link>
                </div>
                <div className={"pic_about"}></div>
            </div>
        </div>
    );
}

export default About;