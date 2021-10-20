import React from 'react';
// import "./Collection.css";
import Image from "next/image";

function Collection() {
    return (
        <div className="container-col" >
            <h1>Collection</h1>
            <div className="up">
                <Image height={441.41} width={1250} src="/3.jpg" alt="" />
                <div className="content"></div>
            </div>
            <div className="attribute">
                <h2>Attributes</h2>
                <p>Influancer Names</p>
            </div>
            <div className="category">
            <h2>Categories</h2>
            <ul>
                <li>Fitnes</li>
                <li>YouTuber</li>
                <li>Music</li>
                <li>Fashion</li>
                <li>Entertainmet</li>
                <li>Gamer</li>
                <li>Modle</li>
                <li>Beauty</li>
                <li>Crypto</li>
            </ul>
            </div>
        </div>
    )
}

export default Collection;
