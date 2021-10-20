import React from 'react';
// import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="Footer" >
            <div className="footer-up">
                <ul>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="footer-down">
                <p><i class="far fa-copyright"></i> 2021 Influencericons</p>
                <div className="social">
                    <a href=""><FacebookIcon fontSize={'60px'}/></a>
                    <a href=""><InstagramIcon fontSize={'60px'}/></a>
                    <a href=""><TwitterIcon fontSize={'60px'}/></a>
                    <a href=""><LinkedInIcon fontSize={'60px'}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
