# `nslookup` #

- **Purpose:** The `nslookup` command is a network administration tool used to query Domain Name System (DNS) servers to obtain domain name or IP address mappings. It allows users to troubleshoot DNS issues, verify DNS records, and investigate network connectivity problems by resolving hostnames to IP addresses and vice versa.
- **Usage:** `nslookup [OPTIONS] HOSTNAME [SERVER]`

## Basic Usage ##

Query DNS for a hostname:

```bash
nslookup google.com

```

Query DNS using a specific DNS server:

```bash
nslookup google.com 8.8.8.8

```

Query a specific DNS record type:

```bash
nslookup -type=MX google.com

```

Perform reverse DNS lookup (IP to hostname):

```bash
nslookup 8.8.8.8

```

Query for mail exchange records:

```bash
nslookup -type=MX example.com

```

Query for authoritative name servers:

```bash
nslookup -type=NS example.com

```

## Options ##

- `-type` — Specify the query type (A, MX, NS, TXT, CNAME, and so on)
- `-debug` — Show detailed debug information
- `-timeout` — Set query timeout value
- `-retry` — Set number of retries for queries
- `-port` — Specify the port to use for queries
- `-domain` — Set the default domain name

## Shortcuts ##

Interactive mode commands:

```bash
# Enter interactive mode #
nslookup

# In interactive mode: #
server 8.8.8.8        # Change DNS server
set type=mx           # Set default query type to MX
google.com            # Query google.com
exit                  # Exit interactive mode

# One-liner for common record types #
nslookup -type=SOA example.com
nslookup -type=TXT _spf.google.com
nslookup -type=CNAME www.example.com

```

## FAQ ##

### What Is the Difference Between Nslookup, Dig, and Host? ###

- `nslookup` - Interactive and non-interactive, older tool, sometimes deprecated
- `dig` - More detailed and flexible, preferred by system administrators
- `host` - Simpler interface for basic DNS lookups

### How Do I Query Different DNS Record Types? ###

Use the `-type` option:

```bash
nslookup -type=A example.com      # A record (IPv4 address)
nslookup -type=AAAA example.com   # AAAA record (IPv6 address)
nslookup -type=MX example.com     # Mail Exchange records
nslookup -type=NS example.com     # Name Server records
nslookup -type=TXT example.com    # Text records

```

### How Do I Use Interactive Mode? ###

Start without arguments to enter interactive mode:

```bash
nslookup
> server 8.8.8.8
> google.com
> set type=MX
> example.com
> exit

```

### How Do I Perform Reverse DNS Lookup? ###

Simply provide an IP address instead of a hostname:

```bash
nslookup 8.8.8.8
# This will attempt to find the hostname associated with the IP address #

```

### Is Nslookup Still Recommended for DNS Queries? ###

While `nslookup` is still functional, the `dig` command is generally preferred for DNS troubleshooting because it offers more options and better output formatting. However, `nslookup` remains useful due to its widespread availability and interactive mode.
