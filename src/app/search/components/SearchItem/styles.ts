'use client'

// DEPENDENCY
import styled from 'styled-components'
import Link from 'next/link'

export const SearchItemStyled = styled(Link)`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 0.875rem;

  background-color: #2f2f32;
  border-radius: 4px;

  overflow: hidden;
  text-decoration: none;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  & > svg {
    min-width: 20px;
    min-height: 20px;
  }

  & > *:last-child {
    padding-inline-end: 0.25rem;
  }

  &:is(:hover, :focus-visible) {
    background-color: #3f4046;
  }
`

export const SearchItemTitle = styled.p`
  color: #fff;
  line-height: 1.5;
`

export const CategoryText = styled.p`
  font-size: 0.875rem;
  color: #a0a1a8;
  line-height: 1.25;
`
