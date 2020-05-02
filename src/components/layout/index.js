import { Box, ThemeProvider } from '@chakra-ui/core'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Box background='#d0d5db' height='100vh' width='100vw'>
        <Box padding='1rem'>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
