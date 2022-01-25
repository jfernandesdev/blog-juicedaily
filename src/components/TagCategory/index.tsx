import React from 'react';

import { 
  Category
} from './styles';

interface TagCategory {
  category: string;
  color?: string;
}

const TagCategory: React.FC<TagCategory> = ({ category, color}) => {
  return (
    <Category color={color}>{category}</Category>
  );
}

export default TagCategory;