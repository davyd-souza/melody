'use client'

// DEPENDENCY
import { ComponentProps } from 'react'

// COMPONENT
import * as Progress from '@radix-ui/react-progress'

// STYLE
import { ProgressIndicator, ProgressRoot } from './styles'

// TYPE
type PlayerProgressProps = ComponentProps<typeof Progress.Root> & {}

export function PlayerProgress({ value = 0, ...props }: PlayerProgressProps) {
  return (
    <ProgressRoot value={value} {...props}>
      <ProgressIndicator
        style={{ transform: `translateX(-${100 - value!}%)` }}
      />
    </ProgressRoot>
  )
}
