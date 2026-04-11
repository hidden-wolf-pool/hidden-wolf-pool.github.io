# `netstat` #

- **Purpose:** Network utility used to display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships. It provides detailed information about network activity.
- **Usage:** Monitor network connections, diagnose network issues, and troubleshoot network-related problems.

## Basic Usage ##

Display a summary of all active connections:

```bash
netstat

```

Display all listening TCP and UDP ports:

```bash
netstat -tuln

```

Display listening TCP and UDP ports with process names:

```bash
netstat -tulpn

```

Show all sockets with numerical addresses:

```bash
netstat -an

```

Quickly check the routing table:

```bash
netstat -r

```

Get summary statistics for all protocols:

```bash
netstat -s

```

Display extended statistics for all sockets:

```bash
netstat -pe

```

## Options ##

- `-a` — Show all sockets (listening and non-listening)
- `-t` — Display TCP connections
- `-u` — Display UDP connections
- `-n` — Show numerical addresses instead of resolving hostnames
- `-l` — Show only listening sockets
- `-p` — Show the PID and name of the program to which each socket belongs
- `-r` — Display the kernel routing table
- `-s` — Display summary statistics
- `-e` — Display extended statistics
- `-c` — Continuously display the output at regular intervals

## FAQ ##

### What Does Netstat Measure? ###

It measures network connections, socket status, routing tables, interface statistics, and protocol-specific information.

### How Do I Find Which Process is Using a Specific Port? ###

Use `netstat -tulpn | grep <port_number>` to find the process ID and name.

### What Does the `ESTABLISHED` State Mean? ###

`ESTABLISHED` indicates an active, open connection between two endpoints.

### How Can I Monitor Network Activity in Real-time? ###

Use `netstat -c` to continuously display the output at regular intervals.

### Why Are There so Many `TIME_WAIT` Connections? ###

`TIME_WAIT` connections are normal and indicate that the connection is in the process of closing. High numbers may indicate heavy network traffic or short-lived connections.

### How Do I Check for Open Ports? ###

Use `netstat -tuln` to display all open TCP and UDP ports.

### What Does the `LISTEN` State Mean? ###

`LISTEN` indicates that a server process is waiting for incoming connections on a specific port.
