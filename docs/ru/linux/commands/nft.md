# `nft` #

- **Purpose:** The `nft` command is the command-line interface for nftables, the successor to iptables in Linux. It's a subsystem of the Linux kernel that provides packet classification facilities for filtering, network address translation, and packet mangling. Nftables offers a more flexible and efficient framework than its predecessors (iptables, ip6tables, arptables, ebtables) with a simplified rule syntax, better performance, and enhanced expression capabilities. It's used for firewall configuration, packet filtering, network address translation (NAT), and traffic management in modern Linux systems.
- **Usage:** `nft [OPTIONS] [COMMAND] [ARGS...]`

## Basic Usage ##

List all tables:

```bash
sudo nft list tables

```

List rules in a specific table:

```bash
sudo nft list table inet filter

```

List all rules in all tables:

```bash
sudo nft list ruleset

```

Add a new table:

```bash
sudo nft add table inet mytable

```

Add a new chain:

```bash
sudo nft add chain inet filter input { type filter hook input priority 0 \; }

```

Add a rule to allow traffic on loopback interface:

```bash
sudo nft add rule inet filter input iif "lo" accept

```

Add a rule to allow established connections:

```bash
sudo nft add rule inet filter input ct state established accept

```

Add a rule to allow SSH:

```bash
sudo nft add rule inet filter input tcp dport 22 accept

```

Delete a rule by handle:

```bash
sudo nft delete rule inet filter input handle 10

```

Flush a table:

```bash
sudo nft flush table inet filter

```

Save ruleset to file:

```bash
sudo nft list ruleset > /etc/nftables.conf

```

Restore ruleset from file:

```bash
sudo nft -f /etc/nftables.conf

```

## Options ##

- `-f` — Read netfilter rules from a file
- `-i` — Read input from a file as a script
- `-I` — Add directory to include path for include directives
- `-S` — Enable parser debugging
- `-s` — Show numeric output (no DNS resolution)
- `-n` — Show numeric output only for addresses
- `-a` — Show rule handles in list commands
- `-e` — Show rules in the extended format
- `-h` — Show help message
- `-v` — Show version information
- `-c` — Enable automatic commit
- `--checkpoint` — Create a checkpoint of the current ruleset
- `--rollback` — Rollback to the latest checkpoint
- `--json` — Encode output in JSON format

## Shortcuts ##

Common nftables operations:

```bash
# Create a basic firewall with default rules #
sudo nft add table inet filter
sudo nft add chain inet filter input { type filter hook input priority 0 \; policy drop \; }
sudo nft add chain inet filter forward { type filter hook forward priority 0 \; policy drop \; }
sudo nft add chain inet filter output { type filter hook output priority 0 \; policy accept \; }

# Accept loopback traffic #
sudo nft add rule inet filter input iif "lo" accept

# Accept established connections #
sudo nft add rule inet filter input ct state established accept

# Accept specific ports (SSH, HTTP, HTTPS) #
sudo nft add rule inet filter input tcp dport { 22, 80, 443 } accept

# Block a specific IP address #
sudo nft add rule inet filter input ip saddr 192.168.1.100 drop

# Allow specific subnet #
sudo nft add rule inet filter input ip saddr 192.168.1.0/24 accept

# Create set for blacklisted IPs #
sudo nft add set inet filter blacklist { type ipv4_addr \; }
sudo nft add element inet filter blacklist { 192.168.1.101 }

# Block traffic from IP set #
sudo nft add rule inet filter input ip saddr @blacklist drop

# Create chain for rate limiting #
sudo nft add chain inet filter ssh_ratelimit { type filter hook input priority 0 \; }
sudo nft add rule inet filter ssh_ratelimit ip protocol tcp tcp dport 22 meter ssh_rate { ip saddr 100/second burst 5 packets } drop

# Set up port forwarding (DNAT) #
sudo nft add table ip nat
sudo nft add chain ip nat prerouting { type nat hook prerouting priority -100 \; }
sudo nft add rule ip nat prerouting tcp dport 80 redirect to :8080

# Block all traffic from specific range except specific ports #
sudo nft add rule inet filter input ip saddr 10.0.0.0/8 ip protocol tcp tcp dport != { 22, 53, 80, 443 } drop

# Create counter for specific traffic #
sudo nft add map inet filter port_count { type inet_service : counter \; }
sudo nft add rule inet filter input tcp dport 80 map update @port_count counter

# Log and drop traffic #
sudo nft add rule inet filter input tcp dport 23 log prefix "BLOCKED_TELNET: " drop

# Set up masquerading (SNAT for dynamic IPs) #
sudo nft add chain ip nat postrouting { type nat hook postrouting priority 100 \; policy accept \; }
sudo nft add rule ip nat postrouting oif eth0 masquerade

# Create custom chain for specific services #
sudo nft add chain inet filter web_server
sudo nft add rule inet filter input tcp dport { 80, 443 } jump web_server
sudo nft add rule inet filter web_server ip saddr 10.0.0.0/8 accept
sudo nft add rule inet filter web_server drop

# Set up traffic statistics #
sudo nft add counter inet filter http_counter
sudo nft add rule inet filter input tcp dport 80 counter name http_counter accept

# Block specific MAC addresses #
sudo nft add rule inet filter input ether saddr 00:11:22:33:44:55 drop

# Create set for whitelisted ports #
sudo nft add set inet filter allowed_ports { type inet_service \; }
sudo nft add element inet filter allowed_ports { 22, 80, 443, 53 }

# Only allow traffic to specific ports #
sudo nft add rule inet filter output tcp dport != @allowed_ports drop

# Set up basic IPv6 firewall #
sudo nft add table ip6 filter
sudo nft add chain ip6 filter input { type filter hook input priority 0 \; policy drop \; }
sudo nft add rule ip6 filter input iif "lo" accept
sudo nft add rule ip6 filter input ip6 nexthdr tcp tcp dport 22 accept

# Set up bridge filtering #
sudo nft add table bridge filter
sudo nft add chain bridge filter input { type filter hook input priority 0 \; }

# Set up ARP filtering #
sudo nft add table arp filter
sudo nft add chain arp filter input { type filter hook input priority 0 \; }

# Batch operations from file #
# Create file with: #
# add table inet mytable #
# add chain inet mytable input { type filter hook input priority 0 \; policy drop \; } #
# add rule inet mytable input iif "lo" accept #
# Then run: #
nft -f batch_file.nft

# Export ruleset in JSON format #
nft --json list ruleset

# Import rules from JSON #
nft --json -f rules.json

# Create checkpoint for safe rule changes #
sudo nft --checkpoint list ruleset

# Rollback to checkpoint if something goes wrong #
sudo nft --rollback

# Add rule with comment #
sudo nft add rule inet filter input tcp dport 22 comment "Allow SSH" accept

# Use variables in rules #
nft add rule inet filter input ip saddr $INTERNAL_NET tcp dport 80 accept

# Create named sets for complex filtering #
sudo nft add set inet filter bad_ips { type ipv4_addr \; flags dynamic,timeout \; timeout 1h \; }

# Auto-block IPs after multiple failures #
sudo nft add rule inet filter input ip protocol tcp tcp dport 22 meter brute_force { ip saddr 1/minute limit rate over 5/minute } add element inet filter bad_ips { ip saddr timeout 1h \; }

# Set up simple load balancing #
sudo nft add table ip loadbalance
sudo nft add chain ip loadbalance prerouting { type nat hook prerouting priority -100 \; }
sudo nft add rule ip loadbalance prerouting tcp dport 80 dnat to numgen random mod 3 map { 0: 10.0.0.10, 1: 10.0.0.11, 2: 10.0.0.12 }

# Create rule with connection tracking #
sudo nft add rule inet filter input ct state new limit rate 5/second accept

# Set up connection rate limiting #
sudo nft add rule inet filter input ct count 10 limit rate over 5/second drop

# Block traffic during specific times #
sudo nft add rule inet filter input time.hour >= "09:00" time.hour <= "17:00" tcp dport 80 accept

# Create complex expressions #
sudo nft add rule inet filter input ip saddr 192.168.0.0/16 ip daddr != 192.168.1.0/24 tcp dport { 80, 443 } accept

# Add rule with packet size limitations #
sudo nft add rule inet filter input ip protocol tcp tcp flags syn length < 512 drop

# Set up packet mark operations #
sudo nft add rule inet filter input tcp dport 80 meta mark set 0x100

# Use meta information in rules #
sudo nft add rule inet filter input meta iif eth0 tcp dport 22 accept

# Set up flow table for connection tracking #
sudo nft add flowtable inet filter fast_nat { hook num 1 priority -300 \; devices = { eth0 } \; }

# Add flow offloading rule #
sudo nft add rule inet filter input flow add @fast_nat

# Create rules with interface groups #
sudo nft add rule inet filter input iifname eth{0,1,2} accept

# Use bitwise operations in rules #
sudo nft add rule inet filter input ip protocol tcp tcp dport & 0xf000 == 0x4000 accept

# Set up traffic control markings #
sudo nft add rule inet filter output ip protocol tcp tcp dport 80 meta priority set class 0x07

# Block based on dscp values #
sudo nft add rule inet filter input ip dscp cs7 drop

# Create complex counter rules #
sudo nft add rule inet filter input ip protocol tcp counter name "tcp_packets" bytes 0 pkts 0 accept

# Set up protocol-specific chains #
sudo nft add chain inet filter tcp_chain
sudo nft add rule inet filter input ip protocol tcp jump tcp_chain
sudo nft add rule inet filter tcp_chain tcp flags syn,junk ct count > 5 drop

# Use string matching in rules #
sudo nft add rule inet filter input ip protocol tcp tcp payload base 32 length 100 @tcp_payload[*] != 0x48656c6c6f drop  # Not starting with "Hello"

# Set up rule with verdict maps #
sudo nft add map inet filter action_map { type inet_service : verdict \; }
sudo nft add element inet filter action_map { { 22 }, accept \; }
sudo nft add element inet filter action_map { { 23 }, drop \; }
sudo nft add rule inet filter input tcp dport vmap @action_map

# Create rule that limits by connection rate to destination #
sudo nft add rule inet filter input ip daddr . tcp dport limit rate over 100/second burst 10 packets drop

# Use concatenations in sets #
sudo nft add set inet filter concat_set { type ipv4_addr . inet_service \; }
sudo nft add element inet filter concat_set { 192.168.1.100 . 22 }

# Create rules with expression evaluation #
sudo nft add rule inet filter input ip ttl < 64 log prefix "potential traceroute: " drop

# Set up rules with multiple match conditions #
sudo nft add rule inet filter input ip protocol tcp tcp dport 80 ip saddr != 10.0.0.0/8 accept

# Use named expressions for complex conditions #
sudo nft add rule inet filter input ip protocol tcp tcp flags syn tcp option maxseg size < 536 log prefix "MTU probe: " accept

# Create rules with packet rate limiting per IP #
sudo nft add rule inet filter input ip saddr meter ip_rate { ip saddr 512/second burst 256 packets } drop

# Set up rules with nested expressions #
sudo nft add rule inet filter input ip protocol tcp tcp dport 80 ip saddr != 127.0.0.0/8 counter packets 0 bytes 0 accept

```

## FAQ ##

### What Is The Difference Between Nftables And Iptables? ###

- `nftables` - Newer, more flexible framework with cleaner syntax, better performance, and advanced expression capabilities
- `iptables` - Older firewall system with more complex syntax and separate utilities for IPv4/IPv6

Nftables is the recommended modern replacement for iptables with better performance and maintainability.

### How Do I Create A Basic Firewall With Nftables? ###

```bash
# Create table and chains #
sudo nft add table inet filter
sudo nft add chain inet filter input { type filter hook input priority 0 \; policy drop \; }
sudo nft add chain inet filter forward { type filter hook forward priority 0 \; policy drop \; }
sudo nft add chain inet filter output { type filter hook output priority 0 \; policy accept \; }

# Add basic rules #
sudo nft add rule inet filter input iif "lo" accept
sudo nft add rule inet filter input ct state established,related accept
sudo nft add rule inet filter input tcp dport { 22, 80, 443 } accept
sudo nft add rule inet filter input icmp type echo-request accept

```

### How Do I Troubleshoot Nftables Rules? ###

Use verbose listing to examine rules:

```bash
# List rules with handles for deletion #
sudo nft -a list ruleset

# Check if rules are syntactically correct before applying #
nft -c -f ruleset_file.nft

# Monitor packet counters #
sudo nft list ruleset

```

### How Do I Save And Restore Nftables Rules? ###

Save rules:

```bash
sudo nft list ruleset > /etc/nftables.conf

```

Restore rules:

```bash
sudo nft -f /etc/nftables.conf

```

Or use the systemd service:

```bash
sudo systemctl enable nftables

```

### What Are Sets In Nftables And How Do I Use Them? ###

Sets are collections of elements that can be used in rules for efficient matching:

```bash
# Create a set #
sudo nft add set inet filter myset { type ipv4_addr \; }

# Add elements to set #
sudo nft add element inet filter myset { 192.168.1.100, 192.168.1.101 }

# Use set in a rule #
sudo nft add rule inet filter input ip saddr @myset accept

```

### How Do I Do Port Forwarding With Nftables? ###

For DNAT (port forwarding):

```bash
# Create NAT table #
sudo nft add table ip nat

# Add prerouting chain for DNAT #
sudo nft add chain ip nat prerouting { type nat hook prerouting priority -100 \; }

# Add forwarding rule #
sudo nft add rule ip nat prerouting tcp dport 8080 dnat to 192.168.1.100:80

```

For SNAT (masquerading):

```bash
# Add postrouting chain for SNAT #
sudo nft add chain ip nat postrouting { type nat hook postrouting priority 100 \; }

# Add masquerade rule #
sudo nft add rule ip nat postrouting oif eth0 masquerade

```
