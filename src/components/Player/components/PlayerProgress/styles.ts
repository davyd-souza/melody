'use client'

// DEPENDENCY
import styled from 'styled-components'

// COMPONENT
import * as Progress from '@radix-ui/react-progress'

export const ProgressRoot = styled(Progress.Root)`
  position: relative;
  overflow: hidden;

  background-color: #2f2f32;
  border-radius: 9999px;

  width: 100%;
  height: 12px;

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a
  transform: translateZ(0);
`

export const ProgressIndicator = styled(Progress.Indicator)`
  background-color: #00b4ff;
  width: 100%;
  height: 100%;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`
