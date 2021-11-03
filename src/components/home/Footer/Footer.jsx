import React from 'react';
// import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import {FaDiscord} from 'react-icons/fa';
import {Box} from "@mui/material";

function Footer() {
    return (
        <Box sx={{
            background: "#000",
        }}>
        <div className="Footer" >
            {/*<div className="footer-up">*/}
            {/*    <ul>*/}
            {/*        <li><a href="">Terms & Conditions</a></li>*/}
            {/*        <li><a href="">Legal</a></li>*/}
            {/*        <li><a href="">Contact</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className="footer-down">
                <p><i class="far fa-copyright"></i> &copy; 2021 Influencericons</p>
                <Box sx={{
                    display: 'flex',
                }} className="social">
                    <a href="#"><FacebookIcon fontSize={'60px'}/></a>
                    <a href="#"><InstagramIcon fontSize={'60px'}/></a>
                    <a href="#"><TwitterIcon fontSize={'60px'}/></a>
                    <a style={{
                        width: '47px',
                    }} href="#"><FaDiscord style={{

                    }} size={60} fontSize={'60px'}/></a>
                    <a href="#"><ContactPhoneIcon fontSize={'60px'}/></a>
                </Box>
            </div>
        </div>
        </Box>
    )
}

export default Footer
