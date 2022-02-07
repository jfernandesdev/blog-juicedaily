import React from 'react';

import { Container, Content, Button } from './styles';
import { ArrowUp, Facebook, Instagram, Twitter } from '../../styles/Icons';

interface ShareButtonsProps {
  color?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ color }) => {
  return (
    <Container>
      <Content color={color}>
        <Button title="Voltar para o início">
          <ArrowUp />
        </Button>

        <Button title="Compartilhe no Facebook">
          <Facebook />
        </Button>

        <Button title="Compartilhe no Instagram">
          <Instagram />
        </Button>

        <Button title="Compartilhe no Twitter">
          <Twitter />
        </Button>
      </Content>
    </Container>
  );
};
