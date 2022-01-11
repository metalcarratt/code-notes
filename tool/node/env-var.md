# Environment variables
Pass in variables:
```Bash
MY_VAR=abc node app.js
```

Use:
```JavaScript
process.env.MY_VAR; // abc
```

## .env file
Create .env:
```
# .env file
MY_VAR="abc"
```

Use:
```JavaScript
require('dotenv').config();

process.env.MY_VAR; // abc
```

Ref: https://nodejs.dev/learn/how-to-read-environment-variables-from-nodejs
