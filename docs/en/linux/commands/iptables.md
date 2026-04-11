# `iptables` #

- **Purpose:** The `iptables` command is a user-space utility program that allows system administrators to configure the IP packet filter rules of the Linux kernel firewall, implemented as different tables containing chains of rules for handling network traffic. It's used to set up, maintain, and inspect the tables of IPv4 packet filter rules in the Linux kernel, controlling incoming, outgoing, and forwarded packets based on defined policies.
- **Usage:** `iptables [-t TABLE] COMMAND [MATCHES...] [TARGETS...]`

## Basic Usage ##

Show current `iptables` rules:

```bash
sudo iptables -L
```

Show rules with numeric output:

```bash
sudo iptables -L -n
```

Show iptables rules with line numbers:

```bash
sudo iptables -L -n --line-numbers
```

Allow incoming connections on a specific port:

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

Block incoming connections from a specific IP:

```bash
sudo iptables -A INPUT -s 192.168.1.100 -j DROP
```

Allow outbound traffic:

```bash
sudo iptables -A OUTPUT -j ACCEPT
```

Set default policy to DROP:

```bash
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT
```

Insert a rule at specific position:

```bash
sudo iptables -I INPUT 2 -s 10.0.0.0/8 -j DROP
```

Save current rules:

```bash
sudo iptables-save > /tmp/rules.backup
```

Restore rules from file:

```bash
sudo iptables-restore < /tmp/rules.backup
```

Block all incoming traffic on port 80:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j DROP
```

Allow loopback traffic:

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A OUTPUT -o lo -j ACCEPT
```

Allow established connections:

```bash
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

Log dropped packets:

```bash
sudo iptables -A INPUT -j LOG --log-prefix "IPTables-Dropped: "
```

Limit connection rate:

```bash
sudo iptables -A INPUT -p tcp --dport 22 -m limit --limit 3/min -j ACCEPT
```

Block all traffic from specific subnet:

```bash
sudo iptables -A INPUT -s 192.168.1.0/24 -j REJECT
```

Forward port to another port:

```bash
sudo iptables -t nat -A PREROUTING -p tcp --dport 8080 -j REDIRECT --to-port 80
```

## Options ##

- `-A` — Append rule to chain.
- `-I` — Insert rule in chain (at specified position).
- `-D` — Delete rule from chain.
- `-R` — Replace rule in chain.
- `-L` — List rules in chain.
- `-F` — Flush rules in chain (delete all).
- `-P` — Policy for chain default rule.
- `-t` — Specify table (filter, nat, mangle, raw).
- `-s` — Source address.
- `-d` — Destination address.
- `-j` — Jump target (action to take).
- `-p` — Protocol (`tcp`, `udp`, `icmp`, and so on).

## FAQ ##

### What Are The Main `iptables` Tables? ###

- `filter` — Default table for packet filtering (`INPUT`, `FORWARD`, `OUTPUT` chains)
- `nat` — Network Address Translation (`PREROUTING`, `POSTROUTING`, `OUTPUT` chains)
- `mangle` — Packet alteration (`PREROUTING`, `INPUT`, `FORWARD`, `OUTPUT`, `POSTROUTING`)
- `raw` — Connection tracking exceptions (`PREROUTING`, `OUTPUT` chains).

### How Do I Make Changes Persistent? ###

`iptables` rules are lost after reboot unless saved.

On Debian/Ubuntu:

```bash
sudo iptables-save > /etc/iptables/rules.v4
```

Or use the `iptables-persistent` package.

On Red Hat / CentOS:

```bash
sudo service iptables save
```

### What Is The Difference Between `ACCEPT`, `DROP`, And `REJECT`? ###

- `ACCEPT` - Allow the packet to continue processing.
- `DROP` - Silently discard the packet.
- `REJECT` - Send an error message back to sender and discard packet.

### How Do I Block An IP Address? ###

Block a specific IP:

```bash
sudo iptables -A INPUT -s 192.168.1.100 -j DROP
```

Block a subnet:

```bash
sudo iptables -A INPUT -s 192.168.1.0/24 -j DROP
```

### How Do I Temporarily Disable `iptables`? ###

Flush all rules (dangerous!):

```bash
sudo iptables -F
```

Or set default policies to `ACCEPT`:

```bash
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
```

Always ensure you can regain access before making changes.

### How Do I Protect Against Common Attacks? ###

Prevent SYN flood attacks:

```bash
sudo iptables -A INPUT -p tcp --syn -m limit --limit 1/s --limit-burst 3 -j ACCEPT
```

Block port scanning:

```bash
sudo iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
sudo iptables -A INPUT -p tcp --tcp-flags ALL ALL -j DROP
```

Block null packets:

```bash
sudo iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
```

Block XMAS packets:

```bash
sudo iptables -A INPUT -p tcp --tcp-flags ALL FIN,PSH,URG -j DROP
```

Drop invalid packets:

```bash
sudo iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
```

Rate limit ICMP (prevent ping flood):

```bash
sudo iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/s --limit-burst 4 -j ACCEPT
sudo iptables -A INPUT -p icmp --icmp-type echo-request -j DROP
```

## Common DevOps Scenarios ##

### Kubernetes Node Firewall ###

Allow kubelet API:

```bash
sudo iptables -A INPUT -p tcp --dport 10250 -j ACCEPT
```

Allow NodePort range:

```bash
sudo iptables -A INPUT -p tcp --dport 30000:32767 -j ACCEPT
```

Allow Calico/Flannel overlay network:

```bash
sudo iptables -A INPUT -i calico+ -j ACCEPT
sudo iptables -A INPUT -i flannel+ -j ACCEPT
```

Allow etcd communication:

```bash
sudo iptables -A INPUT -p tcp --dport 2379:2380 -j ACCEPT
```

### Docker Host Firewall ###

Allow Docker bridge network:

```bash
sudo iptables -A INPUT -i docker0 -j ACCEPT
```

Allow specific container ports:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

Block container access to host metadata (AWS):

```bash
sudo iptables -I DOCKER-USER -d 169.254.169.254 -j DROP
```

### Load Balancer Health Checks ###

Allow health check probes from load balancer:

```bash
sudo iptables -A INPUT -p tcp --dport 8080 -s 10.0.0.0/8 -j ACCEPT
```

Allow HAProxy stats page:

```bash
sudo iptables -A INPUT -p tcp --dport 8404 -s 192.168.1.0/24 -j ACCEPT
```

### Database Server Protection ###

Allow MySQL only from app servers:

```bash
sudo iptables -A INPUT -p tcp --dport 3306 -s 10.0.1.0/24 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 3306 -j DROP
```

Allow PostgreSQL with SSL only:

```bash
sudo iptables -A INPUT -p tcp --dport 5432 -s 10.0.2.0/24 -j ACCEPT
```

Allow Redis from specific subnet:

```bash
sudo iptables -A INPUT -p tcp --dport 6379 -s 10.0.3.0/24 -j ACCEPT
```

### Web Server with Rate Limiting ###

Limit new HTTP connections per IP:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 50 -j DROP
sudo iptables -A INPUT -p tcp --dport 443 -m connlimit --connlimit-above 50 -j DROP
```

Protect against slowloris attacks:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 30/min --limit-burst 50 -j ACCEPT
```

Allow established connections first:

```bash
sudo iptables -I INPUT 1 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

### NAT and Port Forwarding ###

Enable IP forwarding:

```bash
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
```

Forward port 80 to internal server:

```bash
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.10:8080
sudo iptables -t nat -A POSTROUTING -j MASQUERADE
```

One-to-one NAT:

```bash
sudo iptables -t nat -A PREROUTING -d 203.0.113.1 -j DNAT --to-destination 192.168.1.20
sudo iptables -t nat -A POSTROUTING -s 192.168.1.20 -j SNAT --to-source 203.0.113.1
```

Masquerade for outbound traffic:

```bash
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

### GeoIP Blocking ###

Requires `xt_geoip` Module.

Block traffic from specific countries:

```bash
sudo iptables -A INPUT -m geoip --src-cc CN,RU,KP -j DROP
```

Allow only from specific countries:

```bash
sudo iptables -A INPUT -m geoip --src-cc US,CA,GB,DE -j ACCEPT
```

## Troubleshooting Commands ##

Count packets and bytes per rule:

```bash
sudo iptables -L -v -n
```

Show rule with exact counters:

```bash
sudo iptables -L -v -x -n
```

Check specific chain statistics:

```bash
sudo iptables -L INPUT -v -n
```

View NAT table rules:

```bash
sudo iptables -t nat -L -n -v
```

View mangle table:

```bash
sudo iptables -t mangle -L -n -v
```

Show raw connection tracking table:

```bash
sudo conntrack -L
```

Count connections per state:

```bash
sudo conntrack -L | awk '{print $4}' | sort | uniq -c
```

Delete connection tracking entry:

```bash
sudo conntrack -D -s 192.168.1.100
```

Monitor rule changes in real-time:

```bash
sudo watch -n 1 'iptables -L -n -v'
```

Test if port is reachable:

```bash
nc -zv <HOST> <PORT>
```

Trace packet through rules (use LOG target):

```bash
sudo iptables -I INPUT 1 -j LOG --log-prefix "TRACE: " --log-level 4
```

## Best Practices ##

### Always Allow SSH Before Enabling Restrictive Policies ###

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

### Use a Script with Rollback Capability ###

```bash
# Save current rules before changes #
sudo iptables-save > /tmp/iptables.backup.$(date +%Y%m%d-%H%M%S)

# Quick rollback #
sudo iptables-restore < /tmp/iptables.backup.*
```

### Order Matters - Most Specific Rules First ###

- Place frequently matched rules at the top of chains.
- Use `-I` to insert at specific positions.

### Use Connection Tracking for Stateful Filtering ###

```bash
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

### Log Before Dropping for Debugging ###

```bash
sudo iptables -A INPUT -j LOG --log-prefix "DROPPED: " --log-level 4
sudo iptables -A INPUT -j DROP
```

### Limit Log Spam with Rate Limiting ###

```bash
sudo iptables -A INPUT -m limit --limit 5/min -j LOG --log-prefix "LIMITED: "
```

### Document Your Rules ###

Add comments to rules (`iptables` >= 1.4.20) :

```bash
sudo iptables -A INPUT -p tcp --dport 22 -m comment --comment "SSH Access" -j ACCEPT
```

### Test in a screen/tmux Session ###

- Run firewall changes in a persistent session.
- Set up automatic rollback if connection is lost.

## Complete Production Firewall ##

Production-ready `iptables` setup for web server.

Flush existing rules:

```bash
iptables -F
iptables -X
iptables -t nat -F
iptables -t nat -X
iptables -t mangle -F
iptables -t mangle -X
```

Default policies:

```bash
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT
```

Allow loopback:

```bash
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT
```

Allow established connections:

```bash
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

Drop invalid packets:

```bash
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
```

Allow SSH (with rate limiting):

```bash
iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m limit --limit 3/min --limit-burst 3 -j ACCEPT
```

Allow HTTP / HTTPS:

```bash
iptables -A INPUT -p tcp --dport 80 -m conntrack --ctstate NEW -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -m conntrack --ctstate NEW -j ACCEPT
```

Allow ICMP (ping) with rate limiting:

```bash
iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/s --limit-burst 4 -j ACCEPT
```

Log and drop everything else:

```bash
iptables -A INPUT -m limit --limit 5/min -j LOG --log-prefix "IPTables-Dropped: " --log-level 4
iptables -A INPUT -j DROP
```

Save rules:

```bash
iptables-save > /etc/iptables/rules.v4
```

Allow established connections:

```bash
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

Drop invalid packets:

```bash
iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
```

Allow SSH (with rate limiting):

```bash
iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m limit --limit 3/min --limit-burst 3 -j ACCEPT
```

Allow HTTP / HTTPS:

```bash
iptables -A INPUT -p tcp --dport 80 -m conntrack --ctstate NEW -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -m conntrack --ctstate NEW -j ACCEPT
```

Allow ICMP (ping) with rate limiting:

```bash
iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/s --limit-burst 4 -j ACCEPT
```

Log and drop everything else:

```bash
iptables -A INPUT -m limit --limit 5/min -j LOG --log-prefix "IPTables-Dropped: " --log-level 4
iptables -A INPUT -j DROP
```

Save rules:

```bash
iptables-save > /etc/iptables/rules.v4
```
