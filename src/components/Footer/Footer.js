import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +254-713-958-070">+254-713-958-070</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: mbugua.alex2017@students.jkuat.ac.ke">mbugua.alex2017@students.jkuat.ac.ke</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons onClick={() => window.open("https://github.com/MwauratheAlex","_blank")}>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons onClick={() => window.open("https://www.linkedin.com/in/mwaura-mbugua/","_blank")}>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons onClick={() => window.open("https://www.instagram.com","_blank")}>
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
