// DEPENDENCY
import { ReactNode } from 'react'

// COMPONENT
import { Navigation } from '@/components/Navigation'
import { Player } from '@/components/Player'

// LIB
import StyledComponentsRegistry from '@/lib/styledRegistry'

// STYLE
import GlobalStyles from '@/styles/global'
import { Logo, Viewport } from './layout.style'

// ASSET
import { Inter } from 'next/font/google'

// TYPE
type RootLayoutProps = {
  children: ReactNode | ReactNode[]
}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Melody',
  description: "Listen to the world's melody",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Viewport>
            <Logo>
              Melod<span>y</span>
            </Logo>

            {children}

            <Player />
            <Navigation />
          </Viewport>

          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
