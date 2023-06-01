'use client'

// DEPENDENCY
import { ComponentProps, ReactNode } from 'react'

// COMPONENT
import * as Tabs from '@radix-ui/react-tabs'
import { MusicItem } from '@/components/MusicItem'

// STYLE
import {
  TabsContentStyled,
  TabsItemStyled,
  TabsListStyled,
  TabsRootStyled,
} from './styles'

// TYPE
type TabsRootProps = ComponentProps<typeof Tabs.Root> & {
  children: ReactNode
}

export function TabsRoot({ children, ...props }: TabsRootProps) {
  return <TabsRootStyled {...props}>{children}</TabsRootStyled>
}

// TYPE
type TabsListProps = ComponentProps<typeof Tabs.List> & {
  children: ReactNode
}

export function TabsList({ children, ...props }: TabsListProps) {
  return <TabsListStyled {...props}>{children}</TabsListStyled>
}

// TYPE
type TabsItemProps = ComponentProps<typeof Tabs.Trigger> & {
  children: ReactNode
}

export function TabsItem({ children, ...props }: TabsItemProps) {
  return <TabsItemStyled {...props}>{children}</TabsItemStyled>
}

// TYPE
type TabsContentProps = ComponentProps<typeof Tabs.Content> & {
  children?: ReactNode
}
export function TabsContent({ children, ...props }: TabsContentProps) {
  return (
    <TabsContentStyled {...props}>
      <div>
        <MusicItem name="Let it be" />
        <MusicItem name="Hotel California" />
        <MusicItem name="Money" />
        <MusicItem name="Time in a Bottle" />
        <MusicItem name="The Chain" />
        <MusicItem name="Killer Queen" />
      </div>
    </TabsContentStyled>
  )
}
