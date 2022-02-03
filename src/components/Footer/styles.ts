import styled from 'styled-components';

export const Container = styled.div`
  background: var(--blue);
  color: var(--white);
  height: 243px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  z-index: 5;
  position: relative;

  @media (max-width: 769px) {
    height: 150px;
    padding: 5%;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  filter: brightness(0%) invert(100%);
  width: 130px;
`;

export const Copy = styled.span``;

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SocialBtn = styled.button`
  width: 40px;
  color: var(--white);
  background: transparent;
  border: 0;
  padding: 5px;
  border-radius: 50%;
  transform: linear 0.5s;
  position: relative;
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  :hover:before {
    border: 2px solid var(--white);
  }
`;
