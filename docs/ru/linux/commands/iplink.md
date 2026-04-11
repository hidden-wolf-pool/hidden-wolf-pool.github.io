# `ip link` #

- **Purpose:** The `ip link` command is a sub-command of the `ip` command used to manage network interfaces in Linux. It allows users to view, configure, enable, disable, and modify properties of network interfaces. This includes physical interfaces like ethernet adapters, virtual interfaces like bridges and tunnels, and various other network interface types. The command is essential for network configuration, troubleshooting, and management in modern Linux systems.
- **Usage:** `ip link [OPTIONS] [COMMAND] [ARGUMENTS...]`

## Basic Usage ##

Show all network interfaces:

```bash
ip link show

```

Show specific network interface:

```bash
ip link show eth0

```

Enable a network interface:

```bash
sudo ip link set eth0 up

```

Disable a network interface:

```bash
sudo ip link set eth0 down

```

Set interface MTU (Maximum Transmission Unit):

```bash
sudo ip link set eth0 mtu 1500

```

Set interface address manually (though this is typically done with `ip addr`):

```bash
sudo ip link set eth0 address aa:bb:cc:dd:ee:ff

```

Show interfaces with brief output:

```bash
ip -br link show

```

Show only up interfaces:

```bash
ip link show up

```

Show only down interfaces:

```bash
ip link show down

```

## Options ##

- `-s` — Provide statistical information (show packet counts, and so on)
- `-d` — Provide detailed information about the interface
- `-br` — Provide brief output format
- `-c` — Provide color output
- `-j` — Provide output in JSON format
- `-4` — Show only IPv4 addresses for the interface
- `-6` — Show only IPv6 addresses for the interface
- `-0` — Show only link layer information
- `-n` — Do not resolve hostnames

## Shortcuts ##

Common ip link operations:

```bash
# Show interfaces with statistics #
ip -s link show

# Show interfaces with detailed information #
ip -d link show

# Show interfaces in JSON format #
ip -j link show

# Show only active interfaces #
ip link show up

# Show only inactive interfaces #
ip link show down

# Bring interface up/down in one command #
sudo ip link set dev eth0 up
sudo ip link set dev eth0 down

# Set MTU for interface #
sudo ip link set dev eth0 mtu 9000  # Jumbo frames

# Set interface name #
sudo ip link set eth0 name newname

# Show brief interface status (very concise) #
ip -br link

# Show brief status with up interfaces only #
ip -br -c link show up

# Reset interface statistics #
sudo ip -s link show eth0  # View before
sudo ip link set eth0 down && sudo ip link set eth0 up  # Reset stats
sudo ip -s link show eth0  # View after

# Create virtual interface (tunnel) #
sudo ip link add tun0 type gretap remote 192.168.1.100 local 192.168.1.1
sudo ip link set tun0 up

# Create bridge interface #
sudo ip link add br0 type bridge
sudo ip link set br0 up

# Add interface to bridge #
sudo ip link set eth1 master br0

# Remove interface from bridge #
sudo ip link set eth1 nomaster

# Set physical interface to promiscuous mode #
sudo ip link set eth0 promisc on

# Disable promiscuous mode #
sudo ip link set eth0 promisc off

# Add virtual ethernet pair (for container bridging) #
sudo ip link add veth0 type veth peer name veth1
sudo ip link set veth0 up
sudo ip link set veth1 up

# Set interface to NOARP mode #
sudo ip link set eth0 arp off

# Enable ARP for interface #
sudo ip link set eth0 arp on

# Change interface MAC address #
sudo ip link set eth0 address 00:11:22:33:44:55

# Show interface with specific index #
ip link show dev eth0

# Get interface index #
| ip link show eth0 | head -1 | cut -d: -f1 |

# Create VLAN interface #
sudo ip link add link eth0 name eth0.10 type vlan id 10
sudo ip link set eth0.10 up

# Delete interface #
sudo ip link delete eth0.10

# Create dummy interface #
sudo ip link add dummy0 type dummy
sudo ip link set dummy0 up

# Show specific interface with statistics #
ip -s link show eth0

# Set interface queue transmit length #
sudo ip link set dev eth0 txqueuelen 1000

# Show interfaces including LOOPBACK #
ip link show type loopback

# Create VRF (Virtual Routing and Forwarding) #
sudo ip link add test-vrf type vrf table 1000
sudo ip link set test-vrf up

# Create macvlan interface #
sudo ip link add link eth0 macvlan0 type macvlan
sudo ip link set macvlan0 up

# Create macvtap interface #
sudo ip link add link eth0 macvtap0 type macvtap
sudo ip link set macvtap0 up

# Show interfaces with custom colors #
ip -c link show

# Get interface operstate (UP/DOWN) #
ip -br link show | grep eth0

# Get interface speed and duplex #
sudo ethtool eth0  # Not ip link, but complementary

# Check interface carrier status #
cat /sys/class/net/eth0/carrier  # Not ip link, but related

# Set interface XDP (eXpress Data Path) flags #
# Requires additional setup: ip link set dev eth0 xdp obj program.o sec section #

# Create IPoIB (IP over InfiniBand) interface #
# Requires infiniband support: ip link add ib0 type ipoib #

# Show bonding interfaces #
cat /proc/net/bonding/bond0  # Complementary to ip link

# Create vxlan interface #
sudo ip link add vxlan0 type vxlan id 42 group 239.1.1.1 dstport 4789
sudo ip link set vxlan0 up

# Create wireguard interface #
sudo ip link add wg0 type wireguard
sudo ip link set wg0 up

# Set interface to all-multicast mode #
sudo ip link set eth0 allmulticast on

# Create and configure a bridge with interfaces #
sudo ip link add br-ext type bridge
sudo ip link set br-ext up
sudo ip link set eth1 master br-ext
sudo ip link set eth2 master br-ext

# Configure interface for high performance #
sudo ip link set eth0 txqueuelen 5000
sudo ip link set eth0 mtu 9000  # Jumbo frames

# Show interfaces with JSON output for scripting #
ip -j link show

# Get specific interface in JSON format #
ip -j link show eth0

# Monitor interface changes in real-time #
sudo ip monitor link

# Show interfaces with custom formatting #
ip -br -c link show  # Brief + colored

# Create an interface with custom name #
sudo ip link add custom-intf type dummy
sudo ip link set custom-intf up

# Set multiple interface properties #
sudo ip link set eth0 promisc on allmulticast on up

# Check which interfaces support features #
cat /sys/class/net/eth0/features  # Complementary to ip link

# Get interface hardware information #
ethtool -i eth0  # Complementary to ip link

# Create and configure multiple interfaces #
for i in {1..5}; do
  sudo ip link add dummy$i type dummy
  sudo ip link set dummy$i up
done

# Check interface for errors #
| ip -s link show | grep -E "errors | dropped | overrun | carrier | collisions" |

# Reset interface MAC to permanent address #
sudo ip link set eth0 address $(ethtool -P eth0 | awk '{print $3}')

# Create team interface #
sudo ip link add team0 type team
sudo ip link set team0 up

# Set interface name based on MAC #
# This is done via udev rules, not ip link directly #

# Create and configure veth pair for container networking #
sudo ip link add name ctr-veth0 type veth peer name host-veth0
sudo ip link set ctr-veth0 up
sudo ip link set host-veth0 up

# Create VLAN-aware bridge #
sudo ip link add br-vlan type bridge vlan_filtering 1
sudo ip link set br-vlan up

# Check interface for link state changes #
ip -s link show eth0  # Look at the "lower up" status

# Set interface group #
sudo ip link set eth0 group default

# Create geneve tunnel #
sudo ip link add geneve0 type geneve id 100 remote 192.168.1.100
sudo ip link set geneve0 up

# Create gtp tunnel #
sudo ip link add gtp0 type gtp role ms gtp0 18 2
sudo ip link set gtp0 up

# Get interface index number only #
| ip link show eth0 | head -1 | awk '{print $1}' | sed 's/://' |

# Monitor multiple interfaces continuously #
sudo ip monitor link eth0 eth1 eth2

# Show interfaces with timestamp #
ip -s -ts link show

# Create and configure low latency interface #
sudo ip link set eth0 txqueuelen 50
sudo ip link set eth0 up

# Get information about interface capabilities #
ethtool -k eth0  # Complementary to ip link

# Create IP-in-IP tunnel #
sudo ip link add tun-ipip type ipip remote 192.168.1.100 local 192.168.1.1 mode any
sudo ip link set tun-ipip up

# Create sit tunnel (IPv6 over IPv4) #
sudo ip link add tun-sit type sit remote 192.168.1.100 local 192.168.1.1
sudo ip link set tun-sit up

# Set interface as protodown (protocol down) #
sudo ip link set eth0 protodown on

# Create and configure hsr interface #
# Requires HSR support: sudo ip link add hsr0 type hsr slave1 eth1 slave2 eth2 #

# Create caif interface #
# Requires CAIF support: sudo ip link add caif0 type caif #

# Show interface queuing discipline #
tc qdisc show dev eth0  # Complementary to ip link

```

## FAQ ##

### What Is The Difference Between Ip Link And Ifconfig? ###

- `ip link` - Modern command from iproute2 package, more comprehensive, better structured
- `ifconfig` - Legacy command, gradually being phased out, less functionality

The `ip` command is the recommended tool for modern Linux systems.

### How Do I Bring An Interface Up Or Down? ###

```bash
# Bring interface up #
sudo ip link set eth0 up

# Bring interface down #
sudo ip link set eth0 down

```

### How Do I Create A Virtual Network Interface? ###

```bash
# Create a dummy interface #
sudo ip link add dummy0 type dummy
sudo ip link set dummy0 up

# Create a bridge interface #
sudo ip link add br0 type bridge
sudo ip link set br0 up

```

### How Do I Set The MTU For An Interface? ###

```bash
sudo ip link set dev eth0 mtu 9000  # For jumbo frames

```

### Can I Change The MAC Address With Ip Link? ###

Yes:

```bash
sudo ip link set eth0 address aa:bb:cc:dd:ee:ff

```

### How Do I Create A VLAN Interface? ###

```bash
sudo ip link add link eth0 name eth0.10 type vlan id 10
sudo ip link set eth0.10 up

```
