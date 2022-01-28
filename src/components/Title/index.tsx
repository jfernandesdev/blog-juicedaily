import styled from 'styled-components';

interface TitleProps {
  size?: number;
}

export default styled.h2<TitleProps>`
  font-weight: 500;
  font-size: ${props => props.size ? `${props.size}px` : ' 19px'};
  line-height: ${props => props.size ? `calc(${props.size} + 5px)` : ' 30px'};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 5px 0px 10px;
  cursor: pointer;
`;