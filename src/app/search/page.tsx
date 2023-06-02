'use client'

// DEPENDENCY
import { useState } from 'react'

// COMPONENT
import { TabsItem, TabsList, TabsRoot } from '@/components/TabsNavigation'
import { SearchItem } from './components/SearchItem'

// STYLE
import { InputContainer, SearchResult, SearchRoot } from './page.styles'

// ASSET
import MagnifyingGlass from '@/assets/icons/MagnifyingGlass'
import X from '@/assets/icons/X'

// VARIABLE
const SEARCH_RESULT = [
  { title: 'Robert Johnson', category: 'Artista' },
  { title: 'Little Boy Blue - Big Walter Horton', category: 'Música' },
  { title: 'Blues na Roda', category: 'Podcast' },
  { title: 'Elmore James', category: 'Artista' },
  { title: 'Ray Charles', category: 'Artista' },
  { title: "She's A Sweet One - Junior Wells", category: 'Música' },
  { title: 'Bluesman - Baco Exu do Blues', category: 'Álbum' },
  { title: 'Chains And Things - B.B. King', category: 'Música' },
  { title: 'Hugh Laurie', category: 'Artista' },
  { title: 'The Blues Podcast', category: 'Podcast' },
  { title: 'The Sky is Crying - Elmore James', category: 'Música' },
  { title: 'Smokestack Lightnin - Howlin Wolf', category: 'Música' },
  { title: 'Blues - Check Berry', category: 'Podcast' },
  { title: 'B.B. King', category: 'Artista' },
  { title: 'The Blues Kitchen Radio', category: 'Podcast' },
]

export default function Search() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value)
  }

  const handleClearSearchValue = () => {
    setSearchValue('')
  }

  return (
    <SearchRoot>
      <InputContainer>
        <MagnifyingGlass size={24} />
        <input
          value={searchValue}
          type="text"
          placeholder="Pesquisar"
          onChange={(evt) => handleSearchValueChange(evt.target.value)}
        />
        <X size={16} onClick={handleClearSearchValue} />
      </InputContainer>

      {!!searchValue && (
        <>
          <TabsRoot defaultValue="music">
            <TabsList>
              <TabsItem value="music">Músicas</TabsItem>
              <TabsItem value="album">Álbuns</TabsItem>
              <TabsItem value="podcast">Podcasts</TabsItem>
              <TabsItem value="artist">Artistas</TabsItem>
            </TabsList>
          </TabsRoot>

          <SearchResult>
            {SEARCH_RESULT.map(({ title, category }) => (
              <SearchItem key={title} title={title} category={category} />
            ))}
          </SearchResult>
        </>
      )}
    </SearchRoot>
  )
}
