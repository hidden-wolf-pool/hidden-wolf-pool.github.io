# `traceroute` #

- **Purpose:** The `traceroute` command is used to display the path that packets take from your computer to a destination host. It shows each network hop (router) along the path and measures the response time at each hop. This is extremely useful for diagnosing network issues, identifying routing problems, and determining where delays occur in the network path between the source and destination.
- **Usage:** `traceroute [OPTIONS] HOST [PACKETLEN]`

## Basic Usage ##

Trace route to a host:

```bash
traceroute google.com

```text

Trace route with specific number of queries per hop:

```bash
traceroute -q 1 google.com

```text

Trace route with a specific port number:

```bash
traceroute -p 80 google.com

```text

Trace route with ICMP packets instead of UDP:

```bash
traceroute -I google.com

```text

Set maximum number of hops:

```bash
traceroute -m 20 google.com

```text

Set timeout for each probe:

```bash
traceroute -w 3 google.com

```text

Trace route with specific source interface:

```bash
traceroute -i eth0 google.com

```text

## Options ##

- `-m` — Set max TTL (maximum number of hops/trials)
- `-n` — Do not resolve hostnames
- `-p` — Base UDP port number used for probing (default 33434)
- `-q` — Number of probes per hop (default 3)
- `-w` — Time to wait for a response (default 3 seconds)
- `-I` — Use ICMP instead of UDP datagrams
- `-T` — Use TCP SYN for tracerouting (default port is 80)
- `-U` — Use UDP to particular port for tracerouting
- `-i` — Specify network interface to use
- `-f` — Start from the initial TTL (default is 1)

## Shortcuts ##

Common traceroute operations:

```bash
# Quick trace with minimal output #
traceroute -n google.com

# Trace with TCP SYN packets (bypasses some firewalls) #
sudo traceroute -T google.com

# Trace with ICMP packets #
traceroute -I google.com

# Reduce probe frequency to be less intrusive #
traceroute -q 1 google.com

# Set specific timeout for faster response #
traceroute -w 2 google.com

# Trace with specific source address #
traceroute -s source.ip.address google.com

# Continuous trace to detect intermittent issues #
traceroute -q 1 -w 2 google.com

# Trace with increased TTL for longer routes #
traceroute -m 30 google.com

# Show IP addresses only, no hostnames #
traceroute -n google.com

# Use specific port for TCP traceroute #
traceroute -T -p 443 google.com

# Trace with minimal privilege (UDP is default) #
traceroute google.com

# Specify packet size #
traceroute google.com 100  # 100 byte packets

```text

## FAQ ##

### What's the Difference Between Traceroute and Ping? ###

- `ping` - Tests connectivity to a single host and measures round-trip time
- `traceroute` - Shows the complete path through intermediate routers/hops and measures time at each hop

### How Do I Interpret Traceroute Results? ###

Traceroute output shows:

- Hop number (sequence)
- Router/host name and IP
- Round-trip time for each of 3 probes
- Asterisks (*) indicate timeouts/no response

### Why Do Some Hops Show Asterisks (*)? ###

Asterisks indicate:

- Router is not responding to traceroute packets
- Firewall blocking ICMP/UDP packets
- Router configured not to send responses
- Network congestion causing packet loss

### How Do I Trace Route With IPv6? ###

Use the IPv6 version of the command:

```bash
traceroute6 ipv6.google.com
# OR #
tracepath -6 google.com

```text

### What Does It Mean When Traceroute Stops Responding? ###

If traceroute stops showing responses after a certain hop:

- Possible network outage at that hop
- Firewall blocking responses
- The destination host rejecting connection attempts
- Routing issue in the path to the destination
