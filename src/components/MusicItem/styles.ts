'use client'

// DEPENDENCY
import styled from 'styled-components'
import Link from 'next/link'

export const MusicItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 4px;
  overflow: hidden;
  background-color: #2f2f32;

  text-decoration: none;
  color: #fff;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:is(:hover, :focus-visible) {
    background-color: #3f4046;
  }

  & > p {
    font-size: 0.875rem;
  }

  & > img {
    width: 48px;
    height: 48px;
  }
`
