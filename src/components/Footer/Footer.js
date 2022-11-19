import React from 'react';
import { AiFillGithub, AiFillFileText, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Call </LinkTitle>
          <LinkItem href='tel:+447778727054'> +44 777 87 27 054 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href='mailto:dplgian@gmail.com'> dplgian@gmail.com </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> This website is powered by React.js and styled components </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/dpgian' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/gianpierangelo-de-palma-17932b14a' target='_blank'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://drive.google.com/file/d/1IUdLftux6BnsevFdS40UeMOSPI_i6J3_/view?usp=sharing' target='_blank'>
            <AiFillFileText size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
