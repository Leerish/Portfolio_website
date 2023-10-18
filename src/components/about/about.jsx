import React from 'react';
import './about.css';
import AboutImg from '../../assets/profile.jpeg';


const About = () => {  
    return(
        <section className="about section" id="about">
        <h2 className="section__title">About</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
          
Pre final year student enrolled in the B. Tech Computer Science Core program at Vellore Institute of Technology situated in Chennai. My passion for technology with a special inclination towards web development has always been exhilarating for me. Endeavouring on creating enrapturing experiences for users through innovation has always engendered immense joy for me, throughout my journey so far- this remains my primary focus area! However, curiosity is infinite, apart from web development,as part of an exciting intellectual cross-pollination project my interests extend towards the augmented fields of Data Science & Artificial Intelligence(AI).
          </div>

        </div>
        </section>

    )

 };

export default About;   