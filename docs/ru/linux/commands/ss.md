# `ss` (Socket Statistics) #

- **Purpose:** Faster alternative to `netstat` for analyzing network connections.
- **Usage:** Quickly view active sockets, ports, and processes.

## Basic Usage ##

All HTTP connections with processes:

```bash
ss -tulnp

```

All HTTP connections with processes on port 80:

```bash
ss -tulnp | grep :80

```

Show active connections

```bash
ss -tp 'state established'

```

## Options ##

- `-t` — TCP connections;
- `-u` — UDP connections;
- `-l` — listening ports;
- `-p` — process names.
