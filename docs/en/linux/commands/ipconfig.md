# `ipconfig` #

- **Purpose:** The `ipconfig` command is primarily a Windows command-line utility for displaying and configuring network interface parameters in Microsoft Windows operating systems. On Linux systems, equivalent functionality is provided by commands such as `ip`, `ifconfig`, or `nmcli`. For cross-platform documentation purposes, this describes the Windows `ipconfig` command, which displays current TCP/IP network configuration values and refreshes Dynamic Host Configuration Protocol (DHCP) and Domain Name System (DNS) settings.
- **Usage:** `ipconfig [OPTIONS]`

## Basic Usage ##

Display basic IP configuration:

```powershell
ipconfig
```

Display full configuration including MAC address and DNS:

```powershell
ipconfig /all
```

Release current IP configuration (for DHCP clients):

```powershell
ipconfig /release
```

Renew IP configuration (for DHCP clients):

```powershell
ipconfig /renew
```

Release/renew only specific adapter:

```powershell
ipconfig /release "Local Area Connection"
ipconfig /renew "Local Area Connection"
```

Flush DNS resolver cache:

```powershell
ipconfig /flushdns
```

Display DNS cache:

```powershell
ipconfig /displaydns
```

Display network configuration for a specific adapter:

```powershell
ipconfig | findstr "adapter_name"
```

## Options ##

- `/all` — Display detailed configuration information for each network adapter.
- `/release` — Release IP configuration for all adapters or a specific one.
- `/renew` — Renew IP configuration for all adapters or a specific one.
- `/flushdns` — Purge entries from the DNS resolver cache.
- `/displaydns` — Display current DNS resolver cache entries.
- `/registerdns` — Refreshes DNS registration and refreshes DHCP lease.

## FAQ ##

### What Is the Linux Equivalent of Ipconfig? ###

On Linux systems, the equivalents to Windows' `ipconfig` are:

- `ip addr` (recommended, modern).
- `ifconfig` (legacy but still commonly used).
- `nmcli dev show` (NetworkManager command).

### How Do I Find My IP Address Using Ipconfig? ###

Use `ipconfig` to display basic information:

```powershell
ipconfig
```

Use `ipconfig /all` to see complete information including MAC address, DHCP server, and so on.

### What Does Ipconfig /flushdns Do? ###

The `ipconfig /flushdns` command clears the DNS resolver cache, forcing the system to query DNS servers again for name resolution. This is useful when experiencing DNS resolution issues.

### When Would I Use Ipconfig /release and /renew? ###

Use these commands to:

- Troubleshoot network connectivity issues.
- Obtain a new IP address from DHCP server.
- Refresh network settings after configuration changes.
- Resolve IP address conflicts.

### What Information Does Ipconfig /all Show? ###

The `/all` option displays comprehensive network adapter information including:

- Physical address (MAC address).
- IPv4 and IPv6 addresses.
- Subnet mask.
- Default gateway.
- DHCP server information.
- DNS server information.
- Lease times (for DHCP clients).
