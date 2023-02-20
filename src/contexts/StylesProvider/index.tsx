import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/global'
import { theme } from '@/styles/theme'

export function StylesProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
