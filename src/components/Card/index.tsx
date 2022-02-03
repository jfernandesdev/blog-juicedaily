import React from 'react';
import Link from 'next/link';

import { CardWrapper, Image, Wrapper, Description, Separator } from './styles';

import { TagCategory } from '../TagCategory';
import { Author } from '../Author';
import Title from '../Title';

interface CardProps {
  type: 'medium' | 'large';
  hiddenAuthor?: boolean;
}

export const Card: React.FC<CardProps> = ({ type, hiddenAuthor }) => {
  return (
    <Link href="/post/simple-juice-recipes-to-boost-your-immune">
      <CardWrapper>
        <Image image="/avocado.jpg" type={type} />

        <Wrapper>
          <div>
            <TagCategory category="Fruit" color="#40B2C9" />
            <Separator />
            <span>5 min. de leitura</span>
          </div>

          {!hiddenAuthor && (
            <div>
              <Author
                image="https://randomuser.me/api/portraits/women/3.jpg"
                name="Silvia Araújo"
              />
              <span>Jan 22, 2022</span>
            </div>
          )}
        </Wrapper>

        <Title>
          I am large card I am large card I am large card I am large cardI am
          large cardI am large cardI am large cardI am large cardI am large
          cardI am large card
        </Title>
        {type === 'large' && (
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum
            dolor sit amet, consetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          </Description>
        )}
      </CardWrapper>
    </Link>
  );
};
