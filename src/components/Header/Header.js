import Link from 'next/link';
import React from 'react';
import { AiFillFileText, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' /> <Span> dpgian </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/dpgian' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com/in/gianpierangelo-de-palma-17932b14a' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://drive.google.com/file/d/1IUdLftux6BnsevFdS40UeMOSPI_i6J3_/view?usp=sharing' target='_blank'>
        <AiFillFileText size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
