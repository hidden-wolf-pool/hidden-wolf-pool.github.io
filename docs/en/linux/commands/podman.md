# `podman` #

- **Purpose:** Podman is a daemonless container engine for developing, managing, and running OCI (Open Container Initiative) containers and container images. It provides a Docker-compatible command-line interface without requiring a background daemon, making it more secure and lightweight. Podman can run containers in rootless mode, supports pods, and integrates well with systemd and other Linux service managers.
- **Usage:** `podman [GLOBAL OPTIONS] COMMAND [COMMAND OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

Run a container:

```bash
podman run hello-world

```

Run a container in detached mode:

```bash
podman run -d nginx

```

List running containers:

```bash
podman ps

```

List all containers (running and stopped):

```bash
podman ps -a

```

Pull an image:

```bash
podman pull alpine

```

Remove a container:

```bash
podman rm container_name

```

Execute a command in a running container:

```bash
podman exec -it container_name /bin/sh

```

Build an image from a Dockerfile:

```bash
podman build -t myimage .

```

## Options ##

- `--help` — Show help for podman or a specific command
- `-d` — Run container in detached mode (background)
- `-it` — Run container interactively with a pseudo-TTY
- `-p` — Publish container port(s) to the host
- `-v` — Bind mount a volume
- `-e` — Set environment variables
- `--name` — Assign a name to the container
- `--rm` — Automatically remove the container when it exits
- `--user` — Sets the UID that will run the command in the container

## Shortcuts ##

Common Podman operations:

```bash
# View all containers (running and stopped) #
podman ps -a

# Remove all stopped containers #
podman container prune

# Remove unused images #
podman image prune

# Stop all running containers #
podman kill -a

# Remove all containers and images #
podman system prune -a

# Login to container registry #
podman login registry.access.redhat.com

# Tag an image #
podman tag source_image:tag target_image:tag

# Export container filesystem as tar #
podman export container_name > exported.tar

# Import tarball as image #
podman import image.tar new_image_name

# View container logs #
podman logs container_name

# Follow container logs #
podman logs -f container_name

# Show running processes in container #
podman top container_name

```

## FAQ ##

### How Is Podman Different From Docker? ###

- Podman runs without a daemon, increasing security
- Podman supports rootless containers by default
- Docker requires a daemon running as root (on older versions)
- Podman has better integration with systemd
- Most commands are compatible between Docker and Podman

### Can I Use Podman As a Drop-in Replacement for Docker? ###

Yes! Podman is designed to be largely compatible with Docker commands. You can often just replace `docker` with `podman` in most commands.

### How Do I Run Rootless Containers? ###

Podman runs rootless by default. You can run containers as your regular user:

```bash
podman run hello-world
podman run -d --name mynginx -p 8080:80 nginx

```

### How Do I Manage Pods With Podman? ###

Podman can manage pods (groups of containers):

```bash
# Create a pod #
podman pod create --name mypod -p 8080:80

# Run container in the pod #
podman run -dt --pod mypod nginx

# List pods #
podman pod list

# Stop entire pod #
podman pod stop mypod

```

### What Is the Difference Between Podman Run and Podman Create? ###

- `podman run` - Creates and starts a container in one command
- `podman create` - Creates a container but doesn't start it (use `podman start` to start it)
