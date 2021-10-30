import React from "react";
import CustomizedAccordions from "../../common/CustomAccordion";
import {Box} from "@mui/material";
import Image from 'next/image';

// import "./FAQ.css";

function FAQ() {

    const faqs = [
        {
            id: `1`,
            heading: `Will there be a pre-sale?`,
            description: ` No, Just the public sale. We aim to provide everyone the opportunity
            to purchase at the same time.`,
        },
        {
            id: `2`,
            heading: `What is the cost of each NFT?`,
            description: <>
                Each Influencer Icon NFT will have a low Mint price of 0.1 ETH Check
                our <a href="">OpenSea</a> account to see the NFTs we'll be giving
                away. Opensea link (
                <a href="">https://opensea.io/influencericons</a>)
            </>,
        },
        {
            id: `3`,
            heading: `When is the drop/mint/sale?`,
            description: `No presale.`,
        },
        {
            id: `4`,
            heading: `What is the Ethereum Smart Contract address?`,
            description: ``,
        },
        {
            id: `5`,
            heading: `What are the links?`,
            description: <>
                <a href="">https://opensea.io/influencericons</a>
                <br/>
                <a href="">https://discord.gg/pPMcpEHnRQ</a>
                <br/>
                <a href="">https://twitter.com/influencericons</a>
                <br/>
                <a href="">https://www.facebook.com/influencericons</a>
                <br/>
            </>
            ,
        },
    ]

    return (
        <Box sx={{
            // maxWidth: '1000px',
        }} className="faq-container">
            <h1>FAQ</h1>
            <div className="">
                {/*<img src="/4.jpg" alt=""/>*/}
                <Box sx={{
                    position: 'relative',
                    p: '5rem',
                }} className="">

                    {/* top left image*/}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}>
                        <Image width={301} height={321} src={'/leftDots.svg'} />

                    </Box>

                    {/*Bottom right image*/}
                    <Box sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                    }}>

                    <Image src={'/rightDots.svg'} width={301} height={321} />
                    </Box>

                    {
                        faqs.map(({heading,description,id}) => {
                            return(
                                <CustomizedAccordions key={id} heading={heading} description={description}/>
                            )
                        })
                    }

                </Box>
            </div>
        </Box>
    );
}

export default FAQ;
