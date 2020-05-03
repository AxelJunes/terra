import { graphql, QueryRenderer } from 'react-relay'
import { Flex, PseudoBox, Text } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import environment from '../../environment'

const query = graphql`
  query countryQuery($code: ID!) {
    country(code: $code) {
      name
    }
  }
`

const Country = ({ match: { params: { code } } }) => {
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')

  if (code) {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{ code: code.toUpperCase() }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }

          const { country } = props

          return <Text>{country.name}</Text>
        }}
      />
    )
  }

  return (
    <Flex>
      <PseudoBox
        as='input'
        placeholder='Country code'
        flex='1'
        py={2}
        px={4}
        rounded='md'
        bg='gray.100'
        borderWidth='1px'
        _focus={{
          outline: 'none',
          bg: 'white',
          boxShadow: 'outline',
          borderColor: 'gray.300'
        }}
        onChange={({ target }) => {
          const { value } = target
          setSearchValue(value)
        }}
      />
      <PseudoBox
        as='button'
        bg='teal.500'
        py={2}
        px={4}
        ml={3}
        rounded='md'
        fontWeight='semibold'
        color='white'
        _hover={{ bg: 'teal.600' }}
        _focus={{ boxShadow: 'outline' }}
        onClick={() => history.push(`/country/${searchValue}`)}
      >
        Search
      </PseudoBox>
    </Flex>
  )
}

export default Country
