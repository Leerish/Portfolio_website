import React from "react";
import "./Home.css";
const Social = () => { 
    return(
        <div className = "home_social">
            <a href="https://www.linkedin.com/in/leerish-arvind" className ="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://instagram.com/_.lee_10._?igshid=OGQ5ZDc2ODk2ZA==" className ="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-instagram"></i>
            </a>

            <a href="https://github.com/Leerish" className ="home_social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-github"></i>
            </a>
        </div>

    )
}

export default Social;  