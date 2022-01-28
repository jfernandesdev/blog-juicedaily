import React from 'react';

import { 
  Wrapper,
  Avatar,
  Name 
} from './styles';

interface AuthorProps {
  image?: string;
  name: string;
}

export const Author: React.FC<AuthorProps> = ({ image, name}) => {
  return (
    <Wrapper>
      <Avatar src={image}/>
      <Name>{name}</Name>
    </Wrapper>
  );
}