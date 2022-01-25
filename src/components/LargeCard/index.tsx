import React from 'react';

import { 
  Card,
  Image,
  Wrapper,
} from './styles';

import TagCategory from '../TagCategory';
import Author from '../Author';


const LargeCard: React.FC = () => {
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
            image='https://randomuser.me/api/portraits/women/3.jpg'
          name='Silvia Araújo'
         />
          <span>Jan 22, 2022</span>
        </div>
      </Wrapper>

      <h2>I am large card</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet, consetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit</p>
    </Card>
  );
}

export default LargeCard;