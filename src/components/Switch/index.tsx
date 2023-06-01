// DEPENDENCY
import { ComponentProps } from 'react'

// COMPONENT
import * as SwitchPrimitive from '@radix-ui/react-switch'

// STYLE
import { SwitchRoot, SwitchThumb } from './styles'

// TYPE
type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root> & {}

export function Switch({ ...props }: SwitchProps) {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb />
    </SwitchRoot>
  )
}
