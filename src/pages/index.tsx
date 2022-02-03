import React, { useState } from 'react';

import { Container, Content, Title, Text, PostsGrid } from './styles';

import { Carousel, CarouselItem } from '../components/Carousel';

import { Card } from '../components/Card';
import { SmallCard } from '../components/SmallCard';
import { Pagination } from '../components/Pagination';

const banners = [
  {
    image: '/fruit-banner-2.jpg',
    title: 'Combinação de frutas para seu suco diário',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: '/fruit-banner-1.jpg',
    title: 'Frutas da estação, para encher seu cardápio de saúde',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: '/fruit-banner-3.jpg',
    title: 'Entenda a importância das frutas no seu cardápio diário',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
  }
];

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  let totalPages = 10;

  const handleNextPage = () => {
    if (page >= 1 && page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1 && page <= totalPages) {
      setPage(page - 1);
    }
  };

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

      <PostsGrid>
        <Card type="large" />

        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <SmallCard key={index} />
          ))}
        </div>

        <div>
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} type="medium" />
          ))}
        </div>
      </PostsGrid>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        next={handleNextPage}
        previous={handlePreviousPage}
      />
    </>
  );
};

export default Home;
