import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
    grid-area: footer;
    background-color: #DB7F67;
   
    
`;


const StyledLink = styled(Link)`
    color: black;
    //background-color: #f1356d;
    //border-radius: 8px;
`;

const Footer = () => {
    return (
        <StyledFooter>

            <a href="https://www.linkedin.com/feed/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} color="Blue"/>
            </a>

            <a href="https://github.com/lisaemilsson" target="_blank">
                <FontAwesomeIcon icon={faGithub} color="Magenta" />
            </a>

           <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} color="Yellow" size="20px"/>
           </a>

            <FontAwesomeIcon icon={faPhone} color="Red"/>
            <FontAwesomeIcon icon={faEnvelope} color="Purple"/>
            
        </StyledFooter>
    )
}

export default Footer;



