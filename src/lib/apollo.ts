import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL,
    }),
    cache: new InMemoryCache(),
  })
}
