import React from "react";
// import "./About.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Image from 'next/image';

function About() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((oldProgress) => {
    //     if (oldProgress === 100) {
    //       return 0;
    //     }
    //     const diff = Math.random() * 10;
    //     return Math.min(oldProgress + diff, 100);
    //   });
    // }, 500);
    //
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className="container-about flex">
      <div className="about-left">
        <h1>About</h1>
        <p>
          Influencer Icons consists of the top 100 influencers in the world,
          placed in a randomized collection of 8,000 NFT's on the Ethereum
          blockchain network. Our selection was based on influencers who have
          used social media platforms to build their businesses into massive
          brands while changing the dynamics of how powerful social media has
          become. These collectibles are all unique pieces of digital art, some
          with extremely rare attributes that will forever be minted on the
          blockchain. Join us as we launch the first ever NFT chart list and
          honor the top 100 influencers in achieving this special title.
        </p>
      </div>
      <div className="about-right">
        <div style={{
          width: '511px',
          height: '816px',
        }} className="about-img">
          <Image layout={'fill'} objectFit={'cover'} src="/nftBg.svg" alt="" />
        </div>
        <div className="form">
          <form>
            <h1>8,000 NFTS</h1>
            <div className="form-input">
              <div className="spans">
                <span>ETH Balance</span>
                <span>0 ETH</span>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="form-input">
              <div className="span-e">
                <span>Amount</span>
                <div className="mid">
                  <label htmlFor="-">-</label>
                  <input id="input" type="text" value="1" />
                  <label htmlFor="+">+</label>
                </div>
                <Button variant="text">Max</Button>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="form-input">
              <div className="spans">
                <span>Total Balance</span>
                <span>0 ETH</span>
              </div>
              <div className="input">
                <input type="text" />
              </div>
            </div>
            <div className="btn">
              <Button variant="text" type="button">
                MINT
              </Button>
            </div>
            <Box sx={{ width: "100%",my:5,borderRadius:"10px" }}>
              <label htmlFor="Progress">Progress</label>
              <LinearProgress sx={{mt:1,borderRadius:"10px",height:"8px",backgroundColor:"#EEEEEE" }} variant="determinate" value={progress} />
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
