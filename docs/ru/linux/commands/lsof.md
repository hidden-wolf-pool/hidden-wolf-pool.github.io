# `lsof` (List Open Files) #

- **Purpose:** The `lsof` command lists information about files opened by processes on Unix-like systems. Since everything in Linux is treated as a file (including network connections, devices, and directories), this command is extremely useful for troubleshooting system issues, identifying which process is using a particular file, monitoring network connections, and managing system resources.
- **Usage:** `lsof [OPTIONS] [FILE...]`

## Basic Usage ##

List all open files:

```bash
lsof

```

List files opened by a specific process:

```bash
lsof -p PID

```

List files opened by a specific user:

```bash
lsof -u username

```

List files in a specific directory:

```bash
lsof +D /path/to/directory

```

List network connections:

```bash
lsof -i

```

List network connections on a specific port:

```bash
lsof -i :port_number

```

List network connections for a specific protocol:

```bash
lsof -i tcp

```

List files on a specific device:

```bash
lsof /dev/device_name

```

List files matching a pattern:

```bash
lsof /path/to/file_pattern

```

Find which process is using a specific file:

```bash
lsof /path/to/file

```

List files opened by processes with a specific name:

```bash
lsof -c process_name

```

Monitor continuously (refresh every 2 seconds):

```bash
lsof -i -r2

```

## Options ##

- `-i` — List Internet address-related files (network connections)
- `-u` — List files opened by a specific user (`-u ^username` excludes user)
- `-p` — List files opened by a specific process ID
- `-c` — List files opened by processes whose name begins with the specified string
- `-P` — Don't convert port numbers to names
- `-n` — Don't convert network numbers to host names
- `-t` — Output only process IDs (useful for piping to kill)
- `-l` — Output user IDs numerically rather than converting to login names
- `-g` — List files opened by processes in a specific process group
- `+D` — Recursively list files in a directory
- `-d` — List files with specific file descriptors (for example, `txt`, `reg`, `dir`)
- `-a` — AND option - combines conditions (all conditions must be met)
- `-s` — Show file sizes
- `-L` — Show link counts
- `-F` — Format output with specific fields
- `-r` — Repeat listing every few seconds
- `-h` — Display help

## Shortcuts ##

Common lsof operations:

```bash
# Find which process is using a specific port #
lsof -i :80

# Kill all processes using a specific file #
kill -9 $(lsof -t /path/to/file)

# Find all network connections #
lsof -i

# Find all TCP connections #
lsof -i tcp

# Find all UDP connections #
lsof -i udp

# Find all IPv4 network connections #
lsof -i 4

# Find all IPv6 network connections #
lsof -i 6

# Find processes listening on ports #
lsof -i -sTCP:LISTEN

# Find all files opened by a user #
lsof -u username

# Find all files opened by a process #
lsof -p PID

# Find all files opened by a process name #
lsof -c firefox

# Find all deleted files still held open #
lsof +L1

# Find all NFS files #
lsof -N

# Find all Unix socket files #
lsof -U

# Find all files on a specific filesystem #
lsof /mount/point

# Show only specific fields (Process ID, Command, File Descriptor, Name) #
lsof -F pcfn

# Find files with specific file descriptor types #
lsof -d txt  # executable files

# Find all files accessed by a user in the last 5 minutes #
lsof -su username -at5m

# Monitor changes to files in a directory #
lsof +D /path/to/directory

# Find all files opened for writing by a user #
lsof -u username -d ^r

# Count number of files opened by each process #
| lsof | awk '{print $1}' | sort | uniq -c | sort -nr |

# Find the top 10 processes with most open files #
| lsof | awk '{print $2}' | sort | uniq -c | sort -nr | head -10 |

# Find all files opened by processes in a specific group #
lsof -g GID

# Show only IPv4 connections #
lsof -i 4

# Show only IPv6 connections #
lsof -i 6

# Find connections to a specific host #
lsof -i @hostname

# Find connections from a specific IP #
lsof -i @IP

# Show network connections with bandwidth info #
lsof -i -n -P

# Find all files opened by processes with a specific name pattern #
lsof -c /^pattern/

# Find all files opened by processes with specific PIDs #
lsof -p PID1,PID2,PID3

# Show only files with specific access mode #
lsof -a -d 0-9 -u username

# Find all files with specific offset #
lsof -o

# Show file offset position #
lsof -o +o

# Find all files with specific device #
lsof /dev/sda1

# Show all files with specific inode #
lsof /path/to/file/i(inode_number)

# Monitor file activity in real-time #
lsof -r1 /path/to/file

# Find all files with specific file type #
lsof -d dir  # directories only

# Show all files with specific protocol #
lsof -i tcp:22

# Find all files opened by processes with specific UID range #
lsof -u 1000-2000

# Show all files with specific file flags #
lsof -f

# Find all files with specific file system type #
lsof -f -- fs_type

# Show only files with specific file descriptor numbers #
lsof -d 0,1,2

# Find all files with specific file descriptor range #
lsof -d 0-10

# Show all files with specific file descriptor excluding certain types #
lsof -d ^txt  # exclude executable files

# Find all files opened by processes with specific command name pattern #
lsof -c "^ssh"

# Show all files opened by processes in specific time range #
lsof -at1h  # files accessed in last hour

# Find all files opened by processes with specific access time #
lsof -at+1h  # files accessed more than 1 hour ago

# Show all files opened by processes with specific modification time #
lsof -am1d  # files modified in last day

# Find all files opened by processes with specific change time #
lsof -ac1d  # files changed in last day

# Show all files with specific file size #
lsof -s

# Find all files with specific link count #
lsof -L +1  # files with link count greater than 1

# Show all files with specific file lock status #
lsof -w

# Find all files with specific file type #
lsof -d reg  # regular files only

# Show all files with specific file access mode #
lsof -a -d 0-9 -u username

# Monitor network connections for specific service #
lsof -i :http  # HTTP connections

# Find all files opened by processes with specific nice value #
lsof -N

# Show all files with specific process priority #
lsof -P

# Find all files opened by processes with specific session ID #
lsof -s SID

# Show all files with specific terminal #
lsof /dev/ttyS0

# Find all files opened by processes with specific controlling terminal #
lsof -t

# Show all files with specific file attributes #
lsof -A

# Find all files opened by processes with specific resource limits #
lsof -R

# Show all files with specific file encryption status #
lsof -E

# Monitor all file system activity #
lsof -D ?

# Show all files with specific file system options #
lsof -O

# Find all files opened by processes with specific scheduling policy #
lsof -S

# Show all files with specific file system quota #
lsof -Q

# Find all files opened by processes with specific security context #
lsof -Z

# Show all files with specific file system capabilities #
lsof -C

# Find all files opened by processes with specific SELinux context #
lsof -z

# Show all files with specific file system encryption #
lsof -X

```

## FAQ ##

### What Does Lsof Stand For? ###

Lsof stands for "LiSt Open Files". It's a command-line utility that lists information about files opened by processes on Unix-like systems.

### Why Is Lsof Useful? ###

Lsof is useful because it helps you:

- Identify which process is using a specific file or directory
- Troubleshoot "device busy" errors when trying to unmount filesystems
- Monitor network connections and services
- Diagnose security issues by seeing what files processes have open
- Debug applications by seeing what files they're accessing
- Manage system resources by identifying processes with many open files

### How Do I Find Which Process Is Using A Specific Port? ###

Use the following command:

```bash
lsof -i :port_number

```

For example, to find what's using port 80:

```bash
lsof -i :80

```

### How Do I Kill A Process That Is Using A Specific File? ###

First, find the process ID:

```bash
lsof /path/to/file

```

Then kill the process:

```bash
kill -9 PID

```

Or, to do it in one command:

```bash
kill -9 $(lsof -t /path/to/file)

```

### How Can I Monitor Network Connections With Lsof? ###

Use the `-i` option to list Internet address-related files:

```bash
lsof -i  # All network connections
lsof -i tcp  # Only TCP connections
lsof -i udp  # Only UDP connections
lsof -i :22  # Connections on port 22
lsof -i@host  # Connections to/from a specific host

```

### How Do I Find All Files Opened By A Specific User? ###

Use the `-u` option followed by the username:

```bash
lsof -u username

```

To exclude a user, prefix with a caret (^):

```bash
lsof -u ^username

```

### What Information Does Lsof Output Contain? ###

The typical lsof output contains:

- `COMMAND` — Name of the command that opened the file
- `PID` — Process ID
- `TYPE` — File type (REG for regular file, DIR for directory, and so on)
- `DEVICE` — Device number
- `SIZE/OFF` — File size or offset
- `NODE` — Inode number
- `NAME` — File name or network information

### How Do I Search For Files In A Directory Tree? ###

Use the `+D` option to recursively search a directory:

```bash
lsof +D /path/to/directory

```

Note that this can be slow on large directory trees.

### How Can I Monitor File Activity Continuously? ###

Use the `-r` option to repeat the listing every few seconds:

```bash
lsof -i -r2  # Refresh every 2 seconds

```

### How Do I Find All Network Connections For A Specific Protocol? ###

Specify the protocol after the `-i` option:

```bash
lsof -i tcp  # TCP connections
lsof -i udp  # UDP connections
lsof -i tcp:22  # TCP connections on port 22

```
