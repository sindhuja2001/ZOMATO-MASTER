import React from "react";
import {IoMdArrowDropright} from "react-icons/io";


const PictureCarouselCard= ()=> {
    
    return(
        <>
        <div className= "w-full h-64 relative px-4 overflow-hidden">

            <div className= "w-full h-full relative">
                <img src= "https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp" 
                alt= "image" 
                className= "w-full h-full object-cover rounded-lg transition duration-700 ease-in-out" />
                <div className= "w-full h-full absolute inset-0 rounded-lg "
                style= 
                {{ background:  "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"}} />
            </div>
            
            <div className= "absolute bottom-2 left-4 text-white w-full">
                
                <h4 className= "z-10">Onam Special</h4>
                <h6 className= "z-10 flex items-center">15 Places <IoMdArrowDropright /> </h6>
            </div>
        </div>
        </>
    )
};

export default PictureCarouselCard;