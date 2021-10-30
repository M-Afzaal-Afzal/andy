import React from 'react';
// import "./Collection.css";
import Image from "next/image";
import {Box, Stack} from "@mui/material";

function Collection() {
    return (
        <div className="container-col">
            <h1>Collection</h1>
            <div className="up">
                <Image layout={"fill"} objectFit={'cover'} src="/collectionBg.svg" alt="Collection Background"/>

                <Box sx={{
                    '&:before': {
                        content: "''",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(3px)',
                    },
                    display: 'flex',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '2rem',
                }} className={'content'}

                >
                    <Stack sx={{
                        color: "#fff",
                        padding: '1rem'
                    }} direction={'column'} spacing={1} className="">
                        <Box>
                            Logan Paul
                        </Box>

                        <Box>
                            Ryan Garcia
                        </Box>

                        <Box>
                            Zach King
                        </Box>

                        <Box>
                            Jay Alvarrez
                        </Box>

                        <Box>
                            Gigi Hadid
                        </Box>

                        <Box>
                            Cameron Dallas
                        </Box>

                        <Box>
                            Loren Gray
                        </Box>

                        <Box>
                            Jimmy Donaldson (MrBeast)
                        </Box>

                    </Stack>
                </Box>
            </div>
            <Box sx={{
                marginTop: '5rem',
            }} className="attribute">
                <h2>Attributes</h2>
                <p>Influencer Names</p>
            </Box>
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
