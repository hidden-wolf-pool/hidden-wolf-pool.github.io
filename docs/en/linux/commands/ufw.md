# `ufw` #

- **Purpose:** UFW (Uncomplicated Firewall) is a user-friendly front-end for managing iptables firewall rules. It provides a simple interface for configuring an IPv4 and IPv6 firewall, making it easier for beginners and intermediate users to secure their systems without having to learn the complexities of iptables. UFW is the default firewall configuration tool for Ubuntu and is commonly used in other Debian-based systems.
- **Usage:** `ufw [OPTIONS] COMMAND [ARGUMENTS...]`

## Basic Usage ##

Enable the firewall:

```bash
sudo ufw enable

```

Disable the firewall:

```bash
sudo ufw disable

```

Check firewall status:

```bash
sudo ufw status

```

Allow a specific port:

```bash
sudo ufw allow 22

```

Allow a specific port with protocol:

```bash
sudo ufw allow 80/tcp

```

Deny a specific port:

```bash
sudo ufw deny 3128

```

Allow a range of ports:

```bash
sudo ufw allow 6000:6007/tcp

```

Allow a service by name:

```bash
sudo ufw allow ssh

```

Delete a rule:

```bash
sudo ufw delete allow 80

```

## Options ##

- `--dry-run` — Don't modify anything, just show what would be done
- `--force` — Force enable without confirmation prompt
- `--version` — Show version information
- `--help` — Show help message
- `-f` — Force command (skip confirmation)
- `-s` — Show additional output
- `-v` — Verbose output

## Shortcuts ##

Common UFW operations:

```bash
# Check firewall status with detailed output #
sudo ufw status verbose

# Allow access from specific IP #
sudo ufw allow from 192.168.1.100

# Allow access to specific port from specific IP #
sudo ufw allow from 192.168.1.100 to any port 22

# Deny all incoming connections by default #
sudo ufw default deny incoming

# Allow all outgoing connections by default #
sudo ufw default allow outgoing

# Limit certain services to prevent brute-force attacks #
sudo ufw limit ssh

# Reset firewall to installation defaults #
sudo ufw reset

# Enable logging #
sudo ufw logging on

# Set logging level #
sudo ufw logging medium

# Allow specific application profiles #
sudo ufw app list
sudo ufw app info OpenSSH

# Use subnet notation #
sudo ufw allow from 192.168.1.0/24

# Allow specific port from subnet #
sudo ufw allow from 192.168.1.0/24 to any port 22

# Show status with numbers for deletion #
sudo ufw status numbered

# Delete rule by number from numbered list #
sudo ufw delete 1

# Reload firewall rules #
sudo ufw reload

# Show application profiles #
sudo ufw app info 'Nginx Full'

# Enable firewall with force (skips confirmation) #
sudo ufw --force enable

# Deny port from specific IP #
sudo ufw deny from 10.0.0.100 to any port 22

```

## FAQ ##

### How Do I Enable UFW After Installation? ###

Enable the firewall with:

```bash
sudo ufw enable

```

You'll be warned that the command may disrupt SSH connections if not properly configured.

### How Do I Allow SSH Connections Through UFW? ###

Before enabling UFW, allow SSH:

```bash
sudo ufw allow ssh
# OR #
sudo ufw allow 22

```

### How Do I Check The Current Firewall Rules? ###

Use the status command:

```bash
sudo ufw status
sudo ufw status verbose  # For detailed output

```

### How Do I Delete A Rule? ###

Either by specifying the rule exactly:

```bash
sudo ufw delete allow 80

```

Or by using the numbered list:

```bash
sudo ufw status numbered
sudo ufw delete 1  # Deletes rule number 1 from the list

```

### What Is The Difference Between Allow And Deny In UFW? ###

- `allow` - Creates firewall rules that permit traffic through the specified ports
- `deny` - Creates firewall rules that block traffic through the specified ports
- `reject` - Blocks traffic and sends a response back to the requester
- `limit` - Allows traffic but rate-limits to prevent brute-force attacks
