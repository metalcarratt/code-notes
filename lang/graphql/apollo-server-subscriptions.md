# Apollo server with subscriptions

Install:
```
npm install express cors http @apollo/server @graphql-tools ws graphql-ws graphql-subscriptions
```

## Server needs to support web socket *and* http server
```ts
import express from 'express';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

const init = async () => {
    const app = express();
    const httpServer = http.createServer(app);

    const schema = makeExecutableSchema({ typeDefs, resolvers });
    

    const wsServer = new WebSocketServer({
        server: httpServer,
        path: '/subscriptions'
    });
    const serverCleanup = useServer({ schema }, wsServer);

    const server = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            await serverCleanup.dispose();
                        }
                    }
                }
            }
        ]
    });
    await server.start();

    app.use(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server)
    );

    httpServer.listen({ port: 4000 });

    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
}
init();
```

## Schema
```
type Subscription {
    test: String
}
```

## Resolvers
Create a pubSub:

```ts
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
```

Update it on mutation:
```ts
Mutation: {
  changeTest: (/* ... */) => {
    // ...
    pubSub.publish(PUBSUB_CHECKLISTS_MODIFIED, test);
    // ...
  }
}
```

Return it on subscribe:
```ts
Subscription: {
  test: {
    subscribe: () => {
      return pubSub.asyncIterator([PUBSUB_CHECKLISTS_MODIFIED]);
    },
    resolve: payload => payload
  }
}
```
(the `resolve` code above is essential)
