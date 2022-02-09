import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Prismic from '@prismicio/client';

import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Carousel, CarouselItem } from '../components/Carousel';
import { Card } from '../components/Card';
import { SmallCard } from '../components/SmallCard';
import { Pagination } from '../components/Pagination';

import { getPrismicClient } from '../services/prismic';

import { Container, Content, Title, Text, PostsGrid } from './styles';

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

interface IPosts {
  slug: string;
  title: string;
  category: {
    slug: string;
  };
  author: string;
  text: {
    type: string;
    text: string;
  }[];
  thumbnail: string;
  publication_date: string;
}

interface HomeProps {
  posts: IPosts[];
}

export default function Home({ posts }: HomeProps) {
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
        <Card
          type="large"
          post={posts[0]}
        />

        <div>
          {posts.slice(1, 5).map(post => (
            <SmallCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>

        <div>
          {posts.slice(5, posts.length).map(post => (
            <Card
              key={post.slug}
              type="medium"
              post={post}
            />
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
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    { orderings: '[document.first_publication_date desc]' }
  );
  
  const posts = postResponse.results.map((post) => ({
    slug: post.uid,
    title: post.data.title,
    category: post.data.category,
    author: post.data.author,
    text: post.data.text,
    thumbnail: post.data.thumbnail.url,
    publication_date: format(
      parseISO(post.first_publication_date),
      'd MMM yy',
      { locale: ptBR }
    )
  }));
  
  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 8 // uma requisição de atualização da API a cada 8h
  };
};
