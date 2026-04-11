# `ip` #

- **Purpose:** The `ip` command is a powerful network utility in Linux used for managing and configuring network interfaces, routing, and tunnels. It's the modern replacement for legacy tools like `ifconfig`, `route`, and `arp`. The command can display and manipulate routing, network devices, policy routing, and tunnels. It provides a unified interface for various networking tasks and is essential for network administration.
- **Usage:** `ip [OPTIONS] OBJECT { COMMAND | help }`

## Basic Usage ##

Show all network interfaces:

```bash
ip addr show

```

Show specific network interface:

```bash
ip addr show eth0

```

Bring up a network interface:

```bash
sudo ip link set eth0 up

```

Take down a network interface:

```bash
sudo ip link set eth0 down

```

Add IP address to an interface:

```bash
sudo ip addr add 192.168.1.100/24 dev eth0

```

Remove IP address from an interface:

```bash
sudo ip addr del 192.168.1.100/24 dev eth0

```

Show routing table:

```bash
ip route show

```

Add a route:

```bash
sudo ip route add 10.0.0.0/8 via 192.168.1.1

```

Show neighbor (ARP) table:

```bash
ip neigh show

```

## Options ##

- `-V` — Print the version of the command
- `-s` — Give more information
- `-r` — Use DNS to resolve addresses
- `-f` — Force the command to use specified address family (inet, inet6, bridge, netdev)
- `-o` — Output more briefly for easier parsing
- `-n` — Do not resolve hostnames
- `--statistics` — Show extended statistics

## Shortcuts ##

Common ip operations:

```bash
# Show network interfaces (like old 'ifconfig') #
ip link show

# Show IP addresses for all interfaces #
ip addr show

# Show only active interfaces #
ip link show up

# Set interface MTU #
sudo ip link set dev eth0 mtu 1450

# Show routing information #
ip route show

# Add default route #
sudo ip route add default via 192.168.1.1

# Delete route #
sudo ip route del default via 192.168.1.1

# Add static route #
sudo ip route add 10.0.0.0/16 via 192.168.1.1

# Flush ARP cache #
sudo ip neigh flush all

# Show network statistics #
ip -s link show

# Monitor network changes in real-time #
sudo ip monitor

# Show VLAN information #
ip link show type vlan

# Create a tunnel #
sudo ip tunnel add tun0 mode gre remote 10.0.0.1 local 10.0.0.2

# Show multicast information #
ip maddr show

# Show network namespaces #
ip netns list

```

## FAQ ##

### What Is The Difference Between Ip And Ifconfig? ###

- `ip` - Modern, powerful, actively maintained, part of iproute2 package
- `ifconfig` - Legacy command, less functionality, largely deprecated

The `ip` command is recommended as it's actively developed and more feature-complete.

### How Do I Show Only IPv4 Addresses? ###

Use the `-4` flag:

```bash
ip -4 addr show

```

### How Do I Show Only IPv6 Addresses? ###

Use the `-6` flag:

```bash
ip -6 addr show

```

### How Do I Make IP Configuration Permanent? ###

The `ip` command makes temporary changes. To make changes permanent, you need to use distribution-specific network configuration files:

- On Debian/Ubuntu: `/etc/network/interfaces` or Netplan
- On Red Hat/CentOS: `/etc/sysconfig/network-scripts/`
- Using NetworkManager: `nmcli` or `nmtui`

### How Do I Show Interface Statistics? ###

Use the `-s` flag (statistics):

```bash
ip -s link show
ip -s link show eth0

```

### How Do I Monitor Network Changes In Real-Time? ###

Use the `monitor` command:

```bash
sudo ip monitor  # Monitor all changes
sudo ip monitor route  # Monitor route changes only
sudo ip monitor addr  # Monitor address changes only

```
