import React from 'react';

import {
  Card,
  Image,
  Wrapper,
} from './styles';

import Title from '../Title';
import { Author } from '../Author';

export const SmallCard: React.FC = () => {
  return (
    <Card>

      <Image image='./avocado.jpg' />

      <Wrapper>
        <Title size={15}>Simple Juice Recipes to boost your immune system</Title>

        <div>
          <Author
            size={21}
            image='https://randomuser.me/api/portraits/women/3.jpg'
            name='Silvia Araújo'
          />
          <span>Jan 22, 2022</span>
        </div>
      </Wrapper>
    </Card>
  );
}
