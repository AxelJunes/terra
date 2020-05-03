import { Box, Flex, Image, Text, ThemeProvider } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

const NavLink = ({ children, ...rest }) => {
  return (
    <Link style={{ textDecoration: 'none' }} {...rest}>
      {children}
    </Link>
  )
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Box bg='#d0d5db' height='100vh' width='100vw'>
        <Flex
          bg='#458244'
          px={5}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <Flex flexDirection='row' justifyContent='center' alignItems='center'>
            <Image
              src='https://images.vexels.com/media/users/3/140048/isolated/preview/ab0928c008bbddc7744afcc15da96de2-desk-globe-by-vexels.png'
              size={50}
            />
            <NavLink to='/'>
              <Text fontSize='2xl' m={0} pl={3} color='white'>
              Terra
              </Text>
            </NavLink>
          </Flex>
          <Box>
            <NavLink to='/country'>
              <Text color='white'>
              Countries
              </Text>
            </NavLink>
          </Box>
        </Flex>
        <Box padding='1rem'>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
