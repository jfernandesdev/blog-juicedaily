import React from 'react';
import Link from 'next/link';

import { CardWrapper, Image, Wrapper, Description, Separator } from './styles';

import { TagCategory } from '../TagCategory';
import { Author } from '../Author';
import Title from '../Title';

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
  type: 'medium' | 'large';
  hiddenAuthor?: boolean;
  post: IPosts;
}

export const Card: React.FC<CardProps> = ({ type, hiddenAuthor, post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <CardWrapper>
        <Image image={post.thumbnail} type={type} />

        <Wrapper>
          <div>
            <TagCategory category={post.category.slug} color="#40B2C9" />
            <Separator />
            <span>5 min. de leitura</span>
          </div>

          {!hiddenAuthor && (
            <div>
              <Author
                image="https://randomuser.me/api/portraits/women/3.jpg"
                name="Silvia Araújo"
              />
              <span>{post.publication_date}</span>
            </div>
          )}
        </Wrapper>

        <Title>
         {post.title}
        </Title>
        {type === 'large' && (
           <Description dangerouslySetInnerHTML={{ __html: post.text[0].text}} />
        )}
      </CardWrapper>
    </Link>
  );
};
