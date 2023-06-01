// DEPENDENCY
import Image from 'next/image'

// STYLE
import { MusicItemContainer } from './styles'

// TYPE
type MusicItemProps = {
  name: string
}

export function MusicItem({ name }: MusicItemProps) {
  return (
    <MusicItemContainer href="#">
      <Image src="https://picsum.photos/48" alt="" width={48} height={48} />
      <p>{name}</p>
    </MusicItemContainer>
  )
}
