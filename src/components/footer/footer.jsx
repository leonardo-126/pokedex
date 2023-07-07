import React from "react";
import "./footer.css"
import { FooterProps } from "./Footer-props/Footer-props";

export const Footer = () => {
    return (
        <div className="container">
            <div className="social-media">
                <FooterProps img="/insta.png" alt="instragram" txt="leo_paula_1" />
                <FooterProps img="/whatsapp.png" alt="Whatzapp" txt="+55(35)99768-3310" />
            </div>
            <div className="logo">
                <img src="/poke.logo.png" alt="" />
            </div>
            <div className="copy">
                <span>Site criado e baseado pelo &copy;LeoUjo </span>
            </div>
        </div>
    )
}