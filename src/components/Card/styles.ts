import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  max-height: 410px;
  overflow: hidden;
  background: var(--white);
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.5px;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

interface ImageProps {
  image?: string;
  type?: string;
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: ${(props) => (props.type === 'large' ? '55%' : '160px')};
  background: ${(props) =>
    props.image && `url(${props.image}) no-repeat center center;`};
  background-size: cover;
  cursor: pointer;

  @media (max-width: 769px) {
    height: 200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 6px;

    > span {
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.5px;
      opacity: 0.3;
    }
  }
`;

export const Separator = styled.span`
  width: 15px;
  height: 0px;
  border: 1px solid #dedede;
`;
