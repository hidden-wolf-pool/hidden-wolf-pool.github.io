# `hostnamectl` #

- **Purpose:** The `hostnamectl` command is used to query and change system hostname information and related settings on Linux systems using systemd. It allows users to view the current hostname and system information, change static, transient, or pretty hostnames, and manage the system's identification on the network. The command provides a unified interface for hostname management as part of the systemd ecosystem.
- **Usage:** `hostnamectl [OPTIONS] [COMMAND]`

## Basic Usage ##

Display current hostname and system information:

```bash
hostnamectl

```

Set the system hostname:

```bash
sudo hostnamectl set-hostname new-hostname

```

Set a pretty hostname:

```bash
sudo hostnamectl set-hostname "My Computer" --pretty

```

Set a static hostname:

```bash
sudo hostnamectl set-hostname myserver.local --static

```

Set a transient hostname:

```bash
sudo hostnamectl set-hostname temp-name --transient

```

Show only the hostname:

```bash
hostnamectl --static

```

## Options ##

- `--pretty` — Operate on the pretty hostname
- `--static` — Operate on the static hostname
- `--transient` — Operate on the transient hostname
- `--status` — Show current hostname and related information
- `--help` — Show help text and exit
- `--version` — Show package version

## Shortcuts ##

Common hostnamectl operations:

```bash
# Display detailed system information #
hostnamectl status

# Change hostname permanently #
sudo hostnamectl set-hostname new-server-name

# Set both static and pretty hostnames #
sudo hostnamectl set-hostname "Web Server 01" --static
sudo hostnamectl set-hostname "Web Server 01" --pretty

# Temporarily override hostname (until reboot) #
sudo hostnamectl set-hostname temp-name --transient

# Check current hostname settings #
hostnamectl | grep hostname

# Reset hostname to default #
sudo hostnamectl set-hostname "" --static

```

## FAQ ##

### What Are The Different Types Of Hostnames? ###

- `static` - The traditional hostname (stored in /etc/hostname), persists across reboots
- `transient` - Assigned by DHCP or manually, temporary, resets on reboot
- `pretty` - Free-form descriptive name (can include special characters and spaces)

### How Do I Permanently Change The Hostname? ###

Use the static hostname option:

```bash
sudo hostnamectl set-hostname new-hostname --static

```

### How Do I Verify The Hostname Change? ###

Check the status:

```bash
hostnamectl status
# OR #
hostnamectl

```

### Can I Include Spaces In The Pretty Hostname? ###

Yes, the pretty hostname can include spaces and special characters:

```bash
sudo hostnamectl set-hostname "My Laptop Computer" --pretty

```

### Will Changing The Hostname Affect Services? ###

Some services might need to be restarted after hostname changes, especially:

- SSH (for host key verification)
- Web servers with hostname-dependent configurations
- Mail servers
- Network services that depend on hostname for identification

After changing the hostname, you may need to update files like `/etc/hosts` to reflect the change.
