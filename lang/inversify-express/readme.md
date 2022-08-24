# Inversify Express

Homepage: https://github.com/inversify/inversify-express-utils

## Basic setup
Minimum `app.ts`:

```typescript
import "reflect-metadata";
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

let container = new Container();
let server = new InversifyExpressServer(container);

let app = server.build();
app.listen(3000);
```

**note**: the `import "reflect-metadata"` must be at the top or bad things will happen. ;)

### Add a controller
Minimum controller:

```typescript
import { interfaces, controller, httpGet } from "inversify-express-utils";

@controller("/my-controller")
export class MyController implements interfaces.Controller {

    @httpGet("/")
    private root() : string {
        return "Hello World";
    }
}
```

And add it to `app.ts`:
```typescript
import "./MyController';
```

## Inject a service
In the controller:
```typescript
import { MyService } from './my-service';

@controller("/my-controller")
export class MyController implements interfaces.Controller {

    constructor(
        @inject("MyService") private myService : MyService
    ) {}

    @httpGet("/")
    private root() : string {
        myService.call();
        return "Hello World";
    }
}
```

In `app.ts`:
```typescript
import { MyService } from './my-service';

let container = new Container();
container.bind<MyService>('MyService').to(MyService);
```

In the service:
```typescript
import { injectable } from "inversify";

@injectable()
class MyService {
    public call() {
        console.log("Called");
    }
}
```

## Request params
In controller:
```typescript
import { requestParam } from "inversify-express-utils";

@httpGet("/echo")
private echo(@requestParam("msg") msg : string) {
    return msg;
}
```

## Post with body
In `app.ts`:
```typescript
import * as bodyParser from 'body-parser';

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
})
```

In controller:
```typescript
import { httpPost, requestBody } from "inversify-express-utils";

interface DataType {
    data: string
}

@httpPost("/data")
private data(@requestBody() message : DataType) {
    console.log(message.data);
}
```
