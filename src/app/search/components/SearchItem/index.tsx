// DEPENDENCY
import Image from 'next/image'

// STYLE
import { CategoryText, SearchItemStyled, SearchItemTitle } from './styles'
import CaretRight from '@/assets/icons/CaretRight'

// TYPE
type SearchItemProps = {
  title: string
  category: string
}

export function SearchItem({ title, category }: SearchItemProps) {
  return (
    <SearchItemStyled href="#" key={title}>
      <Image src="https://picsum.photos/48" alt="" width={48} height={48} />
      <div>
        <SearchItemTitle>{title}</SearchItemTitle>
        <CategoryText>{category}</CategoryText>
      </div>
      <CaretRight color="#fff" />
    </SearchItemStyled>
  )
}
