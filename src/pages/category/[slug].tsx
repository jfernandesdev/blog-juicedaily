import { GetStaticProps } from 'next';
import React from 'react';
import Prismic from '@prismicio/client';

import { Card } from '../../components/Card';

import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';

import { Container, PostsGrid } from './styles';

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
}

interface CategoryProps {
  posts: IPosts[];
}

export default function Category({ posts }: CategoryProps) {
  return (
    <>
      <Head>
        <title>Categoria | Juicedaily</title>
      </Head>

      <Container>
        <PostsGrid>
          {posts.map((post) => (
            <Card key={post.slug} type="medium" post={post} />
          ))}
        </PostsGrid>
      </Container>
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
    thumbnail: post.data.thumbnail.url
  }));

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 8 // uma requisição de atualização da API a cada 8h
  };
};
