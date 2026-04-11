# `whois` #

- **Purpose:** The `whois` command is used to query WHOIS databases to obtain information about domain name registrations, IP address allocations, and autonomous system (AS) numbers. It retrieves registration details such as domain owner, registrar, registration and expiration dates, and contact information for the registered entity.
- **Usage:** `whois [OPTIONS] QUERY`

## Basic Usage ##

Query domain information:

```bash
whois example.com

```

Query IP address information:

```bash
whois 8.8.8.8

```

Query with specific WHOIS server:

```bash
whois -h whois.verisign-grs.com example.com

```

Query for a specific field:

```bash
whois example.com | grep "Registrar:"

```

Query for an AS number:

```bash
whois AS15169

```

Query for CIDR range:

```bash
whois 192.168.0.0/24

```

## Options ##

- `-h` — Query a specific WHOIS server
- `-H` — Hide legal disclaimers and notices
- `-i` — Perform case-insensitive matching
- `-I` — Use the IANA server (iana.org) for lookups
- `-l` — Follow referrals (get more data)
- `-m` — Limit output to exact match
- `-r` — Use recursive queries (when supported)

## Shortcuts ##

Common whois operations:

```bash
# Whois with cleaner output #
| whois example.com | grep -E "(Registrar: | Creation Date: | Expiration Date: | Name Server:)" |

# Get only the registrar information #
whois example.com | grep Registrar

# Check domain availability (no output means available) #
| whois example.com 2>&1 | grep -i "no match\ | not found\ | available" |

# Get whois with no disclaimers #
whois -H example.com

# Whois with specific server for country domains #
whois -h whois.jprs.jp example.jp

# Bulk check multiple domains #
for domain in example1.com example2.com example3.com; do
  echo "=== $domain ==="
  whois $domain | head -20
done

```

## FAQ ##

### How Do I Check If a Domain Is Available? ###

When a domain is available, a whois query will return a message like "No match for domain" or "Domain not found". If you get detailed registration information, the domain is taken.

### What Information Can I Get From Whois? ###

Whois queries typically provide:

- Domain registration and expiration dates
- Registered owner information
- Administrative and technical contacts
- Name servers for the domain
- Registrar details
- IP address allocation details (for IP lookups)

### Why Do Some Whois Queries Return Limited Information? ###

Many registrars offer privacy protection services that hide the real owner's information. Additionally, GDPR regulations have limited the amount of personal data available in public WHOIS records.

### How Do I Find the WHOIS Server for a Specific TLD? ###

Use a WHOIS directory service or refer to the IANA Root Zone Database to find the appropriate WHOIS server for each top-level domain.

### What Is Rate Limiting in Whois Queries? ###

WHOIS servers often implement rate limiting to prevent abuse. If you query too frequently, you may be temporarily blocked. This is why some scripts include delays between requests.
