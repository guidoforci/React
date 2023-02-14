import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import React from "react";


const RedesSociales = React.memo(() => {
    return (<>
        <button className="btn btn-primary" onClick={(e) => console.log(e.target)}><BsFacebook size="21" color="#3b5998"/></button>
        <button className="btn btn-primary" onClick={(e) => console.log(e.target)}><BsInstagram size="21" color="#C13584"/></button>
        <button className="btn btn-primary" onClick={(e) => console.log(e.target)}><BsTwitter size="21" color="#00acee" /></button>
        </>
    );
})


export default RedesSociales;
