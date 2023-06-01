'use client'

// DEPENDENCY
import styled from 'styled-components'

// COMPONENT
import * as Tabs from '@radix-ui/react-tabs'

export const TabsRootStyled = styled(Tabs.Root)`
  display: grid;
`

export const TabsListStyled = styled(Tabs.List)`
  display: flex;
  justify-content: center;

  border-radius: 9999px;
  background-color: #2f2f32;
`

export const TabsItemStyled = styled(Tabs.Trigger)`
  all: unset;

  flex: 1;

  text-align: center;

  padding-inline: 1rem;
  padding-block: 0.25rem;
  border-radius: 9999px;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:is(:focus-visible, :hover) {
    background-color: #4c4d55;
  }

  &[data-state='active'] {
    background-color: #3f4046;
  }

  cursor: pointer;
`

export const TabsContentStyled = styled(Tabs.Content)`
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    padding-block: 1rem;
  }
`
