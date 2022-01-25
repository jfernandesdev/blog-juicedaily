import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 410px;
  overflow: hidden;
  background: var(--white);

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.5px;
    opacity: 0.7;
    margin-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  h2 {
    cursor: pointer;
  }
`;

interface ImageProps {
  image?: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 60%;
  background: ${props =>
    props.image && `url(${props.image}) no-repeat center center;`};
  background-size: cover;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      font-weight: normal;
      font-size: 13px;
      line-height: 12px;
      letter-spacing: 0.5px;
      opacity: 0.3;
    }
  }
`;
