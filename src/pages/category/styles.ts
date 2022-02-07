import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostsGrid = styled.div`
  padding: 3% 90px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }
`;
