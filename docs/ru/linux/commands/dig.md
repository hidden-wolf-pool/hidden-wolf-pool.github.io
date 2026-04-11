# `dig` (Domain Information Groper) #

- **Purpose:** DIG (Domain Information Groper) is a powerful command-line tool for querying Domain Name System (DNS) servers to retrieve information about domain names, IP address mappings, and DNS record types. It provides detailed information about DNS records and is essential for network administrators and developers to diagnose DNS issues, verify DNS configurations, troubleshoot connectivity problems, and investigate domain-related issues. DIG offers more detailed output than simpler tools like `nslookup` or `host`.
- **Usage:** `dig [OPTIONS] [@SERVER] [DOMAIN] [TYPE]`

## Basic Usage ##

Query DNS for A record (default):

```bash
dig example.com

```

Query DNS using a specific DNS server:

```bash
dig @8.8.8.8 example.com

```

Query for specific record type (MX):

```bash
dig example.com MX

```

Query for A record only:

```bash
dig example.com A

```

Query for AAAA record (IPv6):

```bash
dig example.com AAAA

```

Query for NS (name server) records:

```bash
dig example.com NS

```

Query for TXT records:

```bash
dig example.com TXT

```

Query for CNAME records:

```bash
dig www.example.com CNAME

```

Query for all record types:

```bash
dig example.com ANY

```

Query for PTR record (reverse DNS):

```bash
dig -x 8.8.8.8

```

## Options ##

- `@SERVER` — Query specific DNS server
- `-x` — Reverse DNS lookup
- `-t TYPE` — Query specific record type
- `+short` — Provide short answer
- `+noshort` — Provide full answer (default)
- `+noall` — Suppress everything
- `+answer` — Display answer section
- `+authority` — Display authority section
- `+additional` — Display additional section
- `+stats` — Display statistics
- `+trace` — Trace delegation from root
- `+identify` — Show IP address and port of response
- `+multiline` — Multi-line format of output
- `+noquestion` — Suppress question section
- `+comments` — Enable comments
- `+nocmd` — Suppress command line

## Shortcuts ##

Common dig operations:

```bash
# Get only the IP address for a domain #
dig example.com +short

# Query specific DNS server #
dig @1.1.1.1 example.com

# Get only MX records #
dig example.com MX +short

# Get all available records #
dig example.com ANY

# Query DNSSEC information #
dig example.com +dnssec

# Trace DNS query from root servers #
dig example.com +trace

# Reverse DNS lookup (IP to hostname) #
dig -x 8.8.8.8

# Query with specific port #
dig @8.8.8.8 -p 53 example.com

# Get only answer section #
dig example.com +noall +answer

# Get TTL information #
dig example.com +noall +answer +ttlid

# Query multiple record types at once #
dig example.com A; dig example.com AAAA

# Show query time #
dig example.com +stats

# Query with EDNS0 support #
dig example.com +edns=0

# Disable recursive queries #
dig example.com +norecurse

# Show detailed query information #
dig example.com +identify

# Show multiline format #
dig example.com +multiline

# Check DNS server status #
dig example.com @8.8.8.8 +short

# Get SOA record (Start of Authority) #
dig example.com SOA +short

# Get CAA record (Certificate Authority Authorization) #
dig example.com CAA +short

# Query with timeout #
dig example.com +time=30

# Query with specific EDNS packet size #
dig example.com +edns=4096

# Show class information #
dig example.com +class

# Hide comments in output #
dig example.com +nocomments

# Show question section only #
dig example.com +noall +question

# Get TXT record with SPF information #
dig example.com TXT +short | grep "spf"

# Query for SRV records #
dig _sip._tcp.example.com SRV +short

# Get AXFR (zone transfer) #
dig @ns1.example.com example.com AXFR

# Query specific subdomain #
dig api.example.com MX +short

# Get DNSKEY records #
dig example.com DNSKEY +short

# Query for DS records (Delegation Signer) #
dig example.com DS +short

# Get RRSIG records (Resource Record Signature) #
dig example.com RRSIG +short

# Show query options used #
dig example.com +noall +cmd

# Query for NAPTR records #
dig example.com NAPTR +short

# Get LOC records (Location) #
dig example.com LOC +short

# Query with TCP instead of UDP #
dig example.com +tcp

# Compare answers from different DNS servers #
dig example.com @8.8.8.8 +short
dig example.com @1.1.1.1 +short

# Get only authoritative answers #
dig example.com +noall +authority

# Get additional information #
dig example.com +noall +additional

# Use specific source address #
dig example.com +sourcedir=192.168.1.100

# Query with specific query name #
dig example.com +identify +comments

# Get OPT records (EDNS) #
dig example.com +multi +subnet=192.168.1.0/24

# Get HINFO records (Hardware Info) #
dig example.com HINFO +short

# Query with TSIG authentication (if configured) #
dig example.com +tsig=algorithm:name:key

# Get TLSA records (DANE) #
dig _25._tcp.mail.example.com TLSA +short

# Check if DNS server supports IPv6 #
dig AAAA example.com @dns-server +short

# Query with retry attempts #
dig example.com +retry=5

# Get HIP records (Host Identity Protocol) #
dig example.com HIP +short

# Query for CDS records (Child DS) #
dig example.com CDS +short

# Get CDNSKEY records (Child DNSKEY) #
dig example.com CDNSKEY +short

# Query and show network path #
dig example.com +trace +additional

# Get details about DNS server #
dig @8.8.8.8 . NS

# Check for wildcard domains #
dig *.example.com

# Get query response time #
dig example.com +stats | grep "Query time"

# Show all subdomains of a domain #
dig example.com +trace | grep ";; ANSWER SECTION"

# Test DNSSEC validation #
dig example.com +dnssec +multiline

# Check DNS propagation #
dig @8.8.8.8 example.com +short
dig @8.8.4.4 example.com +short

# Query for SSHFP records #
dig example.com SSHFP +short

# Get URI records #
dig example.com URI +short

# Query with specific source port #
dig example.com +sourceport=5353

# Get NSEC records (Next Secure) #
dig example.com NSEC +short

# Get NSEC3 records (Next Secure 3) #
dig example.com NSEC3 +short

# Check zone serial number #
dig example.com SOA +short | awk '{print $3}'

```

## FAQ ##

### What Is The Difference Between Dig, Nslookup, And Host? ###

- `dig` - Most detailed output, best for diagnostics and troubleshooting
- `nslookup` - Interactive and non-interactive modes, more verbose
- `host` - Simple interface, good for basic lookups

### How Do I Get Only The IP Address From A Dig Query? ###

Use the `+short` option:

```bash
dig example.com +short

```

### How Do I Perform Reverse DNS Lookup With Dig? ###

Use the `-x` flag:

```bash
dig -x 8.8.8.8
# OR #
dig -x 2001:4860:4860::8888  # For IPv6

```

### What Does The +trace Option Do? ###

The `+trace` option traces the delegation path from the root DNS servers through the various levels of domain hierarchy to the authoritative DNS server for the specified domain. This helps understand the DNS resolution path and identify where issues might occur.

### How Do I Query Specific DNS Servers? ###

Use the `@` symbol followed by the DNS server address:

```bash
dig @8.8.8.8 example.com
dig @1.1.1.1 example.com
dig @ns1.example.com example.com

```

### How Do I Check For DNSSEC Validation? ###

Add the `+dnssec` option:

```bash
dig example.com +dnssec

```

Look for RRSIG (Resource Record Signature) records in the response, which indicate DNSSEC validation information.
