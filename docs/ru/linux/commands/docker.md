# `docker` #

- **Purpose:** Docker is a platform for developing, shipping, and running applications in containers. Containers allow developers to package applications with all their dependencies into standardized units for development, testing, and production deployment. Docker simplifies application deployment and ensures consistency across different environments.
- **Usage:** `docker [OPTIONS] COMMAND [ARG...]`

## Basic Usage ##

Run a container:

```bash
docker run <image>

```

Run a container with a name and port mapping:

```bash
docker run --name mycontainer -p 8080:80 myimage

```

List running containers:

```bash
docker ps

```

List all containers (running and stopped):

```bash
docker ps -a

```

Start a stopped container:

```bash
docker start <container>

```

Stop a running container:

```bash
docker stop <container>

```

Remove a container:

```bash
docker rm <container>

```

Pull an image from a registry:

```bash
docker pull <image>

```

List downloaded images:

```bash
docker images

```

Execute a command inside a running container:

```bash
docker exec -it <container> /bin/bash

```

Build an image from a Dockerfile:

```bash
docker build -t <image-name> .

```

## Options ##

- `--help` — Display help information for a command
- `-d` — Run container in detached mode (background)
- `-it` — Run container interactively (with a pseudo-TTY)
- `-p` — Map ports between host and container
- `-v` — Mount volumes between host and container
- `-e` — Set environment variables
- `--name` — Assign a name to the container
- `--rm` — Automatically remove the container when it exits
- `-m` — Set memory limit for the container
- `--cpu` — Limit CPU usage for the container

## Shortcuts ##

Common Docker commands combination:

```bash
# Remove all stopped containers #
docker container prune

# Remove unused images #
docker image prune

# Stop all running containers #
docker stop $(docker ps -aq)

# Remove all containers (stops running ones first) #
docker rm $(docker ps -aq)

# Clean up everything (containers, networks, images, build cache) #
docker system prune -a

```

## FAQ ##

### How Do I Run a Container in the Background? ###

Use the `-d` flag to run a container in detached mode:

```bash
docker run -d --name myapp nginx

```

### How Do I Access a Running Container's Shell? ###

Use the `exec` command with interactive flags:

```bash
docker exec -it <container-name> /bin/bash

```

### How Do I See Logs from a Container? ###

Use the `logs` command:

```bash
docker logs <container-name>
docker logs -f <container-name>  # Follow the logs in real-time

```

### How Do I Remove Docker Images? ###

To remove a specific image:

```bash
docker rmi <image-id>

```

To remove unused images:

```bash
docker image prune

```

### How Do I Change the Docker Container Image Storage Path? ###

To change Docker's root directory (storage path), edit the daemon configuration file `/etc/docker/daemon.json` and add:

```json
{
  "data-root": "/new/path/docker"
}

```

Then restart the Docker service.
