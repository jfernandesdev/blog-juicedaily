import React, { useState } from 'react';
import Link from 'next/link';

import {
  Container,
  NavContainer,
  Logo,
  Nav,
  NavItem,
  NavLink,
  WrapperBtn,
  NavbarToggler
} from './styles';

import { InputSearch } from '../InputSearch';

export const Navbar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Container>
      <Logo>
        <Link href="/">
          <img src="/logo.svg" alt="Juicedaily" />
        </Link>
        <span>Blog</span>
      </Logo>

      <NavContainer className={menuIsOpen && 'openMenu'}>
        <Nav>
          <NavItem>
            <Link href="/category/sucos">
              <NavLink>Sucos</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/category/frutas">
              <NavLink>Frutas</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/category/dicas">
              <NavLink>Dicas</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/category/receitas">
              <NavLink>Receitas</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/category/bem-estar">
              <NavLink>Bem-estar</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </NavContainer>

      <WrapperBtn>
        <InputSearch />

        <NavbarToggler
          className={menuIsOpen && 'activated'}
          onClick={toggleMenu}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </NavbarToggler>
      </WrapperBtn>
    </Container>
  );
};
