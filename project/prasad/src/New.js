import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

export default function MultipleItems({select,mainid}){
    
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      autoplaySpeed:2000,
    //   speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> {mainid} </h2>
        <Slider {...settings}>
            {select.map((user,index)=>{
                return(
                <div key={index}>
                    <img src={user.url} alt={index} height={550} width={1400}></img>
                </div>
                )
            })}
        </Slider>
      </div>
    );
  }