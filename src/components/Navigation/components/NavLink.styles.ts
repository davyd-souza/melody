'use client'

// DEPENDENCY
import Link from 'next/link'
import styled from 'styled-components'

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;

  outline: transparent;

  & > svg {
    width: 32px;
    height: 32px;
  }
`
