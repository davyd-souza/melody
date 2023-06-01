'use client'

// DEPENDENCY
import { ReactNode } from 'react'
import { IconContext } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'

// STYLE
import { NavLinkStyled } from './style'

// TYPE
type NavlinkProps = {
  icon: ReactNode
  path: string
}

export function Navlink({ icon, path }: NavlinkProps) {
  const currentPath = usePathname()
  const isCurrentPathActive = path === currentPath

  return (
    <IconContext.Provider
      value={{ weight: isCurrentPathActive ? 'fill' : 'regular' }}
    >
      <NavLinkStyled href={path}>{icon}</NavLinkStyled>
    </IconContext.Provider>
  )
}
