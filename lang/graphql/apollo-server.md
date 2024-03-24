# Apollo Server

## Create typedefs (schema):
```ts
const schema = `#graphql
type Query {
    test: String
}
type Mutation {
    updateTest(test: String!): String
}
`;
```

### Create resolvers:
```ts
let testValue = 'test';

const resolvers = {
    Query: {
        test: () => testValue
    },
    Mutation: {
        updateTest: (_, {test} : {test: string}) => {
            testValue = test;
            return testValue;
        }
    }
}
```

### Create server:
```ts
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});
```

and then serve:
```ts
import { startStandaloneServer } from '@apollo/server/standalone';

startStandaloneServer(server, {
    listen: { port: 4000 }
});
```
