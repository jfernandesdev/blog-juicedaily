import React from 'react';

import {
  Card,
  Image,
  Wrapper,
} from './styles';

import TagCategory from '../TagCategory';
import Author from '../Author';


const MediumCard: React.FC = () => {
  return (
    <Card>
      <Image image='./avocado.jpg' />

      <Wrapper>
        <div>
          <TagCategory category="Fruit" color="#40B2C9" />
          <span>5 min. de leitura</span>
        </div>

        <div>
          <Author
            size={21}
            image='https://randomuser.me/api/portraits/women/3.jpg'
            name='Silvia Araújo'
          />
          <span>Jan 22, 2022</span>
        </div>

      </Wrapper>
      <h2>Simple Juice Recipes to boost your immune system</h2>

    </Card>
  );
}

export default MediumCard;