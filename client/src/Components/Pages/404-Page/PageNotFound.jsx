import React from 'react'
import pageNotFoundImg from '../../../images/404.png'
import { Link } from "react-router-dom";
import { hebrewVariables } from '../../../utils/hebrewVariables';

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <Link to={"/"}>{hebrewVariables.homePage}</Link>
            <img src={pageNotFoundImg} alt="404- page not found" width="550px" height="500px" />
    
        </div >
    )
}

export default PageNotFound