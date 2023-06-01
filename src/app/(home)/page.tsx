// COMPONENT
import {
  TabsContent,
  TabsItem,
  TabsList,
  TabsRoot,
} from '../components/TabsNavigation'
import { Category } from './components/Category'

// STYLE
import { HomeRoot, CategoryRoot, Title } from './page.style'

export default function Home() {
  return (
    <HomeRoot>
      <Title>Boa tarde, Davyd!</Title>

      <TabsRoot defaultValue="music">
        <TabsList>
          <TabsItem value="music">Músicas</TabsItem>
          <TabsItem value="album">Álbuns</TabsItem>
          <TabsItem value="podcast">Posdcasts</TabsItem>
          <TabsItem value="artist">Artistas</TabsItem>
        </TabsList>

        <TabsContent value="music" />
        <TabsContent value="album" />
        <TabsContent value="podcast" />
        <TabsContent value="artist" />
      </TabsRoot>

      <CategoryRoot>
        <Category title="Feitos para você" />
        <Category title="Tops do Brasil" />
        <Category title="Rocks Clássico" />
      </CategoryRoot>
    </HomeRoot>
  )
}
