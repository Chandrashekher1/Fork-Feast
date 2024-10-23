import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
            </a> */}
            <a href="https://x.com/cpsaw03" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
            </a>
            <a href="https://www.linkedin.com/in/chandrashekher-prasad-a496a2293/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/_chandrashekher_03/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
            </a>
        </div>
    );
};

export default SocialIcons;
