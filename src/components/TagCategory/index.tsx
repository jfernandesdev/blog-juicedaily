import React from 'react';

import { Category } from './styles';

interface TagCategory {
  category: string;
  color?: string;
  withSeparator?: boolean;
}

export const TagCategory: React.FC<TagCategory> = ({
  category,
  color,
  withSeparator
}) => {
  return (
    <Category color={color} className={withSeparator && 'withSeparator'}>
      {category}
    </Category>
  );
};
