// COMPONENT
import {
  TabsContent,
  TabsItem,
  TabsList,
  TabsRoot,
} from '../components/TabsNavigation'

// STYLE
import { LibraryRoot, Title } from './page.style'

export default function Library() {
  return (
    <LibraryRoot>
      <Title>Sua Biblioteca</Title>

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
    </LibraryRoot>
  )
}
