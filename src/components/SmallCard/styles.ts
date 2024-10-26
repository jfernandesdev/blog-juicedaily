import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 90px;
  overflow: hidden;
  background: var(--white);
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

interface ImageProps {
  image?: string;
}

export const Image = styled.div<ImageProps>`
  min-width: 40%;
  height: 100%;
  background: ${(props) =>
    props.image && `url(${props.image}) no-repeat center center;`};
  background-size: cover;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;

  > div {
    display: flex;
    align-items: center;
    grid-gap: 8px;

    @media (max-width: 769px) {
      flex-direction: column;
    }

    > span {
      font-weight: normal;
      font-size: 11px;
      line-height: 12px;
      letter-spacing: 0.5px;
      opacity: 0.3;
      white-space: nowrap;
    }
  }
`;
