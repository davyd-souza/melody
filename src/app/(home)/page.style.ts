'use client'

// DEPENDENCY
import styled from 'styled-components'

export const HomeRoot = styled.main`
  padding-inline: 1rem;
  overflow: hidden;

  & > * ~ * {
    margin-top: 1.25rem;
  }
`
export const Title = styled.h2`
  font-size: 1.125rem;
`

export const CategoryRoot = styled.div`
  display: grid;
  gap: 1.125rem;

  overflow-x: hidden;
  overflow-y: auto;

  height: 400px;
`
