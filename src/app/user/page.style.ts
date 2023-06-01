'use client'

// DEPENDENCY
import styled from 'styled-components'

export const UserRoot = styled.main`
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

export const ConfigGroup = styled.section`
  display: grid;
  gap: 0.5rem;
`

export const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;

  border-bottom: 2px solid #2f2f32;
`
