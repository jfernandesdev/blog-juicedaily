import styled from 'styled-components';

interface ContainerProps {
  imageBackground?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: calc(100vh - 100px);
  background: ${props =>
    props.imageBackground &&
    `linear-gradient(to right, transparent 0%, #fcfcfc 70%),
    url('${props.imageBackground}') no-repeat left center`};
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  @media (max-width: 769px) {
    background: ${props =>
      props.imageBackground &&
      `linear-gradient(to bottom left, transparent 0%, #fdfdfd 60%),
    url('${props.imageBackground}') no-repeat left 0`};
  }
`;

export const Content = styled.div`
  width: 45%;
  padding: 70px 5% 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: normal;

  @media (max-width: 769px) {
    width: 100%;
    height: 100%;
    padding: 5%;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.9em;
  letter-spacing: 2px;
  line-height: 1.2em;
  margin-bottom: 15px;
  max-width: 84%;

  @media (max-width: 769px) {
    font-size: 1.6em;
    max-width: 100%;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.5px;
  max-width: 95%;

  @media (max-width: 769px) {
    font-size: 0.9em;
  }
`;


export const PostsGrid = styled.div`
  padding: 3% 90px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  > :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  > :nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 4;
  }

   > :nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
  }
`;
