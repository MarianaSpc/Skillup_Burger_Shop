// Write all the code here
//Task 1.3

import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Burger Shop</h2>
                <p>We are trying to give you the best taste possible.</p>
                <br />
                <i>We give attention to genuine feedback.</i>
                <strong>All right received @burgershop</strong>
            </div>
            <div class="rightColumn">
                <h4>Follow Us</h4>
                <a href="https://youtube.com/">
                    <AiFillYoutube />
                </a>
                <a href="https://instagram.com/">
                    <AiFillInstagram />
                </a>
            </div>
        </footer>
    );
};
export default Footer;