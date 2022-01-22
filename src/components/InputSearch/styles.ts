import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  
  @media(max-width: 769px) {
    display: none;
  }
  
  :hover, :focus {
    input {
      width: 300px;
      padding: 5px 10px;
    }
  }
`;

export const Input = styled.input`
  background: var(--orange);
  font-size: 20px;
  color: var(--white);
  border: 0;
  outline: 0;
  width: 0;
  transition: width 0.3s ease 0s;

  ::placeholder {
    color: rgba(255,255,255,0.7);
  }
`;

export const ButtonSearch = styled.button`
  background: var(--orange);
  width: 90px;
  height: 90px;
  color: var(--white);
  border: 0;
  cursor: pointer;

  > svg {
    width: 30px;
  }
`;