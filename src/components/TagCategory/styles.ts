import styled from 'styled-components';

interface CategoryProps {
  color?: string;
}

export const Category = styled.h6<CategoryProps>`
  font-weight: 500;
  font-size: 13px;
  line-height: 12px;
  letter-spacing: 1px;
  color: ${props => props.color ? `${props.color}` : '#000'};
  text-transform: uppercase;
`;