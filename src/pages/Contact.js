import React from 'react';
import {Link} from "react-router-dom";

function Contact(props) {
    return (
        <div className={"contact wrapper"}>
            <div className={"page_contact"}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7750.725888144364!2d100.565704!3d13.756973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8d23e783e5%3A0xf51ce6427b7918fc!2sG%20Tower!5e0!3m2!1sen!2sus!4v1708376724429!5m2!1sen!2sus" width="500" height="500" style={{ border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={"info_contact"}>
                    <input type={"text"} placeholder={"Your name..."}/>
                    <input type={"email"} placeholder={"Your email..."}/>
                    <input type={"text"} placeholder={"Subject..."}/>
                    <textarea placeholder={"Your message..."}></textarea>
                    <Link to={"/"} className={"send_contact"}>SEND</Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;