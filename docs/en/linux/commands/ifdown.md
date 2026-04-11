# `ifdown` #

- **Purpose:** The `ifdown` command is used to shut down network interfaces on Unix-like systems. It's part of the net-tools suite and works in conjunction with `ifup` to manage network interface states. The command reads interface configuration from `/etc/network/interfaces` (on Debian-based systems) and shuts down the specified network interface(s). It runs any pre-down or post-down scripts defined for the interface as specified in the configuration file.
- **Usage:** `ifdown [OPTIONS] [INTERFACE...]`

## Basic Usage ##

Shut down a specific network interface:

```bash
sudo ifdown eth0

```

Shut down multiple interfaces:

```bash
sudo ifdown eth0 wlan0

```

Force shutdown of an interface:

```bash
sudo ifdown -f eth0

```

Shut down with verbose output:

```bash
sudo ifdown -v eth0

```

Test the command without actually shutting down:

```bash
sudo ifdown --no-act eth0

```

Shut down interface with configuration file:

```bash
sudo ifdown -i /path/to/interfaces eth0

```

## Options ##

- `-f` — Force interface shutdown, even if marked as not configured
- `-v` — Verbose output, show what's being done
- `-n` — No operational mode, show what would be done without doing it
- `-i` — Use alternate interfaces file
- `--force` — Force interface shutdown
- `--no-act` — Show what would be done without doing it
- `--verbose` — Verbose output

## Shortcuts ##

Common ifdown operations:

```bash
# Shut down interface and bring it back up #
sudo ifdown eth0 && sudo ifup eth0

# Force shut down problematic interface #
sudo ifdown -f eth0

# Test command before execution #
sudo ifdown --no-act eth0

# Verbose shutdown to see all steps #
sudo ifdown -v eth0

# Shut down wireless interface #
sudo ifdown wlan0

# Check interface status before bringing down #
ip addr show eth0 && sudo ifdown eth0

```

## FAQ ##

### How Is Ifdown Different From Ifconfig Down? ###

- `ifdown` - Uses system configuration files and runs associated scripts
- `ifconfig interface down` - Directly manipulates the interface without using configuration files

### Can I Use Ifdown On Any Interface? ###

The interface must be defined in the `/etc/network/interfaces` file (on Debian/Ubuntu systems) or the equivalent configuration file for your distribution to be properly handled by `ifdown`.

### What Scripts Does Ifdown Execute? ###

During interface shutdown, `ifdown` executes:

- `pre-down` scripts (before bringing down the interface)
- `post-down` scripts (after the interface is brought down)

### How Do I Know If An Interface Is Down? ###

Check with:

```bash
ip addr show interface_name
# OR #
ifconfig interface_name
# OR #
ip link show interface_name

```

An interface that is down will show a "DOWN" state.

### How Do I Bring An Interface Back Up After Using Ifdown? ###

Use the corresponding `ifup` command:

```bash
sudo ifup interface_name

```

Alternatively, you can use:

```bash
sudo ifup interface_name
# OR #
sudo ip link set interface_name up

```
