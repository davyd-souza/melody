// DEPENDENCY
import { ReactNode } from 'react'

// LIB
import StyledComponentsRegistry from '@/lib/styled-registry'
// ASSET
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Melody',
  description: "Listen to the world's melody",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
