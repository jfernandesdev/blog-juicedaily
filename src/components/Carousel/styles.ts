import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: calc(100vh - 90px);
  position: relative;
`;

interface InnerProps {
  translateX?: string;
}

export const Inner = styled.div<InnerProps>`
  transform: ${props => props.translateX && `translateX(${props.translateX})`};
  white-space: nowrap;
  transition: transform 0.4s;
`;

export const WrapperCarouselItem = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  left: 50%;
  gap: 6px;

  @media (max-width: 769px) {
    left: 0;
    right: 0;
  }

  > button {
    background: var(--light-gray);
    width: 15px;
    height: 15px;
    border-radius: 32px;
    border: 0;
    transition: width 0.3s ease-out;
    cursor: pointer;
  }

  > button.active {
    width: 40px;
    height: 15px;
    background: var(--orange);
  }

  > button:hover {
   filter: brightness(0.9);
  }
`;