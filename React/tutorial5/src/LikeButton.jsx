import { useState } from "react";

export default function LikeButton() {

    let[isLiked, setIsLiked] = useState(false);
    let[clicks, setClicks] = useState(0);
    // let clicked = ()=>{
    //     console.log("clicked.");
    // }
    let toggleLike=()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };

    let likeStyles = {
        color:"red"
    };

    return(
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart" style={likeStyles}></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
            <button>Clicks = {clicks}</button>
        </div>
    );
}