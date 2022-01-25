import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  overflow: hidden;
  background: var(--white);
  margin-bottom: 10px;


  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

interface ImageProps {
  image?: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 225px;
  background: ${props => props.image && `url(${props.image}) no-repeat center center;`};
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
      font-size: 11px;
      line-height: 12px;
      letter-spacing: 0.5px;
      opacity: 0.3;
    }
  }
`;