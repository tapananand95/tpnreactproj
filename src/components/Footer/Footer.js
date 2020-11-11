import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            DhanKamao
          </SocialLogo>
           <WebsiteRights>© DhanKamao India Pvt. Ltd.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href={'//www.facebook.com/'} 
              rel='noopener noreferrer'
              target='_blank' 
              aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href={'//www.instagram.com/?hl=en'} 
              rel='noopener noreferrer'
              target='_blank' 
              aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href={'//www.youtube.com/'}
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href={'//www.twitter.com/?lang=en'} 
              rel='noopener noreferrer'
              target='_blank' 
              aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href={'//in.linkedin.com'} 
              rel='noopener noreferrer'
              target='_blank' 
              aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
