import React from "react";
// import { Link } from "react-scroll";
import instalogo from "../assets/insta logo.png";
import twitterlogo from "../assets/twitter.png"
import { NavLink } from "react-router-dom";


const Footer = () => {
    const links = [
        {
            id: 1,
            link: "FAQ",
            path: "/FAQ",
        },
        {
            id: 2,
            link: "Need Help?",
            path: "/about",
        },
    ];
    return (<div className="footer">
        
        <ul>
            {links.map(({ id, link, path }) => (
                <li
                    key={id}
                    className="footerlinks"
                >
                    <NavLink to={path} smooth duration={500}>
                        {link}
                    </NavLink>
                </li>
            ))}
        </ul>

        <div id="findus">Find Us On Other Social Networks:</div>
            <img class="social" src={instalogo} alt="instagram logo"></img>
            <img class="social" src={twitterlogo} alt="instagram logo"></img>
        </div>)

}

export default Footer