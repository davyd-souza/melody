'use client'

// DEPENDENCY
import styled from 'styled-components'

export const Navbar = styled.nav`
  min-width: min(50em, 100%);
  margin-inline: auto;

  padding-inline: 1rem;
  padding-block: 1.5rem;

  background-color: #013163;
`

export const NavbarList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-between;
`

export const NavbarItem = styled.li`
  padding: 0.5rem;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:is(:hover, :focus-within) {
    border-bottom-color: #005fe3;
  }
`
