import React from "react";
// import "./Hero.css";
import Image from "next/image";
import {Box, Stack, Typography} from "@mui/material";
import Background from '../../../images/1.jpg';
import {FaDiscord, FaTwitter} from "react-icons/fa";

function Hero() {
  return (
    <Box sx={{
        position: 'relative',
    }} className="hero_container">

      {/*   top left icons*/}

        <Stack direction={'row'} spacing={1} sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            padding: '1rem',
            zIndex: 5 ,
        }}>
            <Box as={'a'} href={'#'} sx={{
                border: '1px solid #fff',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                padding: '4px 8px',
            }}>
                <FaDiscord color={'#fff'}  size={30} fontSize={'60px'}/>
            </Box>
            <Box as={'a'} href={'#'} sx={{
                border: '1px solid #fff',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                padding: '4px 8px',
            }}>
                <FaTwitter color={'#fff'}  size={30} fontSize={'60px'}/>
            </Box>
            <Box as={'a'} href={'#'} sx={{
                border: '1px solid #fff',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                padding: '4px 8px',
            }}>
                <FaDiscord color={'#fff'}  size={30} fontSize={'60px'}/>
            </Box>

        </Stack>

      <div className="img">
        <Image priority src={Background} alt="Hero Image" />
      </div>
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
            fontFamily: `'Shadows Into Light'`,
            letterSpacing: '1.5px',
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
