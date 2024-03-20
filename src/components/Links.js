import React from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
    const handleColor = (i) => {
        const links = document.querySelectorAll('.link');
        links.forEach((link, index) => {
            if (index === i) {
                link.classList.add('clicked');
            } else {
                link.classList.remove('clicked');
            }
        });
    };

    return (
        <div className="options">
            <Link to="/" className="logo">MOONLIGHT</Link>
            <Link to="/" className="link" onMouseUp={() => handleColor(0)}><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
            <Link to="/about" className="link" onMouseUp={() => handleColor(1)}><i className="fa fa-user" aria-hidden="true"></i> About</Link>
            <Link to="/entries" className="link" onMouseUp={() => handleColor(2)}><i className="fa fa-pencil" aria-hidden="true"></i> Entries</Link>
            <Link to="/work" className="link" onMouseUp={() => handleColor(3)}><i className="fa fa-picture-o" aria-hidden="true"></i> Work</Link>
            <Link to="/contact" className="link" onMouseUp={() => handleColor(4)}><i className="fa fa-envelope" aria-hidden="true"></i> Contact</Link>
        </div>
    );
}

export default Links;