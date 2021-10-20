import React from "react";
// import "./Head.css";
import Image from "next/image";

function Head() {
  return (
    <div className="container">
      <div className="img">
        <Image priority width={1250} height={784.5} src="/1.jpg" alt="Hero Image" />
      </div>
      <div className="influancer-text">
        <h1>
          The Top 100
          <br />
          Influencers!
        </h1>
        <p>Who will make the list?</p>
      </div>
      <div className="influancer-icon">
        <Image priority width={100} height={100} src="/influancer.png" alt="influancer" />
      </div>
      <div className="influancer-btfs">
        <p>The Top 100 Randomized<br/>influencer NTFS!,<br />Who will make the list?</p>
        {/* <a href="">FOllow</a> */}
      </div>
    </div>
  );
}

export default Head;
