'use client'

// DEPENDENCY
import styled, { css } from 'styled-components'

// COMPONENT
import * as Collapsible from '@radix-ui/react-collapsible'

export const Lyric = styled.p<{ $current?: boolean }>`
  color: ${(props) => (props.$current ? '#fff' : '#a0a1a8')};
  text-align: center;
  line-height: 1.6;
  font-size: ${(props) => (props.$current ? '1.25rem' : '1rem')};
`

export const PlayerLyricGroup = styled.div``

export const PlayerContent = styled(Collapsible.Content)`
  margin-block-start: 1rem;
  overflow: hidden;

  & > * + * {
    margin-block-start: 2rem;
  }
`

export const PlayerCategory = styled.p`
  font-size: 0.875rem;
  color: #a0a1a8;
`

export const PlayerTitle = styled.p`
  line-height: 1.5;
`

export const PlayerInfo = styled.div<{ $open: boolean }>``

export const PlayerIconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-inline-start: auto;
`

export const PlayerExpandTrigger = styled(Collapsible.Trigger)`
  margin-inline: auto;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  cursor: pointer;
`

export const PlayerContainer = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > img {
    width: 72px;
    height: 72px;
  }

  ${(props) =>
    props.$open &&
    css`
      margin-block-start: 1rem;
      flex-direction: column;

      & > img {
        width: 192px;
        height: 192px;
      }

      ${PlayerInfo} {
        text-align: center;
      }

      ${PlayerIconGroup} {
        margin-inline: auto;
      }
    `}
`

export const PlayerRoot = styled(Collapsible.Root)`
  width: 25rem;
  padding: 1rem;

  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);

  background-image: linear-gradient(180deg, #006a71 0%, #004082 100%);
  border-radius: 4px;
  overflow: hidden;

  z-index: 10;
`
