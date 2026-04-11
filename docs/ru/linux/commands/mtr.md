# `mtr` (My Traceroute) #

- **Purpose:** `mtr` (My TraceRoute) is a network diagnostic tool that combines the functionality of `traceroute` and `ping` into a single interactive utility. It continuously sends packets to a target host and displays real-time statistics (latency, packet loss, hop-by-hop routing) for each network node along the path. A hybrid of `ping` and `traceroute` with continuous network diagnostics.
- **Usage:** `mtr [options] <hostname | IP>`

## Basic Usage ##

Run a basic `mtr` scan to `google.com`:

```bash
sudo mtr google.com

```

This opens an interactive display showing:

- Hop number.
- Router IP/hostname.
- Packet loss percentage.
- Response time (min/avg/max).
- Jitter (variation in response time).

Output as a report with 10 cycles:

```bash
sudo mtr -r -c 10 example.com

```

## Options ##

- `-r` / `--report` — Generate a static report (non-interactive mode).
- `-c N` / `--report-cycles <N>` — Send `N` packets per hop, then exit.
- `-w` / `--wide` — Wider report format (useful for long hostnames).
- `-i <N>` / `--interval <N>` — Set packet interval to `N` seconds (default: 1s).
- `-4` / `-6` — Force IPv4 or IPv6 usage.
- `-n` — Display IP addresses only (no DNS resolution).

## Shortcuts ##

In interactive mode:

- `r` — Refresh the display.
- `d` — Toggle DNS resolution on/off.
- `n` — Toggle numeric IP display.
- `p` — Toggle port display.
- `q` — Quit `mtr`.
- `?` — Show help.

## FAQ ##

### How is `mtr` Different From `traceroute`? ###

`mtr` provides continuous, real-time monitoring with statistical data (packet loss, jitter) for each hop, whereas `traceroute` only shows a single snapshot of the route.

### Why Do Some Hops Show 100% Packet Loss? ###

Some routers prioritize routing over responding to diagnostic packets (ICMP/UDP), so they may drop `mtr` probes intentionally. Focus on end-to-end loss rather than intermediate hops.

### Can I Save `mtr` Output to a File? ###

Yes, use the report mode with redirection:

```bash
mtr -r -c 20 google.com > mtr_report.txt

```

### What Causes High Jitter in `mtr` Results? ###

High jitter indicates network instability. Common causes include:

- Congested links.
- Routing changes.
- Wireless interference.
- Overloaded intermediate routers.

### How Do I Stop `mtr` in Interactive Mode? ###

Press `q` to quit, or use <kbd>Ctrl</kbd> + <kbd>C</kbd> in the terminal.
