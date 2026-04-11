# Nmap (Network Mapper) #

Nmap (_Network Mapper_) is an open-source tool for network discovery and security auditing. It runs on Linux, Windows, and macOS.

## Basic Syntax ##

```bash
nmap [options] <target>

```

**Targets** can be:

- IP (`192.168.1.1`)
- Hostname (`example.com`)
- Subnet (`192.168.1.0/24`)

## Essential Options ##

- `-p <ports>` — scan specific ports (for example, `-p 80,443` or `-p 1-1000`)
- `-sS` — TCP SYN scan (stealthy, requires root)
- `-sT` — TCP connect scan (no root needed)
- `-sU` — UDP scan
- `-sV` — service/version detection
- `-O` — OS detection
- `-A` — aggressive scan (enables OS, version, script scanning)
- `-v` — verbose output (use `-vv` for more details)
- `-Pn` — skip host discovery (assume all hosts are up)
- `-n` — no DNS resolution (faster scans)
- `--reason` — show why a port is in a certain state
- `-oN/oX/oG <file>` — save output (normal/XML/grepable)

## Practical Examples ##

### Quick Scan of Common Ports ###

```bash
nmap -sT -p 22,80,443,3389 192.168.1.100

```

### Stealthy SYN Scan of Top 100 Ports ##

```bash
sudo nmap -sS -F 192.168.1.0/24

```

### Comprehensive Scan with Version Detection ##

```bash
nmap -sV -sC -O 192.168.1.100

```

### Scan All Ports with OS Detection ###

```bash
sudo nmap -p- -O 192.168.1.100

```

### Fast Scan of Entire Subnet ###

```bash
nmap -sn 192.168.1.0/24

```

### Scan for Specific service** ###

```bash
nmap -p 3306 --script mysql-info 192.168.1.100

```

### Save Results to File ###

```bash
nmap -oN scan_results.txt -sV 192.168.1.100
nmap -oX scan_results.xml 192.168.1.100

```

### Aggressive Scan with Scripts ###

```bash
nmap -A -T4 192.168.1.100

```

### Scan Using Predefined Port List ###

```bash
nmap --top-ports 20 192.168.1.100

```

### Scan with Timing Optimization ###

```bash
nmap -T3 192.168.1.100  # Normal speed
nmap -T4 192.168.1.100  # Aggressive (faster)

```

## Output States ##

- `open` — application is actively accepting connections
- `closed` — port accessible but no service running
- `filtered` — packet filtering prevents determination
- `unfiltered` — port reachable but state unknown
- `open|filtered` — Nmap can't determine

## Pro Tips ##

- Always get permission before scanning networks
- Use `-v` or `-vv` to see what's happening
- Combine `-n` (no DNS) for faster scans on large networks
- Use `--reason` to understand port states
- Save output with `-oN`, `-oX`, or `-oG` for later analysis
