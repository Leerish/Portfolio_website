import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <footer className="footer"> 
            <div className="footer__container container">
                <h1 className= "footer__title">Leerish Arvind</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="index.html" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.linkedin.com/in/leerish-arvind" className ="footer_social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-linkedin"></i>
            </a>

            <a href="https://instagram.com/_.lee_10._?igshid=OGQ5ZDc2ODk2ZA==" className ="footer_social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl uil-instagram"></i>
            </a>

            <a href="https://github.com/Leerish" className ="footer_social-link" target="_blank" rel="noreferrer">
                <i class="bx bxl-github"></i>
            </a>
                </div>

            <span className="footer__copy">&#169; Leerish Arvind. All right reserved</span>
            </div>
        </footer>

    )
};

export default Footer;
