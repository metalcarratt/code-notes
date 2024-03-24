# Vue Apollo Client

## Create client
```ts
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});
```

## Make query
```ts
const query = gql(`
    query TestQuery {
        test
    }
`);

const queryTest = async () => {
    const result = await apolloClient.query({
        query
    });
        
    return result.data.test;
};
