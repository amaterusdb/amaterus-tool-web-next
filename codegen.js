const NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL =
  process.env.NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL
const AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET = process.env.AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET

module.exports = {
  schema: [
    {
      [NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_SCHEMA_URL]: {
        headers: {
          'X-Hasura-Admin-Secret': AMATERUS_HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ['./src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
