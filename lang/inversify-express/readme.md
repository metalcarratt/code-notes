# Inversify Express

Homepage: https://github.com/inversify/inversify-express-utils

# Basic setup
Minimum `app.ts`:

```
import "reflect-metadata";
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

let container = new Container();
let server = new InversifyExpressServer(container);

let app = server.build();
app.listen(3000);
```

*note*: the `import "reflect-metadata"` must be at the top or bad things will happen. ;)

## Add a controller
Minimum controller:

```
import { interfaces, controller, requestParam, requestBody, httpPost, httpGet } from "inversify-express-utils";

@controller("/path")
export class MyController implements interfaces.Controller {

    @httpGet("/")
    private root() : string {
        return "Hello World";
    }
}
```

And add it to `app.ts`:
```
import "./MyController';
```
