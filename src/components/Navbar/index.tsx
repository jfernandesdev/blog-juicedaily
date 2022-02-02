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
  }

  return (
    <Container>
      <Logo>
        <Link href="/">
          <img src='/logo.svg' alt='Juicedaily' />
        </Link>
        <span>Blog</span>
      </Logo>
    
      <NavContainer className={menuIsOpen && "openMenu"}>
        <Nav>
          <NavItem>
            <NavLink href="#">Sucos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Frutas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Dicas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Receitas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Bem-estar</NavLink>
          </NavItem>
        </Nav>
      </NavContainer>

      <WrapperBtn>
        <InputSearch />

        <NavbarToggler 
          className={menuIsOpen && "activated"}
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
