# `tc` #

- **Purpose:** The `tc` (Traffic Control) command is used to manage and configure traffic control in the Linux kernel. It allows for sophisticated packet scheduling, shaping, policing, and classification to control network traffic flows. TC enables network administrators to implement Quality of Service (QoS) policies, bandwidth limiting, traffic prioritization, and network simulation for testing. It works by configuring various queueing disciplines (qdiscs), classes, and filters to control how packets are processed through network interfaces.
| - **Usage:** `tc [OPTIONS] [QDISC | CLASS | FILTER | ACTION | RULE | NEIGHBOR] [COMMAND] [ARGS...]` |

## Basic Usage ##

Display all traffic control rules:

```bash
tc qdisc show

```

Display traffic control for specific interface:

```bash
tc qdisc show dev eth0

```

Add a simple queueing discipline (pfifo_fast is default):

```bash
sudo tc qdisc add dev eth0 root pfifo_fast

```

Add a rate limiter (traffic shaping):

```bash
sudo tc qdisc add dev eth0 root tbf rate 1mbit burst 32kbbit latency 400ms

```

Add priority-based queueing:

```bash
sudo tc qdisc add dev eth0 root handle 1: prio

```

Add classful qdisc (Hierarchical Token Bucket):

```bash
sudo tc qdisc add dev eth0 root handle 1: htb default 30

```

Delete traffic control rules:

```bash
sudo tc qdisc del dev eth0 root

```

Show class information:

```bash
tc class show dev eth0

```

## Options ##

- `qdisc` — Queueing discipline operations
- `class` — Class-based qdisc operations
- `filter` — Traffic filtering operations
- `show` — Display current configuration
- `add` — Add a new element
- `del` — Delete an element
- `change` — Change an existing element
- `replace` — Replace an element (add if not present)
- `root` — Apply to root of device
- `parent` — Specify parent qdisc/class
- `handle` — Specify unique identifier for element

## Shortcuts ##

Common tc operations:

```bash
# Show all qdiscs #
tc qdisc show

# Show all classes #
tc class show

# Show all filters #
tc filter show

# Show specific interface qdiscs #
tc qdisc show dev eth0

# Add HTB (Hierarchical Token Bucket) qdisc #
sudo tc qdisc add dev eth0 root handle 1: htb default 10

# Add HTB class for guaranteed bandwidth #
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 5mbit ceil 10mbit

# Add leaf qdisc to class #
sudo tc qdisc add dev eth0 parent 1:1 handle 10: sfq

# Add filter to direct traffic to specific class #
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip dst 192.168.1.100/32 flowid 1:1

# Create class for high priority traffic #
sudo tc class add dev eth0 parent 1: classid 1:10 htb rate 8mbit prio 1

# Create class for normal priority traffic #
sudo tc class add dev eth0 parent 1: classid 1:20 htb rate 5mbit prio 2

# Create class for low priority traffic #
sudo tc class add dev eth0 parent 1: classid 1:30 htb rate 2mbit prio 3

# Add SFQ (Stochastic Fairness Queuing) to each class #
sudo tc qdisc add dev eth0 parent 1:10 handle 10: sfq
sudo tc qdisc add dev eth0 parent 1:20 handle 20: sfq
sudo tc qdisc add dev eth0 parent 1:30 handle 30: sfq

# Limit bandwidth for a specific subnet #
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip dst 192.168.2.0/24 flowid 1:20

# Limit bandwidth for specific port (for example, HTTP) #
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 2 u32 match ip dport 80 0xffff flowid 1:30

# Set up ingress qdisc for incoming traffic control #
sudo tc qdisc add dev eth0 handle ffff: ingress
sudo tc filter add dev eth0 parent ffff: protocol ip u32 match u32 0 0 police rate 10mbit burst 10k drop flowid :1

# Add CBQ (Class-Based Queuing) qdisc #
sudo tc qdisc add dev eth0 root handle 10: cbq avpkt 1000

# Policing traffic (limiting with dropping) #
sudo tc qdisc add dev eth0 root handle 1: htb
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 100kbit ceil 100kbit
sudo tc qdisc add dev eth0 parent 1:1 sfq
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip src 10.0.0.10/32 flowid 1:1

# Rate limiting with burst allowance #
sudo tc qdisc add dev eth0 root tbf rate 512kbit burst 32kbbit latency 400ms

# Setup for network simulation (delay, loss, and so on) #
sudo tc qdisc add dev eth0 root netem delay 100ms loss 0.1%

# Add delay variation (jitter) #
sudo tc qdisc add dev eth0 root netem delay 100ms 10ms distribution normal

# Add packet corruption #
sudo tc qdisc add dev eth0 root netem corrupt 0.1%

# Create multiple classes for different services #
sudo tc qdisc add dev eth0 root handle 1: htb default 30
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 10mbit
sudo tc class add dev eth0 parent 1:1 classid 1:10 htb rate 5mbit ceil 10mbit
sudo tc class add dev eth0 parent 1:1 classid 1:20 htb rate 3mbit ceil 8mbit
sudo tc class add dev eth0 parent 1:1 classid 1:30 htb rate 2mbit ceil 5mbit

# Add SFQ to leaf classes #
sudo tc qdisc add dev eth0 parent 1:10 handle 10: sfq
sudo tc qdisc add dev eth0 parent 1:20 handle 20: sfq
sudo tc qdisc add dev eth0 parent 1:30 handle 30: sfq

# Filter HTTP traffic to low priority #
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip protocol 6 0xff match ip dport 80 0xffff classid 1:30
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip protocol 6 0xff match ip dport 443 0xffff classid 1:30

# Filter VoIP traffic to high priority #
sudo tc filter add dev eth0 parent 1: protocol ip prio 2 u32 match ip dport 5060 0xffff classid 1:10  # SIP
sudo tc filter add dev eth0 parent 1: protocol ip prio 2 u32 match ip dport 10000:20000 0xffff classid 1:10  # RTP

# Filter SSH traffic to high priority #
sudo tc filter add dev eth0 parent 1: protocol ip prio 2 u32 match ip dport 22 0xffff classid 1:10

# Setup bandwidth limits per IP #
sudo tc filter add dev eth0 protocol ip parent 1:0 prio 1 u32 match ip src 192.168.1.100/32 flowid 1:10

# Remove all traffic control #
sudo tc qdisc del dev eth0 root

# Backup current tc configuration #
sudo tc qdisc show > tc_backup.conf

# Restore tc configuration from file #
# Use commands from backup file (tc doesn't have direct config file support) #

# Monitor traffic control statistics #
tc -s qdisc show dev eth0

# Detailed class statistics #
tc -s class show dev eth0

# Show filter statistics #
tc -s filter show dev eth0

# Setup for gaming (low latency) #
sudo tc qdisc add dev eth0 root handle 1: htb
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 100mbit ceil 100mbit
sudo tc class add dev eth0 parent 1:1 classid 1:10 htb rate 70mbit ceil 100mbit prio 1
sudo tc class add dev eth0 parent 1:1 classid 1:20 htb rate 20mbit ceil 20mbit prio 2
sudo tc class add dev eth0 parent 1:1 classid 1:30 htb rate 10mbit ceil 10mbit prio 3
sudo tc qdisc add dev eth0 parent 1:10 handle 10: sfq
sudo tc qdisc add dev eth0 parent 1:20 handle 20: sfq
sudo tc qdisc add dev eth0 parent 1:30 handle 30: sfq

# Prioritize DNS traffic #
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip dport 53 0xffff classid 1:10

# Prioritize NTP traffic #
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip dport 123 0xffff classid 1:10

# Setup for video conferencing #
sudo tc filter add dev eth0 parent 1: protocol ip prio 2 u32 match ip dport 8000:9000 0xffff classid 1:10

# Traffic shaping based on DSCP markings #
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip dsfield 0x28 0xfc flowid 1:10  # AF11 (priority traffic)

# Random early detection for congestion avoidance #
sudo tc qdisc add dev eth0 root red limit 400000 avpkt 1500 max 40000 probability 0.02 ecn

# Rate limit with token bucket filter #
sudo tc qdisc add dev eth0 root handle 1:0 cbq bandwidth 10Mbit avpkt 1000 cell 8

# Add ATM-aware qdisc for specific applications #
sudo tc qdisc add dev eth0 root atm 50000 1000 1000

# Setup for bandwidth testing #
sudo tc qdisc add dev eth0 root netem rate 1mbit

# Add network delay for testing #
sudo tc qdisc add dev eth0 root netem delay 200ms

# Combine delay and packet loss for realistic network simulation #
sudo tc qdisc add dev eth0 root netem delay 50ms loss 0.05% duplicate 0.01%

# Prioritize interactive traffic #
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip tos 0x10 0xff classid 1:10  # low delay

# Traffic control for specific protocols (TCP, UDP, ICMP) #
sudo tc filter add dev eth0 parent 1: protocol ip prio 2 u32 match ip protocol 6 0xff classid 1:20  # TCP
sudo tc filter add dev eth0 parent 1: protocol ip prio 2 u32 match ip protocol 17 0xff classid 1:30  # UDP

# Rate limiting for DoS protection #
sudo tc qdisc add dev eth0 root handle 1:0 htb default 30
sudo tc class add dev eth0 parent 1: classid 1:1 htb rate 10mbit
sudo tc class add dev eth0 parent 1:1 classid 1:10 htb rate 1mbit ceil 2mbit burst 15k
sudo tc qdisc add dev eth0 parent 1:10 handle 10: sfq perturb 10
sudo tc filter add dev eth0 parent 1: protocol ip prio 1 u32 match ip src 0.0.0.0/0 police rate 2mbit burst 15k drop flowid 1:10

```

## FAQ ##

### What Is Traffic Control (TC) Used For? ###

Traffic control is used for:

- Bandwidth management and rate limiting
- Quality of Service (QoS) to prioritize important traffic
- Network simulation for testing (adding delay, loss, jitter)
- Load balancing across network paths
- Preventing network congestion
- Ensuring fair usage of network resources

### What Are The Main Components Of TC? ###

- **QDisc (Queueing Discipline)** - Defines how packets are queued and processed
- **Classes** - Subdivisions of qdiscs that allow hierarchical traffic control
- **Filters** - Rules to classify packets into different classes/qdiscs
- **Handles** - Unique identifiers for each element in the hierarchy

### How Do I Reset All Traffic Control Rules? ###

To remove all traffic control rules from an interface:

```bash
sudo tc qdisc del dev eth0 root

```

To clear all interfaces:

```bash
sudo tc qdisc del dev interface_name root  # for each interface

```

### What Is The Difference Between HTB And CBQ? ###

- **HTB (Hierarchical Token Bucket)** - Modern, efficient, uses tokens for rate enforcement
- **CBQ (Class-Based Queuing)** - Older, more CPU-intensive, uses bandwidth averaging

HTB is generally preferred over CBQ for new implementations.

### How Do I Monitor Traffic Control Statistics? ###

Use the `-s` flag to show statistics:

```bash
tc -s qdisc show dev eth0
tc -s class show dev eth0
tc -s filter show dev eth0

```

This provides detailed statistics about packets processed, bytes transmitted, drops, and so on

### Can TC Control Both Incoming And Outgoing Traffic? ###

- **Outgoing traffic** - Controlled with standard qdiscs on the egress queue
- **Incoming traffic** - More complex, typically requires ingress qdisc or IFB (Intermediate Functional Block) to redirect incoming traffic to virtual devices for shaping

Example for ingress shaping:

```bash
tc qdisc add dev eth0 handle ffff: ingress
tc qdisc add dev ifb0 root handle 1: htb
tc filter add dev eth0 parent ffff: protocol all u32 match u32 0 0 action mirred egress redirect dev ifb0

```
