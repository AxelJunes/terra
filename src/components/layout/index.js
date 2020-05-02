import { ThemeProvider } from '@chakra-ui/core'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Layout
