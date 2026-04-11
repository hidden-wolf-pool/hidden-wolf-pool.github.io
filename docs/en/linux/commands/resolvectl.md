# `resolvectl` #

- **Purpose:** The `resolvectl` command is used to manage and query DNS settings on Linux systems using systemd-resolved. It allows users to control DNS resolution, view DNS configuration, flush DNS caches, set DNS servers, and diagnose DNS resolution issues. The command is part of the systemd suite and provides a unified interface for DNS management that integrates with systemd's network and service management.
- **Usage:** `resolvectl [OPTIONS] [COMMAND] [ARGS...]`

## Basic Usage ##

Display current DNS status and configuration:

```bash
resolvectl

```

Query DNS for a specific domain:

```bash
resolvectl query example.com

```

Set DNS servers for a specific interface:

```bash
sudo resolvectl dns eth0 8.8.8.8 8.8.4.4

```

Set DNS domain for a specific interface:

```bash
sudo resolvectl domain eth0 example.com

```

Flush the DNS cache:

```bash
sudo resolvectl flush-caches

```

Get DNS status for a specific interface:

```bash
resolvectl status eth0

```

## Options ##

- `--service` — Select which DNS stub service to use
- `--interface` — Select interface for operation
- `--raw` — Output in raw format
- `--type` — Restrict records to specific DNS type
- `--class` — Use specific DNS class
- `--legend` — Enable/disable legend
- `-h`, `--help` — Show help and exit

## Shortcuts ##

Common resolvectl operations:

```bash
# Check overall DNS status #
resolvectl

# Query DNS with detailed information #
resolvectl query google.com

# Set DNS for specific interface #
sudo resolvectl dns eth0 1.1.1.1 1.0.0.1

# Check DNS status for specific interface #
resolvectl status eth0

# Flush DNS cache #
sudo resolvectl flush-caches

# Query specific record types #
resolvectl query --type=MX example.com

# Show statistics #
resolvectl statistics

# Reset DNS configuration #
sudo resolvectl reset-statistics

```

## FAQ ##

### How Do I Set DNS Servers Using Resolvectl? ###

Use the `dns` command with the interface and DNS server addresses:

```bash
sudo resolvectl dns eth0 8.8.8.8 8.8.4.4

```

### How Do I Check Which DNS Servers Are Being Used? ###

Use the status command:

```bash
resolvectl status

```

Or just run:

```bash
resolvectl

```

### How Do I Flush The DNS Cache? ###

Use the flush-caches command:

```bash
sudo resolvectl flush-caches

```

### What Is The Difference Between Resolvectl And Traditional Dns Management? ###

- `resolvectl` - Part of systemd-resolved, provides unified DNS management
- Traditional - Directly editing `/etc/resolv.conf` or using network manager tools

### How Do I Troubleshoot DNS Issues With Resolvectl? ###

Useful troubleshooting commands:

```bash
# View current status #
resolvectl status

# Query specific domain #
resolvectl query domain.com

# Check statistics #
resolvectl statistics

# View transaction logs #
resolvectl status

```
