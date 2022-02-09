import React from 'react';
import Link from 'next/link';

import { Card, Image, Wrapper } from './styles';

import Title from '../Title';
import { Author } from '../Author';

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

interface CardProps {
  post: IPosts;
}

export const SmallCard: React.FC<CardProps> = ({post}) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <Card>
        <Image image={post.thumbnail} />


        <Wrapper>
          <Title size={15}>
            {post.title}
          </Title>

          <div>
            <Author
              image="https://randomuser.me/api/portraits/women/3.jpg"
              name="Silvia Araújo"
            />
            <span>{post.publication_date}</span>
          </div>
        </Wrapper>
      </Card>
    </Link>
  );
};
