# `ifconfig` #

- **Purpose:** The `ifconfig` (interface configuration) command is used to configure, manage, and display information about network interfaces in Unix-like operating systems. It allows users to view network interface parameters, assign IP addresses, enable/disable interfaces, and monitor network traffic. Note: On newer Linux distributions, `ip` command from the `iproute2` package is increasingly preferred over `ifconfig`.
- **Usage:** `ifconfig [INTERFACE] [OPTIONS] [ADDRESS]`

## Basic Usage ##

Display all network interfaces:

```bash
ifconfig

```

Display specific network interface:

```bash
ifconfig eth0

```

Enable a network interface:

```bash
sudo ifconfig eth0 up

```

Disable a network interface:

```bash
sudo ifconfig eth0 down

```

Assign an IP address to an interface:

```bash
sudo ifconfig eth0 192.168.1.100

```

Set netmask for an interface:

```bash
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0

```

Configure interface with broadcast address:

```bash
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0 broadcast 192.168.1.255

```

## Options ##

- `up` — Activate the specified interface
- `down` — Deactivate the specified interface
- `addr` — Set IP address for the interface
- `netmask` — Set network mask for the interface
- `broadcast` — Set broadcast address for the interface
- `hw` — Set hardware address (MAC address) for the interface
- `mtu` — Set Maximum Transmission Unit for the interface
- `-a` — Display all interfaces (including inactive ones)

## Shortcuts ##

Common ifconfig operations:

```bash
# Show all interfaces including inactive ones #
ifconfig -a

# Assign IP and netmask in one command #
sudo ifconfig eth0 10.0.0.5 netmask 255.255.255.0

# Configure multiple interfaces #
sudo ifconfig eth0 192.168.1.5 netmask 255.255.255.0 up
sudo ifconfig wlan0 10.0.1.10 netmask 255.255.255.0 up

# Change MAC address (requires interface to be down first) #
sudo ifconfig eth0 down
sudo ifconfig eth0 hw ether 00:11:22:33:44:55
sudo ifconfig eth0 up

# View interface statistics #
ifconfig -s

# Alias an interface #
sudo ifconfig eth0:1 192.168.1.101 netmask 255.255.255.0 up

```

## FAQ ##

### What's the Difference Between Ifconfig and Ip Commands? ###

- `ifconfig` - Older command, part of net-tools package, gradually being phased out
- `ip` - Modern command, part of iproute2 package, more feature-rich and consistently maintained
- `ip` has subcommands like `ip addr`, `ip link`, `ip route` that replace different aspects of `ifconfig`

### How Do I Permanently Configure Network Settings With Ifconfig? ###

The `ifconfig` command only configures interfaces temporarily until reboot. For permanent changes:

- On Debian/Ubuntu: Edit `/etc/network/interfaces` or use Netplan
- On Red Hat/CentOS: Edit `/etc/sysconfig/network-scripts/ifcfg-*`
- On systemd systems: Use `networkd` or `NetworkManager`

### How Do I Monitor Traffic on an Interface? ###

You can view traffic statistics by running:

```bash
ifconfig eth0

```

Look for RX (received) and TX (transmitted) packets and bytes.

### Can I Create Virtual Interfaces With Ifconfig? ###

Yes, you can create aliases for an interface:

```bash
sudo ifconfig eth0:1 192.168.1.101 netmask 255.255.255.0 up

```

This creates a virtual interface eth0:1 with the specified IP.

### How Do I Find My Network Interface Names? ###

Use this command to list all available interfaces:

```bash
ifconfig -a

```

Or on newer systems:

```bash
ip link show

```
