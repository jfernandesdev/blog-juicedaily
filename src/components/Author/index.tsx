import React from 'react';

import { 
  Wrapper,
  Avatar,
  Name 
} from './styles';

interface AuthorProps {
  size?: number;
  image?: string;
  name: string;
}

const Author: React.FC<AuthorProps> = ({ size, image, name}) => {
  return (
    <Wrapper>
      <Avatar src={image} size={size}/>
      <Name>{name}</Name>
    </Wrapper>
  );
}

export default Author;