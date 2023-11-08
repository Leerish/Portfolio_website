import React from "react";

const WorkItems = ({item}) => {
    return(
       <div className="work__card" key={item.id}>
        <img src={item.imgUrl} alt="" className="work__img"/>
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link}  target="__blank"  rel ="norefferer" className="work__button">
        <p>{item.content}</p>
        </a>
        </div>
    )

}

export default WorkItems;