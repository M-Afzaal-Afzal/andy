import React from "react";
// import "./Hero.css";
import Image from "next/image";
import {Box, Typography} from "@mui/material";

function Hero() {
  return (
    <Box sx={{
        position: 'relative',
    }} className="hero_container">
      {/*<div className="img">*/}
      {/*  <Image priority width={1250} height={784.5} src="/1.jpg" alt="Hero Image" />*/}
      {/*</div>*/}
      <Box sx={{
          position: 'absolute',
          top: '100px',
          left: '13%',
          color: "#fff",
      }} className="">
        <Typography sx={{
            fontSize: '3.5rem',
        }} variant={'h1'}>
          The Top 100
          <br />
          Influencers!
        </Typography>
        <Typography sx={{
            fontSize: '1.2rem',
        }} variant={'body1'}>
            Who will make the list?
        </Typography>
      </Box>
      {/*<div className="influancer-icon">*/}
      {/*  <Image priority width={100} height={100} src="/influancer.png" alt="influancer" />*/}
      {/*</div>*/}
      {/*<div className="influancer-btfs">*/}
      {/*  <p>The Top 100 Randomized<br/>influencer NTFS!,<br />Who will make the list?</p>*/}
        {/* <a href="">FOllow</a> */}
      {/*</div>*/}
    </Box>
  );
}

export default Hero;
