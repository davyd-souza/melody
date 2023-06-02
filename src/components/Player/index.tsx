'use client'

// DEPENDENCY
import { useState } from 'react'
import Image from 'next/image'

// COMPONENT
import { PlayerProgress } from './components/PlayerProgress'

// STYLE
import {
  Lyric,
  PlayerCategory,
  PlayerContainer,
  PlayerContent,
  PlayerExpandTrigger,
  PlayerIconGroup,
  PlayerInfo,
  PlayerLyricGroup,
  PlayerRoot,
  PlayerTitle,
} from './styles'

// ASSET
import Play from '@/assets/icons/Play'
import SkipForward from '@/assets/icons/SkipForward'
import SkipBack from '@/assets/icons/SkipBack'
import Equals from '@/assets/icons/Equals'

export function Player() {
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => {
    setOpen((state) => !state)
  }

  return (
    <PlayerRoot open={open}>
      <PlayerExpandTrigger asChild>
        <Equals size={20} onClick={handleToggleOpen} />
      </PlayerExpandTrigger>

      <PlayerContainer $open={open}>
        <Image
          src="https://picsum.photos/192"
          alt=""
          width={192}
          height={192}
        />

        <PlayerInfo $open={open}>
          <PlayerTitle>Why I Sing the Blues</PlayerTitle>
          <PlayerCategory>B.B. King</PlayerCategory>
        </PlayerInfo>

        <PlayerIconGroup>
          <SkipBack size={18} weight="fill" />
          <Play size={24} weight="fill" />
          <SkipForward size={18} weight="fill" />
        </PlayerIconGroup>
      </PlayerContainer>

      <PlayerContent>
        <PlayerProgress value={35} />

        <PlayerLyricGroup>
          <Lyric>I&apos;ve laid in a ghetto flat, cold and numb</Lyric>
          <Lyric>
            I heard the rats tell the bedbugs to give the roaches some
          </Lyric>
          <Lyric $current={true}>Everybody wanna know</Lyric>
          <Lyric>Why I&apos;m singing the blues</Lyric>

          <Lyric>Yes, I&apos;ve been around a long time</Lyric>
          <Lyric>People, I&apos;ve paid my dues</Lyric>
        </PlayerLyricGroup>
      </PlayerContent>
    </PlayerRoot>
  )
}
