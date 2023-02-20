import { PropsWithChildren } from 'react'

import { StylesProvider } from './StylesProvider'

export function AppProvider({ children }: PropsWithChildren) {
  return <StylesProvider>{children}</StylesProvider>
}
