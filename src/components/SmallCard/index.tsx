import React from 'react';

import {
  Card,
  Image,
  Wrapper,
} from './styles';

import Author from '../Author';

const SmallCard: React.FC = () => {
  return (
    <Card>

      <Image image='./avocado.jpg' />

      <Wrapper>
        <h2>I am large card</h2>

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

export default SmallCard;