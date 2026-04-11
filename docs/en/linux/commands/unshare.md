# `unshare` #

- **Purpose:** The `unshare` command in Linux allows a process to disassociate parts of its execution context that are currently being shared with other processes. It enables the creation of new namespaces (for example, mount, PID, network, user, IPC) for the calling process, effectively isolating it from the rest of the system in specific ways. This is foundational for containerization technologies like Docker and LXC.
- **Usage:** `unshare [options] [command [arguments]]`. Without a command, `unshare` starts a new shell in the isolated context.

## Basic Usage ##

Start a shell with a new mount namespace:

```bash
sudo unshare --mount /bin/bash

```

It isolates filesystem mount points from the host system.

Create a new PID namespace.

```bash
sudo unshare --pid --fork /bin/bash

```

It ensures the process has its own PID space. This is useful for process isolation.

User + PID + mount isolation:

```bash
sudo unshare -U -p -m --fork --map-root-user /bin/bash

```

Network isolation only:

```bash
sudo unshare --net /bin/bash

```

## Options ##

- `--mount` / `-m` — Create a new mount namespace.
- `--uts` — Create a new UTS namespace. It isolates hostname and NIS domain name.
- `--ipc` — Create a new IPC namespace (System V IPC, POSIX message queues).
- `--net` / `-n` — Create a new network namespace. It isolates network stack.
- `--pid` / `-p` — Create a new PID namespace.
- `--user` / `-U` — Create a new user namespace. It enables user ID/group ID isolation.
- `--fork` / `-f` — Fork the specified command into a new process. Required for `--pid` to work as expected.
- `--map-root-user` — Map the current user to root (UID 0) in the new user namespace.
- `--propagation <type>` — Set mount propagation type (for example, `private`, `shared`).

## FAQ ##

### What is the Difference Between `unshare` and `nsenter`? ###

`unshare` creates _new_ namespaces for a process, whereas `nsenter` lets you _enter_ existing namespaces of another process. `unshare` is about isolation; `nsenter` is about inspection or sharing.

### Why Do I Need `sudo` with `unshare`? ###

Many namespace types (especially user, PID, network) require privilege elevation to create. `sudo` grants the necessary permissions to manipulate kernel namespaces.

### Can I Unshare Only Part of the Execution Context? ###

Yes. You can select which namespaces to unshare using the corresponding options (for example, `--mount`, `--net`). You don't have to isolate all aspects at once.

### How Do I Verify That a Namespace Was Created? ###

Check the `/proc/<pid>/ns/` directory. Each file there (for example, `mnt`, `net`, `pid`) represents a namespace. Different inodes indicate separate namespaces. For example:

```bash
ls -l /proc/$$/ns

```

### Does `unshare` Persist After the Process Exits? ###

No. Namespaces exist only as long as there is at least one process inside them. When the last process in a namespace terminates, the namespace is destroyed.

### Can I Share a Namespace with Other Processes After Using `unshare`? ###

Not directly. `unshare` isolates the calling process. To share a namespace, you'd typically use `clone(2)` with specific flags or tools like `nsenter` to attach other processes to an existing namespace.
