import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 6;
  background: var(--white);
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 5% 0 90px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.01);

  @media (max-width: 769px) {
    padding: 0 5%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;
  gap: 8px;

  > img {
    width: 130px;
    cursor: pointer;
  }

  > span {
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    opacity: 0.3;
    padding-left: 8px;
    line-height: 20px;
  }
`;

export const NavContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--orange);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    visibility: hidden;
    width: 0;

    &.openMenu {
      width: 100%;
      visibility: revert;
      > ul > li > a {
        color: var(--white);
      }
    }

    > ul {
      flex-direction: column;
      text-align: center;

      li {
        font-size: 20px;
        padding: 1%;
      }
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  gap: 30px;
  list-style-type: none;
`;

export const NavItem = styled.li`
  padding: 5px 0;
  white-space: nowrap;
  position: relative;
  display: inline-block;

  :before {
    content: '';
    position: absolute;
    background: var(--orange);
    width: 0%;
    display: block;
    bottom: 0px;
    height: 2px;
    transition: all ease-in-out 0.3s;
    -moz-transition: all ease-in-out 0.3s;
    -webkit-transition: all ease-in-out 0.3s;
    -o-transition: all ease-in-out 0.3s;
    -ms-transition: all ease-in-out 0.3s;
  }

  :hover:before {
    width: 100%;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--black);
`;

export const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
`;

export const NavbarToggler = styled.button`
  @media (max-width: 769px) {
    display: flex;
  }

  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2em;
  height: 1.5em;
  position: relative;
  margin-right: 20px;
  border: 0;
  background: transparent;
  cursor: pointer;

  > span {
    display: inline-block;
    width: 100%;
    height: 8%;
    background: var(--orange);
    transition: all 0.5s ease;
    transform-origin: left;

    &:nth-of-type(1),
    &:nth-of-type(5) {
      opacity: 0;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
    }

    &:nth-of-type(3) {
      transition-delay: 0.1s;
    }

    &:nth-of-type(4) {
      transition-delay: 0.2s;
      position: absolute;
      bottom: 0;
    }
  }

  &.activated {
    span {
      width: 0;
      background: var(--white);
      &:nth-of-type(1) {
        width: 100%;
        animation: hamburger4animTop 0.8s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
      }
      &:nth-of-type(5) {
        width: 100%;
        animation: hamburger4animBottom 0.8s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
      }
    }
  }
`;
