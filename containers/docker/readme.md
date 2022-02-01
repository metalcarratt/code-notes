# Docker

## Docker file
Name: `Dockerfile`

Format:
```
FROM <imagename>
WORKDIR ./
COPY <a> <b>
CMD <command>
```

## Docker commands
To build:
```Bash
docker build -t <imagename> .
```

To run:
```Bash
docker run <imagename>
```

## Start container with bind mount
```Bash
docker run --mount type=bind,source=<source>,target=<target> <imagename>
```

## Port forwarding
```Bash
docker run -p 8080:80 <imagename>
```
