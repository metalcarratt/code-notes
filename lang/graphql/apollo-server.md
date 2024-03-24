# Apollo Server

## Create typedefs (schema):
```
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
```
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
```
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});
```

and then serve:
```
import { startStandaloneServer } from '@apollo/server/standalone';

startStandaloneServer(server, {
    listen: { port: 4000 }
});
```
