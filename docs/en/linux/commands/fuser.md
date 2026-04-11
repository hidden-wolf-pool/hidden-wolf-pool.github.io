# `fuser` #

- **Purpose:** The `fuser` command identifies and reports which processes are using specified files, sockets, or filesystems. It's particularly useful for determining which process is using a file that needs to be deleted, unmounted, or for troubleshooting issues where a resource is locked by an active process.
- **Usage:** `fuser [OPTIONS] NAME`

## Basic Usage ##

Find processes using a specific file:

```bash
fuser /path/to/file.txt

```

Find processes using a specific directory:

```bash
fuser -v /var/log/

```

Kill processes using a specific file:

```bash
sudo fuser -k /path/to/file.txt

```

Find processes using a network socket:

```bash
fuser -v 80/tcp

```

Find processes using a filesystem:

```bash
fuser -v /home

```

Find processes using multiple files:

```bash
fuser -v /var/log/syslog /var/log/messages

```

## Options ##

- `-k` — Kill processes accessing the file
- `-i` — Ask for confirmation before killing processes
- `-v` — Verbose output, shows PID and access mode
- `-n` — Search for processes using the specified namespace
- `-s` — Silent operation (no output)
- `-u` — Show user IDs of processes
- `-m` — Find processes using the specified mountpoint
- `-c` — Same as -m, for compatibility

## Shortcuts ##

Common fuser operations:

```bash
# Find which process is using a port #
fuser -v 3000/tcp

# Kill all processes using a file #
sudo fuser -k /path/to/file

# Find processes using a mount point #
fuser -v /mnt/usb_drive

# Find processes using network ports with user information #
fuser -vu 80/tcp 443/tcp

# Search for processes by file descriptor #
fuser /dev/sda1

# Find processes using NFS mounts #
fuser -v /nfs/mount/point

```

## FAQ ##

### How Do I Find Which Process Is Using a Specific Port? ###

Use fuser with the port and protocol:

```bash
fuser 80/tcp
fuser 3306/tcp
fuser 53/udp

```

### How Do I Safely Kill Processes Using a Resource? ###

Use the `-i` flag to get confirmation before killing:

```bash
sudo fuser -ki /path/to/file

```

This prompts for confirmation before terminating each process.

### What Does the Access Mode Letter Mean? ###

In verbose output, access modes indicate how processes are using resources:

- `c` - Current directory of the process
- `e` - Executable file of the process
- `f` - Open file used by the process
- `m` - Memory-mapped file or shared library
- `r` - Root directory of the process

### How Do I Find All Processes Using NFS Mounts? ###

Use fuser on the NFS mount point:

```bash
fuser -v /nfs/share

```

### Can Fuser Operate on Multiple Resources Simultaneously? ###

Yes, you can specify multiple files, directories, or ports:

```bash
fuser -v /var/log /tmp 80/tcp 443/tcp

```

This shows processes using any of the specified resources.
