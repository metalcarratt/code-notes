# The package.json file

## Properties

Lists lots of metadata. Some data is used by `www.npmjs.com`, for example:
- `name`
- `author`
- `contributors`
- `bugs`
- `homepage`
- `version`
- `license`
- `keywords`
- `description`
- `repository`
- `private`

`scripts` can be run using `npm run <script>`.

`dependencies` and `devDependencies` are using when running `npm install` or `npm update`.

Other:
- `main`
- `engines`
- `browerslist`

## Dependency versions
- `^1.0.0` will update minor and patch but not major
- `~1.0.0` will update patch but not major or minor
- `>`, `<`, `>=`, `<=` will update up to or above
- `-` specifies a range
- `||` or
- `latest` update to latest

