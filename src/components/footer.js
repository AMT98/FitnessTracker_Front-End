import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";


const Footer = () => {
    const links = [
        {
            id: 1,
            link: "FAQ",
        },
        {
            id: 2,
            link: "Need Help?",
        },
    ];
    return (<div className="footer">
        
        <ul>
            {links.map(({ id, link }) => (
                <li
                    key={id}
                    className="footerlinks"
                >
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>

        <div id="findus">Find Us On Other Social Networks:</div>

        </div>)

}

export default Footer