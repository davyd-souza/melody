'use client'

// DEPENDENCY
import styled from 'styled-components'

export const Viewport = styled.div`
  width: 430px;
  height: 900px;

  display: grid;
  grid-template-rows: min-content 1fr min-content;
  gap: 1rem;

  background-color: #121214;
  color: #fff;

  border-radius: 4px;
`

export const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 700;
  color: #00b4ff;

  margin-inline: auto;
  padding-inline: 1rem;

  & > span {
    color: #78b22b;
  }
`
