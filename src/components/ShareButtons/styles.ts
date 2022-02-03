import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 12%;
  right: -12%;
  width: 40px;
  height: 100%;

  @media (max-width: 769px) {
    position: fixed;
    left: 0;
    bottom: 0;
    top: auto;
    width: 100%;
    height: 70px;
    z-index: 1;
    background: hsla(0,0%,100%,0.99);
  }
`;

interface Props {
  color?: string;
}

export const Content = styled.div<Props>`
  position: sticky;
  top: 100px;
  flex-direction: column-reverse;
  align-items: flex-start;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 769px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 16px;

  }

  > button:hover {
    background: ${props => props.color ? props.color : `var(--blue)`};
    color: #fff;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  font-size: 0;
  flex-shrink: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s;

  > svg {
    width: 22px;
  }
`;
