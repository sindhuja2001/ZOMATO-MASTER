import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard= (props)=> {
    return(
        <>
            <div className= "bg-white p-4 w-full mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3">
                <div className= "w-full h-56 lg:h-64 relative">
                    <div className= "absolute flex items-end bottom-4 justify-between w-full">
                        <div className= "flex flex-col gap-2 items-start">
                            {props.isPro && (
                                <span className= "bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% OFF</span>
                            )}
                            {props.isOff && (
                                <span className= "bg-blue-600 text-white px-2 py-1 rounded text-sm">₹{`${props.isOff}`}</span>
                            )}
                        </div>
                        <span className= "bg-white bg-opacity-50 p-1 rounded mr-3">{props.durationOfDelivery} min</span>
                    </div>
                    <img src= {props.photos.length && props.photos[0]}
                      alt= "image" 
                      className= "w-full h-full rounded-2xl" />
                </div>
                
                
               
                <div className= "my-2 flex flex-col gap-3">
                    <div className= "flex items-center justify-between">
                        <h4 className= "text-xl font-medium">{props.name}</h4>
                        <span className= "bg-green-800 text-white text-sm flex items-center p-1 rounded">
                          {props.restaurantReviewValue}<AiTwotoneStar />
                        </span>
                    </div>
                    <div className= "flex items-center justify-between text-gray-500">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>₹{props.averageCost} for one</p>

                    </div>
                </div>
            </div>
        </>
    )
};

export default RestaurantCard;