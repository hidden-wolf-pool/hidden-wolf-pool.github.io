# `iperf3` — Performance Testing Tool #

- **Purpose:** `iperf3` is a modern tool for active measurements of the maximum achievable bandwidth on IP networks. It supports both TCP and UDP protocols, provides detailed throughput statistics.
- **Usage:** `iperf3` operates in a client-server model.
    - **Server** (`-s` flag): listens for incoming test connections.
    - **Client** (`-c` flag): initiates tests against the server.

## Basic Usage ##

### Example 1: Simple Throughput Test ###

**On the server** (listens on default port 5201):

```bash
iperf3 -s

```

**On the client** (connects to server at `<server_ip>`):

```bash
iperf3 -c <server_ip>

```

### Example 2: UDP Test with 100 Mbit/s Target ###

```bash
iperf3 -c <server_ip> -u -b 100M

```

## Options ##

- `-s` — Run as server.
- `-c <host>` — Run as client, connect to `<host>`.
- `-p <port>` — Use specific port (default: `5201`).
- `-t <seconds>` — Test duration (default: `10`).
- `-i <seconds>` — Report interval (seconds between results).
- `-P <n>` — Number of parallel streams.
- `-w <size>` — Set socket buffer size.
- `-R` — Reverse mode (server sends, client receives).
- `-J` — Output JSON format (useful for scripting).
- `--logfile <file>` — Save output to file.
- `-V` — Verbose output.

## Shortcuts ##

- **Start server**: `iperf3 -s`
- **Basic client test**: `iperf3 -c <server_ip>`
- **UDP test**: `iperf3 -c <server_ip> -u -b 1G`
- **Reverse test** (server→client): `iperf3 -c <server_ip> -R`
- **JSON output**: `iperf3 -c <server_ip> -J`
- **Custom port**: `iperf3 -c <server_ip> -p 5300`

## FAQ ##

### How Do I Test Bidirectional Throughput? ###

Use `-R` (reverse mode) or run tests in both directions separately. `iperf3` does not support true bidirectional testing in one command

### Why is My UDP Test Showing Packet Loss? ###

UDP is unreliable by design. Loss indicates network congestion or insufficient buffer sizes. Adjust `-b` (bandwidth) or `-w` (window size).

### Can I Test IPv6? ###

Use IPv6 addresses (for example, `iperf3 -c <server_ipv6>`) or force IPv6 with `-6`

### How to Save Results to a File? ###

Use `--logfile <filename>` or redirect output: `iperf3 -c <server_ip> > results.txt`.

### What's the Difference Between `iperf2` and `iperf3`? ###

- Simpler codebase.
- JSON output support,
- Better UDP handling.
- No backward compatibility with `iperf2` (different protocol).

### How to Troubleshoot "connection refused" Errors? ###

Check:

1. Server is running (`iperf3 -s`).
2. Firewall allows traffic on port 5201 (or custom port).
3. Client uses correct server IP/port.
