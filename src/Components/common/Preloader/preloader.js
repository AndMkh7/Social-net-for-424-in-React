import React from "react";
import preloader from "../../../assets/images/preloader.svg";

let Preloader =(props)=>{
    return <div style = {{backgroundColor:`black`}}>
        <img src={preloader} alt=""/>
    </div>
}

export default Preloader;