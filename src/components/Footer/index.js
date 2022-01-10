import React from 'react';
import {
  FaGithub,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              SOMAS2021
            </SocialLogo>
            <WebsiteRights>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev"> Vitaly Gorbachev </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                target='_blank'
                aria-label='Github'
                href='https://github.com/SOMAS2021'
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
