'use client'

// DEPENDENCY
import styled from 'styled-components'

export const LibraryRoot = styled.main`
  padding-inline: 1rem;
  overflow: hidden;

  & > * ~ * {
    margin-top: 1.25rem;
  }
`
export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
`
