# Docker

See docker compose [here](docker-compose.md)

Extra tooling: [tooling](tooling.md)

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

In detatched mode:
```Bash
docker run -t <imagename>
```

With port forwarding:
```Bash
docker run -p 8080:80 <imagename>
```

With a name:
```Bash
docker run --name <myname> <imagename>
```

## Start container with bind mount
```Bash
docker run --mount type=bind,source=<source>,target=<target> <imagename>
```

Local directory from bash:
```Bash
docker run --mount type=bind,source=$pwd,target=<target> <imagename>
```

Local directory from cmd:
```Bash
docker run --mount type=bind,source=%cd%,target=<target> <imagename>
```

## Run interactive shell
Notice the name is the container name, not the image name:
```Bash
docker exec -it <containerName> /bin/sh
```

## List containers
List running containers:
```
docker ps
```

List all containers:
```
docker ps -a
```

Remove container:
```
docker rm <containerName>
```

## Copy file from container to host

Format:
```
docker cp <containerId>:/file/path/within/container /host/path/target
```

Example:
```
docker cp goofy_roentgen:/out_read.jpg .
```
