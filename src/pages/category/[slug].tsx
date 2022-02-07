import React from 'react';

import { Container, PostsGrid } from './styles';

import { Card } from '../../components/Card';

const Category: React.FC = () => {
  return (
    <Container>
      <PostsGrid>
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index} type="medium" />
          ))}
      </PostsGrid>
    </Container>
  );
};

export default Category;
