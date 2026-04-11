# `conntrack` #

- **Purpose:** Conntrack is a connection tracking utility that interfaces with the Netfilter connection tracking subsystem in the Linux kernel. It provides the ability to view, modify, and manage the state table of tracked connections, which is essential for stateful packet inspection, NAT (Network Address Translation), and firewall rule management. This command is critical for network administrators who need to monitor active connections, troubleshoot network issues, debug firewall rules, or manage connection states in complex network environments.
- **Usage:** `conntrack [OPTIONS] [CRITERIA]`

## Basic Usage ##

List all tracked connections:

```bash
sudo conntrack -L

```

List connections in XML format:

```bash
sudo conntrack -L -o xml

```

List connections with extended information:

```bash
sudo conntrack -L -o extended

```

List only TCP connections:

```bash
sudo conntrack -L -p tcp

```

List only UDP connections:

```bash
sudo conntrack -L -p udp

```

List connections involving a specific IP:

```bash
sudo conntrack -L -s 192.168.1.100

```

List connections to a specific IP:

```bash
sudo conntrack -L -d 8.8.8.8

```

List connections on a specific port:

```bash
sudo conntrack -L --dport 80

```

Delete a specific connection:

```bash
sudo conntrack -D -s 192.168.1.100 -d 8.8.8.8 -p tcp --sport 12345 --dport 80

```

Delete all connections matching criteria:

```bash
sudo conntrack -D -p tcp --dport 80

```

Update connection tracking information:

```bash
sudo conntrack -U -s 192.168.1.100 -d 8.8.8.8 -p tcp --timeout 600

```

## Options ##

- `-L` — List connection tracking table
- `-G` — Get information about a specific connection
- `-D` — Delete connection from table
- `-I` — Insert/initialize a connection
- `-U` — Update information about a connection
- `-F` — Flush connection tracking table
- `-E` — Show event messages
- `-C` — Show counter information
- `-S` — Show statistics
- `-p` — Specify protocol (tcp, udp, icmp, and so on)
- `-s` — Specify source address
- `-d` — Specify destination address
- `--sport` — Specify source port
- `--dport` — Specify destination port
- `-o` — Output format options
- `-w` — Wait for events
- `-v` — Verbose output

## Shortcuts ##

Common conntrack operations:

```bash
# Show all connections with counters #
sudo conntrack -L -o count

# Show statistics about connection tracking #
sudo conntrack -S

# Flush all connections (clear the table) #
sudo conntrack -F

# Monitor connection events in real-time #
sudo conntrack -E

# Show only ESTABLISHED connections #
sudo conntrack -L -o extended | grep ESTABLISHED

# Show connections with specific source network #
sudo conntrack -L -s 192.168.1.0/24

# Show connections with specific destination network #
sudo conntrack -L -d 10.0.0.0/8

# Show connections with specific port range #
sudo conntrack -L --dport 80-443

# Show connections with specific protocol and port #
sudo conntrack -L -p tcp --dport 22

# Show origin and reply information #
sudo conntrack -L -o orig-reply

# Show ID and timestamp information #
sudo conntrack -L -o id-timestamp

# Show zone information (if available) #
sudo conntrack -L -o zone

# Show connections with custom output format #
sudo conntrack -L -o extended -o label

# Delete connections by source #
sudo conntrack -D -s 192.168.1.100

# Delete connections by destination #
sudo conntrack -D -d 10.0.0.1

# Delete all TCP connections #
sudo conntrack -D -p tcp

# Delete connections by port #
sudo conntrack -D --dport 3306

# Show connections with timeout information #
sudo conntrack -L -o extended | grep timeout

# Count all active connections #
sudo conntrack -L | wc -l

# Count connections by protocol #
sudo conntrack -L -p tcp | wc -l
sudo conntrack -L -p udp | wc -l

# Show connections with longer timeout #
sudo conntrack -L -o extended | awk '$0 ~ /timeout/ && $NF > 1000'

# Show connections with specific labels #
sudo conntrack -L --label "web-server"

# Monitor connection events with specific criteria #
sudo conntrack -E -p tcp -s 192.168.1.0/24

# Get specific connection details #
sudo conntrack -G -s 192.168.1.100 -d 8.8.8.8 -p tcp --sport 12345 --dport 80

# Set timeout for a specific connection #
sudo conntrack -U -s 192.168.1.100 -d 8.8.8.8 -p tcp --timeout 300

# Insert a new connection entry #
sudo conntrack -I -s 192.168.1.100 -d 8.8.8.8 -p tcp --timeout 600

# Show connections in JSON format (if supported) #
sudo conntrack -L -o json

# Show only connections in specific state #
sudo conntrack -L -o extended | grep TIME_WAIT

# Show connections with specific marks #
sudo conntrack -L -m 0x1

# Delete connections with specific mark #
sudo conntrack -D -m 0x1

# Show connection tracking limits #
cat /proc/sys/net/netfilter/nf_conntrack_max

# Show current connection count #
sudo conntrack -S | grep conntrack

# Reset connection tracking counters #
sudo conntrack -C

# Export connection table for analysis #
sudo conntrack -L -o xml > conntrack_export.xml

# Show only connections from localhost #
sudo conntrack -L -s 127.0.0.1

# Show only HTTPS connections #
sudo conntrack -L -p tcp --dport 443

# Show connections with longer duration #
sudo conntrack -L -o extended | awk '{for(i=1;i<=NF;i++) if($i ~ /^timeout=/) if($(i+1) > 7200) print}'

# Show top talkers (most connections by IP) #
| sudo conntrack -L | awk '{print $3, $4}' | cut -d' ' -f1 | sort | uniq -c | sort -nr | head -10 |

# Monitor and log connection changes #
sudo conntrack -E -o extended | logger -t conntrack-events

# Show connections with NAT information #
sudo conntrack -L -o nat

# Filter by interface (if connection tracking zones are set up) #
sudo conntrack -L -z interface:eth0

# Show expired connections (if supported) #
sudo conntrack -L -o extended | grep EXPIRED

# Show only incoming/outgoing connections #
| sudo conntrack -L | grep "src=192.168" | grep "dst=8.8.8.8" |

# Batch delete connections matching pattern #
| sudo conntrack -L -p tcp --dport 80 | grep "TIME_WAIT" | while read conn; do |
| sudo conntrack -D $(echo "$conn" | awk '{print "-s", $4, "-d", $6, "-p tcp"}') |
done

# Show connections with specific timeout values #
| sudo conntrack -L -o extended | grep "timeout=" | head -20 |

# Export only specific connection types #
sudo conntrack -L -p tcp > tcp_connections.txt
sudo conntrack -L -p udp > udp_connections.txt

# Monitor specific service connections #
sudo conntrack -L -p tcp --dport 22  # SSH
sudo conntrack -L -p tcp --dport 53  # DNS
sudo conntrack -L -p udp --dport 53  # DNS UDP

# Show connections with packet and byte counters #
| sudo conntrack -L -o extended | grep "packets\ | bytes" |

# Find connections with the highest throughput #
| sudo conntrack -L -o extended | grep bytes | sort -k [byte_field] -n |

# Show connections initiated during specific time period #
sudo conntrack -L -o extended | grep "$(date +%s -d '1 hour ago')"

```

## FAQ ##

### What Is Connection Tracking? ###

Connection tracking (conntrack) is a service in the Linux kernel that keeps track of all network connections passing through the system. It maintains a table of connection states (NEW, ESTABLISHED, RELATED, INVALID) which is essential for:

- Stateful packet inspection in firewalls
- Network Address Translation (NAT)
- Port forwarding
- Load balancing based on connection state

### How Do I View Connection Statistics? ###

Use the statistics flag:

```bash
sudo conntrack -S

```

This shows information about connection tracking table usage, including:

- Current connections in the table
- Total capacity
- Events received
- Error counts

### How Do I Clear The Connection Tracking Table? ###

To clear all tracked connections:

```bash
sudo conntrack -F

```

**Warning:** This will reset all connection state information, which may affect active connections and firewall rules that rely on connection state.

### What Protocols Does Conntrack Support? ###

Conntrack supports most common protocols:

- TCP (with connection state tracking)
- UDP (with conntrack for port-based tracking)
- ICMP (for related connection tracking)
- SCTP
- DCCP
- And others depending on kernel modules loaded

### How Do I Monitor Connection Table Limits? ###

Check the current limit and usage:

```bash
# Maximum connections allowed #
cat /proc/sys/net/netfilter/nf_conntrack_max

# Current connection count #
sudo conntrack -S | grep conntrack

# Calculate usage percentage #
max=$(cat /proc/sys/net/netfilter/nf_conntrack_max)
| current=$(sudo conntrack -S | grep -o "conntrack count=[0-9]*" | cut -d'=' -f2) |
| echo "scale=2; $current * 100 / $max" | bc |

```

Exceeding the limit may cause new connections to fail until entries expire or are removed.
