import React from "react";
import "./Footer-props.css"

export const FooterProps = (props) => {
    return(
        <div className="box-cont">
            <img src={props.img}  alt={props.alt}/>
            <span>{props.txt}</span>
        </div>
    )
}