# `tracert` / `traceroute` #

- **Purpose:** The `tracert` (Windows) or `traceroute` (Linux/Unix) command is used to trace the path that packets take from your computer to a destination host. It shows each network hop (router) along the path and measures the response time at each hop. This helps diagnose network issues, latency problems, and routing inefficiencies.
- **Usage:** `traceroute [OPTIONS] HOST` or `tracert [OPTIONS] HOST`

## Basic Usage ##

Trace route to a host:

```bash
traceroute google.com

```

Trace route using ICMP packets instead of UDP:

```bash
traceroute -I google.com

```

Set maximum number of hops:

```bash
traceroute -m 20 google.com

```

Specify the network interface:

```bash
traceroute -i eth0 google.com

```

Set timeout for each probe:

```bash
traceroute -w 3 google.com

```

## Options ##

- `-m` — Set max TTL (maximum number of hops/trials)
- `-n` — Do not resolve hostnames
- `-w` — Set timeout for each probe
- `-I` — Use ICMP instead of UDP packets
- `-T` — Use TCP SYN for tracerouting (default port is 80)
- `-p` — Set base UDP port number used for probing
- `-q` — Set the number of probes per hop (default 3)
- `-z` — Set the initial time delay between probes

## Shortcuts ##

Common traceroute operations:

```bash
# Quick trace with minimal output #
traceroute -n google.com

# Trace with TCP packets (may bypass some firewalls) #
sudo traceroute -T google.com

# Trace with specific port #
traceroute -p 80 google.com

# Reduce probe frequency to be less intrusive #
traceroute -q 1 google.com

# Trace with source address #
traceroute -s source.ip.address google.com

# Continuous trace to detect intermittent issues #
traceroute -q 1 -w 2 google.com

```

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
- Firewall blocking ICMP/TCP packets
- Router configured not to send responses
- Network congestion causing packet loss

### How Do I Trace Route With IPv6? ###

Use the IPv6 version of the command:

```bash
traceroute6 ipv6.google.com
# OR #
traceroute -6 google.com

```

### What Does It Mean When Traceroute Stops Responding? ###

If traceroute stops showing responses after a certain hop:

- Possible network outage at that hop
- Firewall blocking responses
- The destination host rejecting connection attempts
- Routing issue in the path to the destination
