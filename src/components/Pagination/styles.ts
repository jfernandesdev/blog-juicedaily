import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 30px;
  gap: 10px;
`;

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--white);
  border: 0;
  color: var(--black);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  transition: 0.2s linear;
  flex-shrink: 0;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  > svg {
    width: 16px;
  }

  &:hover {
    background: ${(props) => !props.disabled && 'var(--orange)'};
    color: ${(props) => !props.disabled && 'var(--white)'};
  }
`;

export const Text = styled.span`
  font-size: 14px;
  min-width: 150px;
  opacity: 0.8;
  text-align: center;
`;
