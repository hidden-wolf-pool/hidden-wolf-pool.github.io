# `runc` #

- **Purpose:** Runc is a lightweight, portable container runtime that implements the Open Container Initiative (OCI) specification. It runs containers on Linux using kernel features like namespaces, cgroups, and seccomp. Runc is the underlying technology behind higher-level tools like Docker, Podman, and containerd. It's a command-line client for running applications packaged according to the OCI format and is a compliant implementation of the OCI specification. Runc provides the core functionality for container management including creation, execution, and lifecycle management of containers without additional orchestration layers.
- **Usage:** `runc [GLOBAL OPTIONS] COMMAND [OPTIONS] [ARGUMENTS...]`

## Basic Usage ##

List all running containers:

```bash
sudo runc list

```

Run a container from a bundle directory:

```bash
sudo runc run container_id

```

Create a container (without starting it):

```bash
sudo runc create container_id

```

Start a created container:

```bash
sudo runc start container_id

```

Execute a command in a running container:

```bash
sudo runc exec container_id command

```

Stop a running container:

```bash
sudo runc kill container_id

```

Delete a container:

```bash
sudo runc delete container_id

```

Pause a container:

```bash
sudo runc pause container_id

```

Resume a paused container:

```bash
sudo runc resume container_id

```

Update container resource limits:

```bash
sudo runc update --memory 512m container_id

```

## Options ##

- `--debug` — Enable debug output for logging
- `--log` — Set the log file path to log output to
- `--log-format` — Set the format used by logs ("json", "text")
- `--root` — Root directory for storage of container state (this should be located in tmpfs)
- `--criu` — Path to the criu binary used for checkpointing
- `--systemd-cgroup` — Enable systemd cgroup support (requires root)
- `--rootless` — Enable rootless mode for running containers without root privileges

## Shortcuts ##

Common runc operations:

```bash
# Create and run a container manually using OCI bundle #
mkdir -p /mycontainer/{rootfs,config.json}
cd /mycontainer
runc spec  # Generate default config.json
# Modify config.json as needed #
runc run mycontainer

# Check container status #
sudo runc state container_name

# List formatted container information #
sudo runc list --format table

# Create container with specific bundle directory #
sudo runc create --bundle /path/to/bundle container_id

# Run container in detached mode #
sudo runc run -d container_id

# Execute command in container and return exit code #
sudo runc exec container_id ls -la

# Kill container with specific signal #
sudo runc kill -s KILL container_id

# Delete container and free resources #
sudo runc delete container_id

# Force delete container #
sudo runc delete --force container_id

# Create container with specific config #
sudo runc create --config /path/to/config.json container_id

# Update container resources #
sudo runc update --memory 1g --cpu-quota 100000 container_id

# Checkpoint a container (if CRIU is available) #
sudo runc checkpoint --image-path /path/to/checkpoint container_id

# Restore a container from checkpoint #
sudo runc restore --image-path /path/to/checkpoint restored_container_id

# Show container process information #
sudo runc ps container_id

# Run container with specific console socket #
runc run --console-socket /path/to/socket container_id

# Run container preserving file descriptors #
runc run --preserve-fds 3 container_id

# Create container with systemd cgroup integration #
sudo runc create --systemd-cgroup container_id

# Run container with specific PID file #
sudo runc run --pid-file /tmp/container.pid container_id

# Create container root directory #
sudo mkdir -p /run/runc

# Set up container with custom root directory #
sudo runc --root /custom/state/dir list

# Check runtime version #
runc --version

# Get help for specific command #
runc run --help

# Create container with custom UID/GID mappings #
runc create --uid-map 1000:0:1 --gid-map 1000:0:1 container_id

# Monitor container resource usage #
runc run --detach container_id && watch "runc state container_id"

# Execute interactive command in container #
sudo runc exec -t -i container_id /bin/sh

# Run container from stdin configuration #
cat config.json | runc create --config /dev/stdin container_id

# Update container with JSON configuration #
echo '{"memory": {"limit": 536870912}}' | runc update --resources /dev/stdin container_id

# Get container metrics #
sudo runc events --stats container_id

# Show container information in JSON format #
sudo runc list --format json

# Create container with specific runtime root #
sudo runc --root /var/run/runc create container_id

# Run container and wait for exit #
sudo runc run --detach container_id && sudo runc wait container_id

# Kill with specific timeout #
sudo runc kill --all --timeout 30 container_id

# Create container with custom namespace paths #
sudo runc create --pid-file /tmp/pidfile --process-label label container_id

# Run container with specific hooks #
sudo runc run --hooks /path/to/hooks.json container_id

# Create container with custom cgroup path #
sudo runc create --cgroup /custom/path container_id

# Execute command and capture output #
sudo runc exec container_id env | grep PATH

# Check container root filesystem #
sudo runc state container_id | jq '.rootfs'

# List containers with filters #
sudo runc list | grep running

# Create container with privileged access #
sudo runc create --no-new-privileges=false container_id

# Run container with specific user namespace #
sudo runc run --userns-path /proc/self/ns/user container_id

# Set up container with custom seccomp profile #
sudo runc create --seccomp-profile /path/to/seccomp.json container_id

# Create container with specific apparmor profile #
sudo runc create --apparmor-profile profile_name container_id

# Create container with specific selinux label #
sudo runc create --selinux-label system_u:system_r:container_t:s0 container_id

# Start container with specific capabilities #
sudo runc create --capability CAP_NET_ADMIN container_id

# Run container with specific rlimits #
sudo runc run --rlimit-as unlimited container_id

# Create container with specific hooks configuration file #
sudo runc create --hooks-file /path/to/hooks.json container_id

# Check container's memory usage #
sudo runc state container_id | jq '.annotations."org.opencontainers.runtime-spec.annotations.memory-limit"'

# Create container with specific devices #
sudo runc create --device /dev/null:/dev/null:rw container_id

# Run container with bind mounts #
sudo runc run --mount /host/path:/container/path container_id

# Create container with custom network settings #
runc spec && sed -i 's/"network"/"none"/' config.json && runc run container_id

# Set up container with custom security options #
sudo runc create --no-new-privileges --readonly-rootfs container_id

# List containers with specific output format #
sudo runc list --format table | column -t

# Check container health using exec #
sudo runc exec container_id ps aux | grep -c application

# Update container with resource constraints #
sudo runc update --cpu-period 100000 --cpu-quota 50000 container_id

# Create container with specific namespaces #
sudo runc create --namespace-cgroup --namespace-ipc container_id

# Run systemd inside container #
sudo runc run --systemd-cgroup container_id

# Set up container checkpoint for migration #
sudo runc checkpoint --image-path /migration/path --work-path /work/path container_id

# Create container with memory swap enabled #
sudo runc create --memory 512m --memory-swap 1g container_id

# Execute privileged operations in container #
sudo runc exec --privileged container_id mount /dev/sdb1 /mnt

# Run container with specific umask #
sudo runc run --umask 0022 container_id

# Create container with custom hostname #
sudo runc create --hostname mycontainer container_id

# Create container with specific user #
sudo runc create --user 1000:1000 container_id

# Execute command with specific environment #
sudo runc exec --env "VAR=value" container_id command

# Create container with specific working directory #
sudo runc create --cwd /app container_id

# Create container with specific arguments #
sudo runc create --args "command" --args "arg1" container_id

# Run container with specific terminal size #
sudo runc run --console-socket /socket --detach container_id

# Check all container events #
sudo runc events --interval 1s container_id

# Create container with specific annotations #
sudo runc create --annotation key=value container_id

# Get detailed container information #
sudo runc state container_id | jq '.'

# Create temporary container for testing #
runc spec temp_container && runc run --detach temp_container && sleep 30 && runc kill temp_container && runc delete temp_container

# Run container with resource limits from file #
echo '{"memory": {"limit": 1073741824}, "cpu": {"shares": 1024}}' > limits.json
sudo runc update --resources limits.json container_id

# Create container with multiple cgroup controllers #
sudo runc create --cgroup-manager cgroupfs container_id

# Execute command in container with timeout #
timeout 60 sudo runc exec container_id long_running_command

# Set up container for monitoring #
sudo runc events --stats --interval 5s container_id

# Create container with custom mount options #
sudo runc create --mount-type bind --mount-src /host --mount-dst /container container_id

```

## FAQ ##

### What Is The Relationship Between Runc And Docker? ###

- `runc` - Low-level container runtime that implements OCI specifications
- `Docker` - Higher-level tool that uses runc and other components for container management

Docker Engine uses runc as its default container runtime to actually execute containers based on the OCI specification.

### How Do I Create An OCI Bundle For Runc? ###

First generate a configuration:

```bash
mkdir -p mycontainer/rootfs
cd mycontainer
runc spec  # Creates default config.json

```

Then customize the `config.json` file and populate the rootfs directory with a root filesystem.

### Can Runc Run As A Non-Root User? ###

Runc typically requires root privileges, but with proper configuration it can run in rootless mode using user namespaces. This requires the `--rootless` option and appropriate system configuration. Rootless containers provide better security but have some limitations.

### What Is The Difference Between Runc And Crun? ###

- `runc` - Written in Go, developed by Docker/LXC communities
- `crun` - Written in C, developed by Red Hat/containers community

Both implement the OCI specification, but `crun` is lighter and faster due to its C implementation.

### How Do I Debug Runc Issues? ###

Use the debug option:

```bash
sudo runc --debug run container_id

```

Also check system logs:

```bash
journalctl -u runc
sudo dmesg | grep -i cgroup

```

### What Are The Required Components For A Runc Container? ###

An OCI container bundle for runc requires:

1. `config.json` - OCI container configuration
2. `rootfs/` directory - Root filesystem for the container
3. Optionally, `hooks.json` - Hook configuration

The `runc spec` command creates a skeleton bundle with default configuration.
