# Apollo Client Authorization (Vue)
```ts
const authLink = new ApolloLink((operation, forward) => {  // create new auth link
    const sessionId = getSessionId();  // get session id
    operation.setContext({
        headers: {
            Authorization: sessionId ? `Bearer ${sessionId}` : '' // set session id on header
        }
    });
    return forward(operation);
});

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const apolloClient = new ApolloClient({
    link: concat(authLink, httpLink),  // concat auth link with existing http link
    cache: new InMemoryCache()
});
```
