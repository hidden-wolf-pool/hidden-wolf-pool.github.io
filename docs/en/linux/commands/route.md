# `route` #

- **Purpose:** The `route` command is used to view and manipulate the IP routing table in Unix-like operating systems. It allows system administrators to add, delete, and view routes that determine how network packets are forwarded from the local machine to their destinations. While often replaced by the more modern `ip route` command from the iproute2 package, `route` is still widely available and used in many systems.
- **Usage:** `route [OPTIONS] [ADD|DEL] TARGET [PARAMETERS...]`

## Basic Usage ##

Display the current routing table:

```bash
route

```

Display the routing table with numerical addresses (no hostname resolution):

```bash
route -n

```

Add a default gateway:

```bash
sudo route add default gw 192.168.1.1

```

Add a route to a specific host:

```bash
sudo route add -host 192.168.1.100 dev eth0

```

Add a route to a specific network:

```bash
sudo route add -net 10.0.0.0/8 gw 192.168.1.1

```

Delete a route:

```bash
sudo route del -net 10.0.0.0/8

```

Add a route with specific metric:

```bash
sudo route add -net 172.16.0.0/16 gw 192.168.1.1 metric 1

```

## Options ##

- `-n` — Show numerical addresses instead of resolving hostnames
- `-A` — Select address family (inet for IPv4, inet6 for IPv6)
- `-e` — Display the routing table in the same format as `netstat -r`
- `-C` — Manipulate the routing cache instead of the forwarding tables
- `add` — Add a new route to the routing table
- `del` — Remove a route from the routing table

## Shortcuts ##

Common route operations:

```bash
# Show routing table with kernel info #
route -n -e

# Add a temporary route (not saved across reboots) #
sudo route add -net 10.1.0.0/16 gw 192.168.1.1

# Delete default route #
sudo route del default

# Add route to specific interface #
sudo route add -net 192.168.2.0 netmask 255.255.255.0 dev eth1

# Show only dynamic/kernel routes #
route -C

# Add host route via specific interface #
sudo route add -host 192.168.1.50 dev eth0

```

## FAQ ##

### How Do I Make Route Changes Persistent? ###

Routes added with `route` are typically temporary and lost after reboot. To make changes persistent:

- On Debian/Ubuntu: Add to `/etc/network/interfaces` or use netplan
- On Red Hat/CentOS: Add to `/etc/sysconfig/network-scripts/route-interface`
- On systemd systems: Use network configuration files in `/etc/systemd/network/`

### What Is the Difference Between Route and Ip Route? ###

- `route` - Older command from net-tools, simpler syntax
- `ip route` - Part of modern iproute2 package, more powerful and versatile
- `ip route` is the recommended modern replacement for `route`

### What Does Each Column in the Route Output Mean? ###

When viewing the routing table, columns typically represent:

- Destination - Target network/IP address
- Gateway - Next hop address
- Genmask - Network mask for the destination
- Flags - Route characteristics (U=up, G=gateway, H=host, D=dynamic, and so on)
- Metric - Route preference value
- Ref - Reference count
- Use - Usage counter
- Iface - Outgoing network interface

### How Do I Troubleshoot Routing Issues? ###

Check the routing table with:

```bash
route -n

```

Make sure the correct routes exist for your network topology and that the default gateway is properly configured.

### What Are Common Route Flags? ###

Common flags in the routing table include:

- U (Up) - Route is active
- G (Gateway) - Route uses a gateway
- H (Host) - Route is for a single host
- D (Dynamic) - Dynamically created by a routing protocol
- M (Modified) - Modified by a routing protocol
