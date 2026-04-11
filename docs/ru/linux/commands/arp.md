# `arp` #

- **Purpose:** The `arp` (Address Resolution Protocol) command is used to manage and view the system's ARP cache, which maps IP addresses to MAC (Media Access Control) addresses on a local network. It allows administrators to view, add, or delete entries in the ARP table that associates IP addresses with physical hardware addresses.
- **Usage:** `arp [OPTIONS] [IP_ADDRESS]`

## Basic Usage ##

Display the current ARP table:

```bash
arp -a

```

Display ARP table without using hostname resolution:

```bash
arp -n

```

Add a static ARP entry:

```bash
sudo arp -s 192.168.1.100 00:11:22:33:44:55

```

Delete an ARP entry:

```bash
sudo arp -d 192.168.1.100

```

Get ARP entry for specific host:

```bash
arp hostname_or_ip

```

Delete ARP entry by hostname:

```bash
sudo arp -d hostname

```

## Options ##

- `-a` — Display all ARP entries (default if no arguments are given)
- `-n` — Show numerical addresses instead of trying to determine hostnames
- `-s` — Add a static ARP entry
- `-d` — Delete an ARP entry
- `-v` — Verbose output
- `-i` — Specify the network interface to use
- `-f` — Add entries from a file (using filename argument)
- `-p` — Use the protocol specified (usually inet)

## Shortcuts ##

Common ARP operations:

```bash
# Show ARP table with interface information #
arp -an

# Flush entire ARP cache (on some systems) #
sudo arp -a -d

# Add temporary ARP entry (will disappear after timeout normally) #
sudo arp -s 10.0.0.5 aa:bb:cc:dd:ee:ff

# View ARP table for a specific interface #
arp -i eth0 -n

# Delete all entries (use with caution) #
| arp -a | grep -v '...' | awk '{print $2}' | sed 's/.$//' | xargs -I {} sudo arp -d {} |

```

## FAQ ##

### How Do I Clear the ARP Cache? ###

The method varies by system:

```bash
# On most Linux distributions #
sudo ip -s -s neigh flush all

# Or using arp command (if supported) #
sudo arp -a -d

```

### What's the Difference Between Static and Dynamic ARP Entries? ###

- Dynamic ARP entries are automatically created when hosts communicate and expire after a timeout period
- Static ARP entries persist until manually removed and are not subject to expiration

### Why Would I Need to Manually Add ARP Entries? ###

Static ARP entries are useful for:

- Security purposes (preventing ARP spoofing)
- Ensuring traffic goes to the correct device in certain network configurations
- Troubleshooting network connectivity issues
- Performance optimization in some cases

### How Long Do ARP Entries Stay in the Cache? ###

Dynamic ARP entries typically stay in the cache for 10-20 minutes, though this can vary based on:

- Operating system settings
- Network configuration
- Traffic patterns
 to that IP address

- Whether there's active communication with that host

### How Do I View ARP Information for a Specific Interface? ###

Use the `-i` flag to specify the interface:

```bash
arp -i eth0 -n

```
