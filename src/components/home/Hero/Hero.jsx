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

        <Box sx={{
            position: 'absolute',
            left: '11%',
            fontWeight: 'bold',
            color: "#fff",
            top: 0,
            // padding: '1rem',
            py: "1rem",
            zIndex: 5 ,
        }}>
            <Box sx={{
                // fontFamily: `'Drescher Grotesk BT Bold'`,
                textTransform: 'Uppercase',
                fontSize: '45px',
            }}
                 // variant={'h1'}
            >
                Influencer Icons
            </Box>
        </Box>

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
            fontFamily: `'Abril Fatface', cursive`,
            letterSpacing: '.5px',
            textAlign: 'center',
        }} variant={'h1'}>
          The Top 100
          <br />
          Influencers!
        </Typography>
        <Typography sx={{
            fontSize: '1.4rem',
            fontFamily: `'Shadows Into Light'`,
            letterSpacing: '1.8px',
            textAlign: 'center',
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
