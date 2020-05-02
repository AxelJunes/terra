import { graphql, QueryRenderer } from 'react-relay'
import React from 'react'
import environment from '../../environment'

const query = graphql`
  query countryQuery($code: ID!) {
    country(code: $code) {
      name
    }
  }
`

const Country = ({ match: { params: { code } } }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{ code }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }

        const { country } = props

        return <div>{country.name}</div>
      }}
    />
  )
}

export default Country