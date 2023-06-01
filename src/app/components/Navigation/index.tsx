// COMPONENT
import { Navlink } from './components/Navlink'

// STYLE
import { Navbar, NavbarItem, NavbarList } from './styles'

// ASSET
import House from '@/assets/icons/House'
import MagnifyingGlass from '@/assets/icons/MagnifyingGlass'
import Playlist from '@/assets/icons/Playlist'
import User from '@/assets/icons/User'

const NAV_ITEM = [
  {
    name: 'home',
    icon: <House />,
    path: '/',
  },
  {
    name: 'search',
    icon: <MagnifyingGlass />,
    path: '/search',
  },
  {
    name: 'library',
    icon: <Playlist />,
    path: '/library',
  },
  {
    name: 'user',
    icon: <User />,
    path: '/user',
  },
]

export function Navigation() {
  return (
    <Navbar>
      <NavbarList role="navigation">
        {NAV_ITEM.map(({ name, icon, path }) => (
          <NavbarItem key={name}>
            <Navlink icon={icon} path={path} />
          </NavbarItem>
        ))}
      </NavbarList>
    </Navbar>
  )
}
