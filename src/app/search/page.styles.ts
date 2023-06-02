'use client'

// DEPENDENCY
import styled from 'styled-components'

export const SearchRoot = styled.main`
  padding-inline: 1rem;
  overflow: hidden;

  & > * ~ * {
    margin-top: 1.25rem;
  }
`

export const InputContainer = styled.div`
  padding-inline: 1rem;
  padding-block: 0.25rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: #2f2f32;

  border-radius: 9999px;
  border: 2px solid transparent;

  color: #fff;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  & > svg:last-of-type {
    color: #a0a1a8;
    cursor: pointer;
  }

  & > input {
    width: 100%;

    background-color: transparent;
    outline: transparent;
    border: 0;

    color: #fff;
  }

  &:has(input:focus-visible) {
    border-color: #00b4ff;
  }
`

export const SearchResult = styled.section`
  height: 590px;
  overflow-x: auto;

  & > * + * {
    margin-block-start: 0.5rem;
  }
`
