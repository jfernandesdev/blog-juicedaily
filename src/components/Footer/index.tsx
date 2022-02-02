import React from 'react';

import { 
  Facebook, 
  Instagram, 
  Twitter 
} from '../../styles/Icons';

import { 
  Container,
  LogoWrapper,
  Logo,
  Copy,
  SocialIconsWrapper,
  SocialBtn
} from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src="/logo.svg" alt="Juicedaily" />
        <Copy>&copy; 2022</Copy>
      </LogoWrapper>

      <SocialIconsWrapper>
        <SocialBtn>
          <Facebook />
        </SocialBtn>
        <SocialBtn>
            <Instagram />
        </SocialBtn>
        <SocialBtn>
          <Twitter />
        </SocialBtn>
      </SocialIconsWrapper>
    </Container>
  );
}