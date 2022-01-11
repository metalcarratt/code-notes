# Export and import

## Assign to module.exports
Export
```JavaScript
module.exports = { a: 'b' };
```

Import
```JavaScript
const library = require('library');
```

## Add property to exports
Export
```JavaScript
exports.value = true;
```

Import
```JavaScript
const library = require('library');
library.value; // true
```

Or:
```JavaScript
const { value } = require('library');
value; // true
```
