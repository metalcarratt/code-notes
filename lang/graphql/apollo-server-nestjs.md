# Apollo server on NestJS
Install:
```sh
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

Add module import to `app.module.ts`:
```ts
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver
    })
  ],
  // ...
})
```
