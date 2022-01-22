import React from 'react';

import {Container, Content, Title, Text} from './styles';

import Carousel, {CarouselItem} from '../components/Carousel';

const banners = [
  {
    image: './fruit-banner-2.jpg',
    title: 'Combinação de frutas para seu suco diário',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: './fruit-banner-1.jpg',
    title: 'Frutas da estação, para encher seu cardápio de saúde',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: './fruit-banner-3.jpg',
    title: 'Entenda a importância das frutas no seu cardápio diário',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
  }
];

const Home: React.FC = () => {
  return (
    <>
      <Carousel>
        {banners.map((item, index) => (
          <CarouselItem key={index}>
            <Container imageBackground={item.image}>
              <Content>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
              </Content>
            </Container>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
};

export default Home;
