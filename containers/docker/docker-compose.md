# Docker compose

Base `docker-compose.yml`:
```
version: "3.9"
services:
  api:
    build: .
```
Above creates a docker container called 'api'.

### Ports:
```
services:
  api:
    ports:
      - "8080:8080"
```

### Bind mounts:
```
services:
  api:
    volumes:
      - source:target
```

### Environment variables
Use `${ENV}` in file. For example:
```
services:
  api:
    volumes:
      - ${SOURCE}:/folder
```

Then in `.env` specifiy what `SOURCES` is:
```
SOURCES=/opt/folder
```

## Commands
To run:
```
docker-compose up
```

To restart:
```
docker-compose restart
```

To build:
```
docker-compose build
```

To build without caching:
```
docker-compose build --no-cache
```

## Build / run single service
Build:
```
docker-compose build app
```

Run:
```
docker-compose up app
```
