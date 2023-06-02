'use client'

// DEPENDENCY
import styled from 'styled-components'

// COMPONENT
import * as Switch from '@radix-ui/react-switch'

export const SwitchRoot = styled(Switch.Root)`
  all: unset;

  position: relative;
  width: 42px;
  height: 25px;

  background-color: #35353a;
  border-radius: 9999px;

  outline: transparent;

  cursor: pointer;

  &[data-state='checked'] {
    background-color: #22c55e;
  }
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 20px;
  height: 20px;

  background-color: #fff;
  border-radius: 9999px;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  transform: translateX(2px);
  will-change: 'transform';

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`
